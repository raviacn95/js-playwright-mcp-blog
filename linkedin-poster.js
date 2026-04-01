/**
 * linkedin-poster.js
 *
 * Reads the first 10 posts from posts-data.js and publishes each one
 * to LinkedIn, waiting 1 minute between posts.
 *
 * Required environment variables:
 *   LINKEDIN_EMAIL    – your LinkedIn login e-mail
 *   LINKEDIN_PASSWORD – your LinkedIn login password
 *
 * Optional:
 *   HEADLESS=false    – show the browser window (default: headless/true)
 *
 * Usage:
 *   npm install
 *   npx playwright install chromium
 *   LINKEDIN_EMAIL=you@email.com LINKEDIN_PASSWORD=secret node linkedin-poster.js
 *   # To watch the browser:
 *   LINKEDIN_EMAIL=you@email.com LINKEDIN_PASSWORD=secret HEADLESS=false node linkedin-poster.js
 */

const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

/* ── Configuration ──────────────────────────────────────────── */

const MAX_POSTS = 10;           // total posts to publish
const INTERVAL_MS = 60 * 1000; // 1 minute between posts

/* ── Load posts from posts-data.js ─────────────────────────── */

function loadPosts() {
  const vm = require("vm");
  const filePath = path.join(__dirname, "posts-data.js");
  const src = fs.readFileSync(filePath, "utf8");
  // `const` is lexically scoped and not exposed via the vm context object,
  // so wrap in an IIFE that returns ALL_POSTS explicitly.
  // The file is a trusted local asset under source control.
  const wrapped = `(function(){\n${src}\nreturn ALL_POSTS;\n})()`;
  const posts = vm.runInNewContext(wrapped, {});
  if (!Array.isArray(posts)) {
    throw new Error("ALL_POSTS not found or not an array in posts-data.js");
  }
  return posts;
}

/* ── Build post text ────────────────────────────────────────── */

function buildPostText(post) {
  const hashtags = post.tags.map((t) => `#${t.replace(/\s+/g, "")}`).join(" ");
  return [
    `📌 ${post.title}`,
    "",
    post.excerpt,
    "",
    hashtags,
    "",
    "🔗 https://raviacn95.github.io/js-playwright-mcp-blog/",
  ].join("\n");
}

/* ── LinkedIn automation ────────────────────────────────────── */

async function loginToLinkedIn(page, email, password) {
  console.log("🔐 Logging in to LinkedIn…");
  await page.goto("https://www.linkedin.com/login", { waitUntil: "networkidle" });

  await page.fill("#username", email);
  await page.fill("#password", password);
  await page.click('[type="submit"]');

  // Wait for the feed to confirm successful login
  await page.waitForURL("**/feed/**", { timeout: 30_000 });
  console.log("✅ Logged in.");
}

async function createLinkedInPost(page, text, postNumber) {
  console.log(`\n📝 Publishing post ${postNumber}/${MAX_POSTS}…`);

  // Navigate to feed in case we drifted
  await page.goto("https://www.linkedin.com/feed/", { waitUntil: "networkidle" });

  // Click "Start a post" button (the main share box)
  const startPostBtn = page.locator('[data-control-name="share.sharebox_text"], button:has-text("Start a post")').first();
  await startPostBtn.waitFor({ timeout: 15_000 });
  await startPostBtn.click();

  // Wait for the post modal/editor
  const editor = page.locator('.ql-editor[contenteditable="true"], [role="textbox"][aria-label*="post"]').first();
  await editor.waitFor({ timeout: 15_000 });
  await editor.click();
  await editor.fill(text);

  // Click the Post / Submit button
  const postBtn = page.locator('button.share-actions__primary-action, button:has-text("Post")').last();
  await postBtn.waitFor({ timeout: 10_000 });
  await postBtn.click();

  // Wait for the modal to close (post submitted)
  await page.waitForSelector('.share-creation-state--empty, .share-box-feed-entry__trigger', { timeout: 20_000 });
  console.log(`✅ Post ${postNumber} published.`);
}

/* ── Main ────────────────────────────────────────────────────── */

async function main() {
  const email = process.env.LINKEDIN_EMAIL;
  const password = process.env.LINKEDIN_PASSWORD;

  if (!email || !password) {
    console.error("❌ Set LINKEDIN_EMAIL and LINKEDIN_PASSWORD environment variables before running.");
    process.exit(1);
  }

  const allPosts = loadPosts();
  const posts = allPosts.slice(0, MAX_POSTS);
  console.log(`📋 Loaded ${posts.length} posts. Starting LinkedIn publisher…`);

  const browser = await chromium.launch({ headless: process.env.HEADLESS !== "false" });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await loginToLinkedIn(page, email, password);

    for (let i = 0; i < posts.length; i++) {
      const postText = buildPostText(posts[i]);
      await createLinkedInPost(page, postText, i + 1);

      if (i < posts.length - 1) {
        console.log(`⏳ Waiting 1 minute before next post…`);
        await new Promise((resolve) => setTimeout(resolve, INTERVAL_MS));
      }
    }

    console.log(`\n🎉 All ${MAX_POSTS} posts published to LinkedIn!`);
  } catch (err) {
    console.error("❌ Error during posting:", err.message);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

main();
