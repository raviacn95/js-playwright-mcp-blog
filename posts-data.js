/* ================================================================
   100 INTERACTIVE BLOG POSTS — JavaScript · Playwright · MCP
   Generated from your notes. Loaded instantly on page open.
   ================================================================ */

// eslint-disable-next-line no-unused-vars
const ALL_POSTS = [
  /* ──────────────────────────────────────────────
     JAVASCRIPT CHEATSHEET  (Posts 1 – 39)
     ────────────────────────────────────────────── */
  {
    id: 1, category: "JavaScript",
    title: "JS Variables: var, let & const",
    tags: ["javascript","variables","basics"],
    excerpt: "Understand scoping rules and when to pick var, let, or const.",
    content: `## Core Concept
\`var\` is **function-scoped** and can be redeclared. \`let\` and \`const\` are **block-scoped**.

\`\`\`js
var name = "bus";   // function-scoped, can redeclare
let age = 25;       // block-scoped, can update
const country = "USA"; // block-scoped, cannot reassign
\`\`\`

## Key Rules
- Prefer **const** by default
- Use **let** only when the value must change
- Avoid **var** in modern code (hoisting surprises)

## 💡 Try This
\`\`\`js
const x = 10;
x = 20; // ❌ TypeError: Assignment to constant variable
\`\`\`

## ❓ Quick Quiz
**Q:** What happens if you declare \`let x = 1;\` twice in the same block?
**A:** SyntaxError — \`let\` cannot be redeclared in the same scope.

## 🔑 Key Takeaway
Use \`const\` for everything; switch to \`let\` only when mutation is required.`
  },
  {
    id: 2, category: "JavaScript",
    title: "JS Primitive Data Types",
    tags: ["javascript","types","primitives"],
    excerpt: "The 7 primitive types: string, number, boolean, null, undefined, symbol, BigInt.",
    content: `## The 7 Primitives
\`\`\`js
let str = "Hello";                // String
let num = 42;                     // Number
let bigIntNum = 9007199254740991n; // BigInt
let isTrue = true;                // Boolean
let nothing = null;               // Null
let notDefined;                   // Undefined
let sym = Symbol("id");           // Symbol
\`\`\`

## Important Gotchas
- \`typeof null\` returns \`"object"\` — a legacy JS quirk
- \`NaN\` is of type \`number\`
- \`BigInt\` cannot be mixed with regular numbers without explicit conversion

## 💡 Try This
\`\`\`js
console.log(typeof null);       // "object"
console.log(typeof undefined);  // "undefined"
console.log(typeof NaN);        // "number"
\`\`\`

## ❓ Quick Quiz
**Q:** Is \`null === undefined\`?
**A:** No — strict equality is false. But \`null == undefined\` is true (loose equality).

## 🔑 Key Takeaway
Know all 7 primitives and the \`typeof null\` quirk — it's a classic interview question.`
  },
  {
    id: 3, category: "JavaScript",
    title: "JS Non-Primitive Types: Objects, Arrays, Functions",
    tags: ["javascript","objects","arrays","reference-types"],
    excerpt: "Everything that isn't a primitive is an object — including arrays and functions.",
    content: `## Reference Types
\`\`\`js
let obj = { name: "Sam", age: 25 };  // Object
let arr = [1, 2, 3];                 // Array (special object)
let fn  = function() {};              // Function (callable object)
\`\`\`

## Key Difference: Value vs Reference
- Primitives are copied by **value**
- Objects/Arrays are copied by **reference**

\`\`\`js
let a = [1, 2];
let b = a;        // b points to SAME array
b.push(3);
console.log(a);   // [1, 2, 3] — a is also changed!
\`\`\`

## 💡 Try This
\`\`\`js
let original = { x: 10 };
let copy = { ...original }; // shallow copy
copy.x = 99;
console.log(original.x);    // 10 — not affected
\`\`\`

## 🔑 Key Takeaway
Always clone objects/arrays when you need independent copies. Use spread \`{...obj}\` or \`[...arr]\`.`
  },
  {
    id: 4, category: "JavaScript",
    title: "JS Type Checking: typeof & Array.isArray",
    tags: ["javascript","typeof","type-checking"],
    excerpt: "Use typeof for primitives and Array.isArray for arrays.",
    content: `## typeof Operator
\`\`\`js
typeof "Hello"    // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof null       // "object" ⚠️ historical quirk
typeof {}         // "object"
typeof []         // "object" — NOT "array"!
\`\`\`

## Checking Arrays
\`\`\`js
Array.isArray([]);        // true
Array.isArray({});        // false
Array.isArray("hello");   // false
\`\`\`

## ❓ Quick Quiz
**Q:** How do you reliably check if something is an array?
**A:** Use \`Array.isArray(value)\` — never rely on \`typeof\` for arrays.

## 🔑 Key Takeaway
\`typeof\` works for primitives. For arrays, always use \`Array.isArray()\`.`
  },
  {
    id: 5, category: "JavaScript",
    title: "JS Arithmetic Operators",
    tags: ["javascript","operators","arithmetic"],
    excerpt: "Addition, subtraction, multiplication, division, modulus, exponent, increment, decrement.",
    content: `## All Arithmetic Operators
\`\`\`js
5 + 3    // 8   addition
5 - 3    // 2   subtraction
5 * 3    // 15  multiplication
5 / 3    // 1.666... division
5 % 3    // 2   modulus (remainder)
5 ** 3   // 125 exponent
\`\`\`

## Increment & Decrement
\`\`\`js
let x = 5;
x++;  // 6 (post-increment)
++x;  // 7 (pre-increment)
x--;  // 6 (post-decrement)
\`\`\`

## 💡 Try This
\`\`\`js
console.log(10 % 3);  // 1 — useful for even/odd checks
console.log(2 ** 10); // 1024 — power of 2
\`\`\`

## 🔑 Key Takeaway
\`%\` (modulus) is great for cycling through indices and checking divisibility.`
  },
  {
    id: 6, category: "JavaScript",
    title: "JS Assignment Operators",
    tags: ["javascript","operators","assignment"],
    excerpt: "Shorthand operators: +=, -=, *=, /=, %= for concise variable updates.",
    content: `## Assignment Shortcuts
\`\`\`js
let x = 10;
x += 5;   // 15  (x = x + 5)
x -= 5;   // 10  (x = x - 5)
x *= 5;   // 50  (x = x * 5)
x /= 5;   // 10  (x = x / 5)
x %= 3;   // 1   (x = x % 3)
x **= 2;  // 1   (x = x ** 2)
\`\`\`

## 💡 When to Use
- Counters: \`count += 1\` instead of \`count = count + 1\`
- Accumulators: \`total += price\`
- Scaling: \`value *= factor\`

## 🔑 Key Takeaway
Assignment operators are syntactic sugar — they make code shorter but do the same thing.`
  },
  {
    id: 7, category: "JavaScript",
    title: "JS Comparison: == vs === (Loose vs Strict)",
    tags: ["javascript","comparison","equality"],
    excerpt: "Always prefer strict equality (===) to avoid type coercion surprises.",
    content: `## Comparison Operators
\`\`\`js
5 == "5"    // true  — loose equality (type coercion)
5 === "5"   // false — strict equality (no coercion)
5 != "5"    // false — loose inequality
5 !== "5"   // true  — strict inequality
5 > 3       // true
5 < 3       // false
5 >= 3      // true
5 <= 3      // false
\`\`\`

## Why === Always
\`\`\`js
0 == ""     // true  ⚠️ unexpected
0 === ""    // false ✅ correct
null == undefined  // true  ⚠️
null === undefined // false ✅
\`\`\`

## ❓ Quick Quiz
**Q:** What does \`[] == false\` return?
**A:** \`true\` — because both coerce to 0. This is why you never use \`==\`.

## 🔑 Key Takeaway
Always use \`===\` and \`!==\`. Loose equality causes bugs that are hard to trace.`
  },
  {
    id: 8, category: "JavaScript",
    title: "JS Logical Operators & Nullish Coalescing",
    tags: ["javascript","logical","nullish-coalescing"],
    excerpt: "AND (&&), OR (||), NOT (!), and the modern ?? operator.",
    content: `## Logical Operators
\`\`\`js
true && false   // false — AND: both must be true
true || false   // true  — OR: at least one true
!true           // false — NOT: flips boolean
\`\`\`

## Nullish Coalescing (??)
\`\`\`js
let val1 = null ?? "default";     // "default"
let val2 = undefined ?? "default"; // "default"
let val3 = 0 ?? "default";        // 0 — only null/undefined trigger ??
let val4 = "" ?? "default";       // "" — empty string is NOT null
\`\`\`

## ?? vs ||
\`\`\`js
0 || "fallback"   // "fallback" — 0 is falsy
0 ?? "fallback"   // 0 — ?? only checks null/undefined
\`\`\`

## 💡 Try This
\`\`\`js
const config = { timeout: 0 };
const t1 = config.timeout || 3000; // 3000 ❌ lost the 0
const t2 = config.timeout ?? 3000; // 0    ✅ correct
\`\`\`

## 🔑 Key Takeaway
Use \`??\` when 0, false, or "" are valid values. Use \`||\` for general falsy fallbacks.`
  },
  {
    id: 9, category: "JavaScript",
    title: "JS If / Else Control Flow",
    tags: ["javascript","control-flow","conditionals"],
    excerpt: "Branch execution based on conditions with if, else if, and else.",
    content: `## Basic If/Else
\`\`\`js
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teen");
} else {
  console.log("Child");
}
\`\`\`

## Truthy & Falsy Values
Falsy: \`false, 0, "", null, undefined, NaN\`
Everything else is truthy (including \`[]\`, \`{}\`, \`"0"\`)

\`\`\`js
if ([]) console.log("truthy!");  // ✅ runs — empty array is truthy
if ("") console.log("nope");    // ❌ skipped — empty string is falsy
\`\`\`

## ❓ Quick Quiz
**Q:** Is \`if ([])\` truthy or falsy?
**A:** Truthy! Empty arrays and objects are always truthy in JS.

## 🔑 Key Takeaway
Know the 6 falsy values. Everything else — including empty arrays and objects — is truthy.`
  },
  {
    id: 10, category: "JavaScript",
    title: "JS Ternary Operator",
    tags: ["javascript","ternary","conditionals"],
    excerpt: "One-line conditionals: condition ? valueIfTrue : valueIfFalse.",
    content: `## Syntax
\`\`\`js
let msg = (age >= 18) ? "Adult" : "Minor";
\`\`\`

## Nested Ternary (Use Sparingly)
\`\`\`js
let label = score >= 90 ? "A"
          : score >= 80 ? "B"
          : score >= 70 ? "C"
          : "F";
\`\`\`

## 💡 Best Practice
- Use ternary for simple one-line assignments
- Use if/else for complex logic with side effects
- Never nest more than 2 levels deep

## 🔑 Key Takeaway
Ternary is great for inline value selection. Keep it simple — if it needs explanation, use if/else.`
  },
  {
    id: 11, category: "JavaScript",
    title: "JS Switch Statement",
    tags: ["javascript","switch","control-flow"],
    excerpt: "Multi-branch selection with switch/case for cleaner value matching.",
    content: `## Switch Syntax
\`\`\`js
switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Weekend soon!");
    break;
  default:
    console.log("Another day");
}
\`\`\`

## Common Pitfall: Missing break
\`\`\`js
switch (x) {
  case 1:
    console.log("one");
    // ⚠️ falls through to next case!
  case 2:
    console.log("two");
    break;
}
\`\`\`

## 💡 Try This
Use switch for mapping fixed values. For ranges, prefer if/else.

## 🔑 Key Takeaway
Always include \`break\` (or \`return\`) in each case. Fall-through bugs are common.`
  },
  {
    id: 12, category: "JavaScript",
    title: "JS For Loop",
    tags: ["javascript","loops","for"],
    excerpt: "The classic counted loop: initialize, condition, increment.",
    content: `## Standard For Loop
\`\`\`js
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
\`\`\`

## Reverse Loop
\`\`\`js
for (let i = 4; i >= 0; i--) {
  console.log(i); // 4, 3, 2, 1, 0
}
\`\`\`

## Looping Arrays
\`\`\`js
const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
\`\`\`

## 💡 Try This
For most array iteration, prefer \`.forEach()\`, \`.map()\`, or \`for...of\` instead of manual index loops.

## 🔑 Key Takeaway
Classic for loops give full control over index. Use them for index-dependent operations.`
  },
  {
    id: 13, category: "JavaScript",
    title: "JS While & Do...While Loops",
    tags: ["javascript","loops","while"],
    excerpt: "While checks before running; do...while runs at least once.",
    content: `## While Loop
\`\`\`js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
\`\`\`

## Do...While Loop
\`\`\`js
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);
\`\`\`

## Key Difference
\`\`\`js
let x = 10;
while (x < 5) { console.log("never runs"); }

do { console.log("runs once!"); } while (x < 5);
// "runs once!" — body executes before condition check
\`\`\`

## 🔑 Key Takeaway
Use \`do...while\` when you need the body to execute at least once (e.g., menu prompts).`
  },
  {
    id: 14, category: "JavaScript",
    title: "JS for...of & for...in Iterators",
    tags: ["javascript","loops","iterators"],
    excerpt: "for...of iterates values (arrays/strings); for...in iterates keys (objects).",
    content: `## for...of — Values (Arrays, Strings)
\`\`\`js
for (let val of [10, 20, 30]) {
  console.log(val); // 10, 20, 30
}

for (let char of "Hello") {
  console.log(char); // H, e, l, l, o
}
\`\`\`

## for...in — Keys (Objects)
\`\`\`js
for (let key in { a: 1, b: 2 }) {
  console.log(key); // "a", "b"
}
\`\`\`

## ⚠️ Common Mistake
\`\`\`js
// DON'T use for...in on arrays
for (let i in [10, 20]) {
  console.log(i);     // "0", "1" — gives string indices!
  console.log(typeof i); // "string"
}
\`\`\`

## 🔑 Key Takeaway
\`for...of\` = values (arrays). \`for...in\` = keys (objects). Never mix them up.`
  },
  {
    id: 15, category: "JavaScript",
    title: "JS Function Declarations",
    tags: ["javascript","functions","hoisting"],
    excerpt: "Function declarations are hoisted — you can call them before they're defined.",
    content: `## Function Declaration
\`\`\`js
function greet(name) {
  return \`Hello \${name}\`;
}
console.log(greet("Sam")); // "Hello Sam"
\`\`\`

## Hoisting
\`\`\`js
// This works! Declaration is hoisted.
sayHi(); // "Hi!"
function sayHi() { console.log("Hi!"); }
\`\`\`

## 💡 Try This
\`\`\`js
// Function expressions are NOT hoisted:
sayBye(); // ❌ ReferenceError
const sayBye = function() { console.log("Bye!"); };
\`\`\`

## 🔑 Key Takeaway
Declarations are hoisted to the top of their scope. Expressions are not.`
  },
  {
    id: 16, category: "JavaScript",
    title: "JS Function Expressions",
    tags: ["javascript","functions","expressions"],
    excerpt: "Assign a function to a variable — not hoisted, evaluated at runtime.",
    content: `## Function Expression
\`\`\`js
const greet = function(name) {
  return \`Hello \${name}\`;
};
console.log(greet("Sam")); // "Hello Sam"
\`\`\`

## Named vs Anonymous
\`\`\`js
// Anonymous
const add = function(a, b) { return a + b; };

// Named (useful for stack traces)
const add = function addNumbers(a, b) { return a + b; };
\`\`\`

## IIFE (Immediately Invoked Function Expression)
\`\`\`js
(function() {
  console.log("Runs immediately!");
})();
\`\`\`

## 🔑 Key Takeaway
Function expressions give you more control over when functions are available. Prefer them with \`const\`.`
  },
  {
    id: 17, category: "JavaScript",
    title: "JS Arrow Functions",
    tags: ["javascript","arrow-functions","es6"],
    excerpt: "Concise syntax with => and lexical this binding.",
    content: `## Arrow Function Syntax
\`\`\`js
const greet = (name) => \`Hello \${name}\`;
const add = (a, b) => a + b;
const log = () => console.log("hi");
\`\`\`

## Multi-line Arrow
\`\`\`js
const calculate = (a, b) => {
  const sum = a + b;
  return sum * 2;
};
\`\`\`

## Key Difference: this
\`\`\`js
const obj = {
  name: "Sam",
  // ❌ Arrow function: 'this' is lexical (parent scope)
  greetArrow: () => console.log(this.name),
  // ✅ Regular function: 'this' is the object
  greetRegular() { console.log(this.name); }
};
\`\`\`

## ❓ Quick Quiz
**Q:** Can arrow functions be used as constructors?
**A:** No — \`new (() => {})\` throws TypeError. They have no \`prototype\`.

## 🔑 Key Takeaway
Use arrow functions for callbacks and short expressions. Use regular functions for object methods needing \`this\`.`
  },
  {
    id: 18, category: "JavaScript",
    title: "JS Default & Rest Parameters",
    tags: ["javascript","parameters","rest","defaults"],
    excerpt: "Set fallback values with defaults; collect unlimited args with rest.",
    content: `## Default Parameters
\`\`\`js
function multiply(a, b = 2) {
  return a * b;
}
multiply(5);    // 10 (b defaults to 2)
multiply(5, 3); // 15
\`\`\`

## Rest Parameters
\`\`\`js
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3);     // 6
sum(10, 20, 30, 40); // 100
\`\`\`

## Rest Must Be Last
\`\`\`js
function tag(first, ...rest) {
  console.log(first);  // "a"
  console.log(rest);   // ["b", "c"]
}
tag("a", "b", "c");
\`\`\`

## 🔑 Key Takeaway
Defaults replace \`undefined\` arguments. Rest (\`...\`) collects remaining args into a real array.`
  },
  {
    id: 19, category: "JavaScript",
    title: "JS Objects & the this Keyword",
    tags: ["javascript","objects","this"],
    excerpt: "Object literals, methods, and how this works in different contexts.",
    content: `## Object Literal
\`\`\`js
const person = {
  name: "Sam",
  age: 25,
  greet() {
    console.log(\`Hi, I'm \${this.name}\`);
  }
};
person.greet(); // "Hi, I'm Sam"
\`\`\`

## this Behavior
- **Regular method**: \`this\` = the object
- **Arrow function**: \`this\` = parent scope (lexical)
- **Standalone function**: \`this\` = undefined (strict) or window

## Object Shortcuts (ES6)
\`\`\`js
const name = "Sam", age = 25;
const person = { name, age }; // { name: "Sam", age: 25 }
\`\`\`

## ❓ Quick Quiz
**Q:** What does \`this\` refer to inside a regular function called without an object?
**A:** In strict mode: \`undefined\`. In sloppy mode: the global object (\`window\`).

## 🔑 Key Takeaway
\`this\` depends on **how** the function is called, not where it's defined (except arrow functions).`
  },
  {
    id: 20, category: "JavaScript",
    title: "JS Array Mutation: push, pop, shift, splice",
    tags: ["javascript","arrays","mutation"],
    excerpt: "Methods that modify the original array in place.",
    content: `## Mutation Methods
\`\`\`js
let arr = [1, 2, 3];
arr.push(4);        // [1,2,3,4] — add at end
arr.pop();          // [1,2,3]   — remove last
arr.unshift(0);     // [0,1,2,3] — add at start
arr.shift();        // [1,2,3]   — remove first
\`\`\`

## splice — The Swiss Army Knife
\`\`\`js
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 1);       // remove 1 element at index 1 → [1,3,4,5]
arr.splice(1, 0, 99);   // insert 99 at index 1 → [1,99,3,4,5]
arr.splice(2, 1, 88);   // replace element at index 2 → [1,99,88,4,5]
\`\`\`

## Search Methods
\`\`\`js
[1,2,3].includes(2);  // true
[1,2,3].indexOf(2);   // 1
[1,2,3].indexOf(99);  // -1 (not found)
\`\`\`

## 🔑 Key Takeaway
push/pop operate on the end (fast). shift/unshift operate on the start (slower). splice does everything.`
  },
  {
    id: 21, category: "JavaScript",
    title: "JS Array .map() — Transform Every Element",
    tags: ["javascript","map","arrays","functional"],
    excerpt: "Create a new array by transforming each element. Never mutates original.",
    content: `## .map() Basics
\`\`\`js
const nums = [1, 2, 3];
const doubled = nums.map(x => x * 2);
// doubled = [2, 4, 6]
// nums is still [1, 2, 3] ✅
\`\`\`

## Real-World Use
\`\`\`js
const users = [{name:"Sam"}, {name:"Jo"}];
const names = users.map(u => u.name);
// ["Sam", "Jo"]
\`\`\`

## 💡 map vs forEach
- \`map\` returns a **new array** — use when you need transformed data
- \`forEach\` returns **nothing** — use for side effects only

## 🔑 Key Takeaway
\`.map()\` is the go-to for transforming arrays. It's pure — always returns a new array.`
  },
  {
    id: 22, category: "JavaScript",
    title: "JS Array .filter() — Select a Subset",
    tags: ["javascript","filter","arrays","functional"],
    excerpt: "Return a new array containing only elements that pass the test.",
    content: `## .filter() Basics
\`\`\`js
const nums = [1, 2, 3, 4, 5];
const big = nums.filter(x => x > 3);
// [4, 5]
\`\`\`

## Chaining with map
\`\`\`js
const prices = [10, 25, 5, 50, 3];
const expensive = prices
  .filter(p => p > 10)
  .map(p => \`$\${p}\`);
// ["$25", "$50"]
\`\`\`

## Remove Falsy Values
\`\`\`js
const mixed = [0, "hello", null, 42, "", undefined];
const clean = mixed.filter(Boolean);
// ["hello", 42]
\`\`\`

## 🔑 Key Takeaway
\`.filter()\` selects elements that pass a condition. Chain it with \`.map()\` for powerful data pipelines.`
  },
  {
    id: 23, category: "JavaScript",
    title: "JS Array .reduce() — Accumulate to Single Value",
    tags: ["javascript","reduce","arrays","functional"],
    excerpt: "Reduce an array down to one value — sum, object, or anything.",
    content: `## Basic Reduce
\`\`\`js
const nums = [1, 2, 3];
const sum = nums.reduce((acc, val) => acc + val, 0);
// 6
\`\`\`

## Build an Object
\`\`\`js
const items = ["apple", "banana", "apple"];
const counts = items.reduce((obj, item) => {
  obj[item] = (obj[item] || 0) + 1;
  return obj;
}, {});
// { apple: 2, banana: 1 }
\`\`\`

## Flatten Arrays
\`\`\`js
const nested = [[1,2], [3,4], [5]];
const flat = nested.reduce((acc, arr) => [...acc, ...arr], []);
// [1, 2, 3, 4, 5]
\`\`\`

## ❓ Quick Quiz
**Q:** What's the second argument to reduce?
**A:** The initial value of the accumulator. Always provide it to avoid bugs with empty arrays.

## 🔑 Key Takeaway
\`.reduce()\` is the most powerful array method. Use it for sums, grouping, flattening, and custom aggregations.`
  },
  {
    id: 24, category: "JavaScript",
    title: "JS .forEach(), .some(), .every()",
    tags: ["javascript","arrays","iteration"],
    excerpt: "forEach for side effects, some/every for boolean checks on arrays.",
    content: `## forEach — Side Effects
\`\`\`js
[1, 2, 3].forEach(x => console.log(x));
// logs: 1, 2, 3 (returns undefined)
\`\`\`

## some — At Least One Match
\`\`\`js
[1, 2, 3].some(x => x > 2);  // true
[1, 2, 3].some(x => x > 5);  // false
\`\`\`

## every — All Must Match
\`\`\`js
[1, 2, 3].every(x => x > 0);  // true
[1, 2, 3].every(x => x > 2);  // false
\`\`\`

## 💡 Performance Tip
\`some\` and \`every\` short-circuit — they stop as soon as the result is determined.

## 🔑 Key Takeaway
forEach = do something. some = any match? every = all match? Choose the right tool.`
  },
  {
    id: 25, category: "JavaScript",
    title: "JS Destructuring: Arrays & Objects",
    tags: ["javascript","destructuring","es6"],
    excerpt: "Extract values from arrays/objects into variables in one statement.",
    content: `## Array Destructuring
\`\`\`js
let [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// Skip elements
let [first, , third] = [10, 20, 30];
// first=10, third=30
\`\`\`

## Object Destructuring
\`\`\`js
let { name, age } = { name: "Sam", age: 25 };
console.log(name); // "Sam"

// Rename variables
let { name: userName } = { name: "Sam" };
console.log(userName); // "Sam"
\`\`\`

## Default Values
\`\`\`js
let { color = "blue" } = {};
console.log(color); // "blue"
\`\`\`

## Function Parameter Destructuring
\`\`\`js
function greet({ name, age }) {
  return \`\${name} is \${age}\`;
}
greet({ name: "Sam", age: 25 });
\`\`\`

## 🔑 Key Takeaway
Destructuring makes code cleaner. Use it for function parameters, API responses, and imports.`
  },
  {
    id: 26, category: "JavaScript",
    title: "JS Spread Operator (...)",
    tags: ["javascript","spread","es6"],
    excerpt: "Expand arrays/objects. Clone, merge, and compose without mutation.",
    content: `## Array Spread
\`\`\`js
let nums = [1, 2, 3];
let copy = [...nums];           // [1, 2, 3] — shallow clone
let merged = [...nums, 4, 5];   // [1, 2, 3, 4, 5]
\`\`\`

## Object Spread
\`\`\`js
let defaults = { color: "blue", size: "M" };
let custom = { ...defaults, size: "L" };
// { color: "blue", size: "L" } — last wins
\`\`\`

## Spread in Function Calls
\`\`\`js
Math.max(...[5, 10, 3]); // 10
\`\`\`

## ⚠️ Shallow Only
\`\`\`js
let nested = { a: { b: 1 } };
let copy = { ...nested };
copy.a.b = 99;
console.log(nested.a.b); // 99 — inner object is shared!
\`\`\`

## 🔑 Key Takeaway
Spread creates shallow copies. For nested objects, use structured cloning or libraries.`
  },
  {
    id: 27, category: "JavaScript",
    title: "JS DOM Manipulation",
    tags: ["javascript","dom","web-api"],
    excerpt: "Select elements, modify text/styles, and create dynamic content.",
    content: `## Selecting Elements
\`\`\`js
document.getElementById("id");
document.querySelector(".class");     // first match
document.querySelectorAll("p");       // all matches (NodeList)
\`\`\`

## Modifying Elements
\`\`\`js
let el = document.querySelector("#title");
el.textContent = "New Title";
el.style.color = "red";
el.classList.add("active");
el.classList.toggle("hidden");
\`\`\`

## Creating Elements
\`\`\`js
const div = document.createElement("div");
div.textContent = "Hello!";
document.body.appendChild(div);
\`\`\`

## 💡 Try This
\`\`\`js
document.querySelectorAll("p").forEach(p => {
  p.style.fontWeight = "bold";
});
\`\`\`

## 🔑 Key Takeaway
querySelector/querySelectorAll are the modern standard. Prefer them over getElementById for flexibility.`
  },
  {
    id: 28, category: "JavaScript",
    title: "JS Event Handling",
    tags: ["javascript","events","dom"],
    excerpt: "Listen for user interactions with addEventListener.",
    content: `## addEventListener
\`\`\`js
document.querySelector("button")
  .addEventListener("click", () => {
    alert("Button clicked!");
  });
\`\`\`

## Event Object
\`\`\`js
document.addEventListener("keydown", (e) => {
  console.log(e.key);        // "Enter", "a", etc.
  console.log(e.target);     // the element that fired
});
\`\`\`

## Event Delegation
\`\`\`js
// Listen on parent, handle children
document.querySelector("#list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
\`\`\`

## Remove Listener
\`\`\`js
function handler() { console.log("clicked"); }
btn.addEventListener("click", handler);
btn.removeEventListener("click", handler);
\`\`\`

## 🔑 Key Takeaway
Event delegation (listen on parent) is efficient for dynamic lists. Always use addEventListener over inline handlers.`
  },
  {
    id: 29, category: "JavaScript",
    title: "JS JSON: stringify & parse",
    tags: ["javascript","json","serialization"],
    excerpt: "Convert between objects and JSON strings for storage and APIs.",
    content: `## JSON.stringify & JSON.parse
\`\`\`js
let obj = { name: "Sam" };
let jsonStr = JSON.stringify(obj);  // '{"name":"Sam"}'
let parsed = JSON.parse(jsonStr);   // { name: "Sam" }
\`\`\`

## Deep Clone Trick
\`\`\`js
let original = { a: { b: 1 } };
let clone = JSON.parse(JSON.stringify(original));
clone.a.b = 99;
console.log(original.a.b); // 1 ✅ independent
\`\`\`

## ⚠️ JSON Limitations
- Cannot serialize: functions, undefined, Symbol
- Dates become strings
- Circular references throw errors

## 💡 Modern Alternative
\`\`\`js
let clone = structuredClone(original); // handles more types
\`\`\`

## 🔑 Key Takeaway
JSON.stringify/parse are essential for localStorage, APIs, and quick deep clones.`
  },
  {
    id: 30, category: "JavaScript",
    title: "JS Promises",
    tags: ["javascript","promises","async"],
    excerpt: "Handle asynchronous operations with resolve, reject, and .then() chains.",
    content: `## Creating a Promise
\`\`\`js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
promise.then(result => console.log(result)); // "Done!" after 1s
\`\`\`

## Chaining
\`\`\`js
fetch("/api/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
\`\`\`

## Promise.all — Run in Parallel
\`\`\`js
Promise.all([fetchA(), fetchB(), fetchC()])
  .then(([a, b, c]) => console.log(a, b, c));
\`\`\`

## Promise States
- **pending** → initial state
- **fulfilled** → resolved successfully
- **rejected** → error occurred

## 🔑 Key Takeaway
Promises replace callbacks for async code. Chain with .then(), handle errors with .catch().`
  },
  {
    id: 31, category: "JavaScript",
    title: "JS Async / Await",
    tags: ["javascript","async-await","promises"],
    excerpt: "Write asynchronous code that reads like synchronous code.",
    content: `## async/await
\`\`\`js
async function fetchData() {
  let response = await fetch("https://api.example.com/data");
  let json = await response.json();
  console.log(json);
}
\`\`\`

## Error Handling
\`\`\`js
async function loadUser() {
  try {
    let res = await fetch("/api/user");
    let user = await res.json();
    return user;
  } catch (err) {
    console.error("Failed:", err);
  }
}
\`\`\`

## Parallel with await
\`\`\`js
// Sequential (slow) ❌
const a = await fetchA();
const b = await fetchB();

// Parallel (fast) ✅
const [a, b] = await Promise.all([fetchA(), fetchB()]);
\`\`\`

## ❓ Quick Quiz
**Q:** Does \`await\` block the main thread?
**A:** No — it pauses only the async function. The event loop continues.

## 🔑 Key Takeaway
async/await is syntactic sugar over Promises. Use try/catch for errors and Promise.all for parallelism.`
  },
  {
    id: 32, category: "JavaScript",
    title: "JS Modules: import & export",
    tags: ["javascript","modules","es6"],
    excerpt: "Organize code into reusable files with ES module syntax.",
    content: `## Named Exports
\`\`\`js
// math.js
export const PI = 3.14;
export function add(a, b) { return a + b; }

// main.js
import { PI, add } from './math.js';
\`\`\`

## Default Export
\`\`\`js
// logger.js
export default function log(msg) { console.log(msg); }

// main.js
import log from './logger.js';
\`\`\`

## Re-export
\`\`\`js
export { default as Logger } from './logger.js';
export { PI, add } from './math.js';
\`\`\`

## 💡 Best Practice
- One default export per file (the main thing)
- Named exports for utilities and constants
- Use \`type="module"\` in HTML script tags

## 🔑 Key Takeaway
Modules enable code splitting, tree-shaking, and clean architecture. They're the standard for modern JS.`
  },
  {
    id: 33, category: "JavaScript",
    title: "JS Error Handling: try / catch / finally",
    tags: ["javascript","errors","try-catch"],
    excerpt: "Gracefully handle runtime errors without crashing your application.",
    content: `## try/catch/finally
\`\`\`js
try {
  throw new Error("Something went wrong");
} catch (err) {
  console.log(err.message); // "Something went wrong"
} finally {
  console.log("Always runs");
}
\`\`\`

## Custom Errors
\`\`\`js
class ValidationError extends Error {
  constructor(field) {
    super(\`Invalid field: \${field}\`);
    this.name = "ValidationError";
  }
}
throw new ValidationError("email");
\`\`\`

## Error Types
- \`TypeError\` — wrong type operation
- \`ReferenceError\` — undefined variable
- \`SyntaxError\` — invalid code
- \`RangeError\` — number out of range

## 🔑 Key Takeaway
Always catch errors at system boundaries (API calls, user input, file I/O). Let programming errors bubble up.`
  },
  {
    id: 34, category: "JavaScript",
    title: "JS OOP: Classes & Inheritance",
    tags: ["javascript","classes","oop"],
    excerpt: "Class syntax for constructors, methods, and extends-based inheritance.",
    content: `## Class Syntax
\`\`\`js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(\`Hi, I'm \${this.name}\`);
  }
}
let p = new Person("Sam");
p.greet(); // "Hi, I'm Sam"
\`\`\`

## Inheritance
\`\`\`js
class Employee extends Person {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
  describe() {
    return \`\${this.name} — \${this.role}\`;
  }
}
\`\`\`

## Static Methods
\`\`\`js
class MathUtils {
  static square(x) { return x * x; }
}
MathUtils.square(5); // 25
\`\`\`

## 🔑 Key Takeaway
Classes are syntactic sugar over prototypes. Use them for entities with state and behavior.`
  },
  {
    id: 35, category: "JavaScript",
    title: "JS Set — Unique Value Collection",
    tags: ["javascript","set","collections"],
    excerpt: "Store unique values and perform set operations efficiently.",
    content: `## Set Basics
\`\`\`js
let set = new Set([1, 2, 3, 3]);
console.log(set.size); // 3 (duplicates removed)

set.add(4);      // add value
set.delete(2);   // remove value
set.has(3);      // true
set.clear();     // remove all
\`\`\`

## Deduplicate an Array
\`\`\`js
const arr = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(arr)]; // [1, 2, 3]
\`\`\`

## Iterate a Set
\`\`\`js
for (let val of set) {
  console.log(val);
}
\`\`\`

## 🔑 Key Takeaway
Set is the fastest way to remove duplicates. Use it whenever you need unique value storage.`
  },
  {
    id: 36, category: "JavaScript",
    title: "JS Map — Key-Value Collection",
    tags: ["javascript","map-collection","collections"],
    excerpt: "Maps accept any key type and maintain insertion order.",
    content: `## Map Basics
\`\`\`js
let map = new Map();
map.set("name", "Sam");
map.set("age", 25);
map.get("name");     // "Sam"
map.has("age");      // true
map.delete("age");   // remove key
map.size;            // 1
\`\`\`

## Map vs Object
- Map keys can be **any type** (objects, functions, numbers)
- Map maintains **insertion order** reliably
- Map has a \`.size\` property

\`\`\`js
const objKey = { id: 1 };
map.set(objKey, "data");
map.get(objKey); // "data"
\`\`\`

## Iterate
\`\`\`js
for (let [key, value] of map) {
  console.log(key, value);
}
\`\`\`

## 🔑 Key Takeaway
Use Map over plain objects when you need non-string keys, guaranteed order, or frequent add/delete.`
  },
  {
    id: 37, category: "JavaScript",
    title: "JS Built-in String Methods",
    tags: ["javascript","strings","methods"],
    excerpt: "Essential string operations: case, search, slice, split, replace, trim.",
    content: `## String Methods
\`\`\`js
"Hello".toUpperCase();        // "HELLO"
"Hello".toLowerCase();        // "hello"
"hello".includes("he");       // true
"hello".startsWith("he");     // true
"hello".slice(1, 3);          // "el"
"hello".replace("h", "H");   // "Hello"
"hello".split("");            // ["h","e","l","l","o"]
"  hello  ".trim();           // "hello"
\`\`\`

## Template Literals
\`\`\`js
const name = "World";
console.log(\`Hello \${name}!\`); // "Hello World!"
\`\`\`

## String.fromCharCode
\`\`\`js
String.fromCharCode(65); // "A"
"A".charCodeAt(0);       // 65
\`\`\`

## 🔑 Key Takeaway
Strings are immutable — every method returns a new string. Know slice, includes, split, and trim for interviews.`
  },
  {
    id: 38, category: "JavaScript",
    title: "JS Built-in Math & Number Methods",
    tags: ["javascript","math","number"],
    excerpt: "Math for calculations; Number for parsing and validation.",
    content: `## Math Methods
\`\`\`js
Math.max(1, 5, 3);              // 5
Math.min(1, 5, 3);              // 1
Math.round(4.6);                // 5
Math.floor(4.9);                // 4
Math.ceil(4.1);                 // 5
Math.abs(-5);                   // 5
Math.pow(2, 3);                 // 8
Math.random();                  // 0–0.999...
Math.floor(Math.random() * 10); // 0–9
\`\`\`

## Number Methods
\`\`\`js
Number.parseInt("42");       // 42
Number.parseFloat("42.5");   // 42.5
Number.isNaN(NaN);           // true
Number.isInteger(5);         // true
Number("42");                // 42
\`\`\`

## 💡 Random Integer in Range
\`\`\`js
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
\`\`\`

## 🔑 Key Takeaway
Math is a static utility object — no \`new Math()\`. Use Number methods for safe parsing.`
  },
  {
    id: 39, category: "JavaScript",
    title: "JS Optional Chaining & Modern Shortcuts",
    tags: ["javascript","optional-chaining","shortcuts"],
    excerpt: "Safe property access with ?. and concise patterns for everyday code.",
    content: `## Optional Chaining (?.)
\`\`\`js
let val1 = obj?.key;           // safe property access
let val2 = obj?.a?.b;          // deep safe access
let val3 = obj?.method?.();    // safe method call
let val4 = arr?.[0];           // safe array access
\`\`\`

## Nullish Coalescing + Chaining
\`\`\`js
let val = obj?.key ?? "Default"; // null/undefined → "Default"
\`\`\`

## Short-Circuit Patterns
\`\`\`js
// AND for conditional execution
isLoggedIn && showDashboard();

// OR for defaults (any falsy)
let name = input || "Anonymous";

// ?? for defaults (null/undefined only)
let count = input ?? 0;
\`\`\`

## 🔑 Key Takeaway
\`?.\` prevents "Cannot read property of undefined" errors. Combine with \`??\` for safe defaults.`
  },

  /* ──────────────────────────────────────────────
     PLAYWRIGHT INTERVIEW & DEEP DIVE (Posts 40 – 65)
     ────────────────────────────────────────────── */
  {
    id: 40, category: "Playwright",
    title: "What is Playwright & Key Features",
    tags: ["playwright","overview","features"],
    excerpt: "Open-source E2E framework by Microsoft with cross-browser, auto-wait, and parallel execution.",
    content: `## What is Playwright?
An open-source automation framework by Microsoft for end-to-end testing of web applications.

## Key Features
- **Cross-browser**: Chromium, Firefox, WebKit
- **Auto-wait**: Eliminates flaky tests by waiting for elements to be actionable
- **Multi-language**: JavaScript, TypeScript, Python, Java, .NET
- **Mobile emulation**: Test mobile viewports and devices
- **Network interception**: Mock APIs, modify requests
- **Parallel execution**: Built-in parallel test running
- **Debugging**: Screenshots, video, trace files

## 💡 Why It Matters
\`\`\`ts
// One API controls all browsers
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://example.com');
\`\`\`

## 🔑 Key Takeaway
Playwright solves the three biggest automation problems: flakiness, browser inconsistency, and debugging difficulty.`
  },
  {
    id: 41, category: "Playwright",
    title: "Playwright vs Selenium: Architecture Differences",
    tags: ["playwright","selenium","comparison"],
    excerpt: "Direct protocol control vs WebDriver — why Playwright is faster and more reliable.",
    content: `## Architecture Comparison
| Feature | Playwright | Selenium |
|---------|-----------|----------|
| Protocol | Direct browser protocols | WebDriver JSON Wire |
| Auto-wait | Built-in | Manual waits needed |
| Browser Context | Isolated sessions | New browser instance |
| Shadow DOM | Native support | Limited |
| Speed | Faster | Slower |
| TypeScript | First-class | Requires setup |

## Why Playwright Is Faster
- **No middleware**: Communicates directly via Chromium DevTools Protocol, WebKit/Firefox debug protocols
- **No WebDriver middle layer**: Fewer hops = lower latency
- **Understands browser state**, not just DOM state

## ❓ Quick Quiz
**Q:** What protocol does Playwright use for Chromium?
**A:** Chromium DevTools Protocol (CDP) — direct, no JSON Wire Protocol.

## 🔑 Key Takeaway
Playwright's direct protocol approach makes it fundamentally faster and more reliable than Selenium.`
  },
  {
    id: 42, category: "Playwright",
    title: "Playwright Auto-Waiting Mechanism",
    tags: ["playwright","auto-wait","reliability"],
    excerpt: "Before every action, Playwright ensures the element is ready — no manual waits needed.",
    content: `## What Playwright Waits For
Before clicking, typing, or interacting, Playwright ensures:
1. Element is **attached** to DOM
2. Element is **visible**
3. Element is **stable** (not animating)
4. Element **receives events** (not obscured)
5. Element is **enabled**

## Default Timeout
- 30 seconds (configurable globally or per action)

## Why This Matters
\`\`\`ts
// No need for explicit waits!
await page.getByRole('button', { name: 'Submit' }).click();
// Playwright auto-waits for button to be clickable
\`\`\`

## Anti-Pattern: Manual Waits
\`\`\`ts
// ❌ Never do this
await page.waitForTimeout(5000);

// ✅ Let Playwright auto-wait
await page.getByText('Dashboard').click();
\`\`\`

## 🔑 Key Takeaway
Auto-waiting eliminates 90% of flaky test causes. Trust the framework, not arbitrary sleep timers.`
  },
  {
    id: 43, category: "Playwright",
    title: "Browser Contexts: Isolated Sessions",
    tags: ["playwright","browser-context","isolation"],
    excerpt: "Incognito-like sessions within a single browser. Parallel tests without interference.",
    content: `## What Is a Browser Context?
An isolated session with its own cookies, cache, and localStorage.

\`\`\`ts
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
\`\`\`

Think of it as: **an incognito window**

## Why Contexts Matter
- **Run tests in parallel** without data bleeding
- **Simulate multiple users** without launching multiple browsers
- **Test scenarios** simultaneously (admin + regular user)
- **Easy cleanup** — close context, everything is gone
- **Better performance** than separate browser instances

## 💡 Multi-User Test
\`\`\`ts
const adminCtx = await browser.newContext();
const userCtx = await browser.newContext();
const adminPage = await adminCtx.newPage();
const userPage = await userCtx.newPage();
// Both run independently
\`\`\`

## 🔑 Key Takeaway
Contexts enable cheap, isolated, parallel test execution from a single browser instance.`
  },
  {
    id: 44, category: "Playwright",
    title: "Handling Multiple Pages & Frames",
    tags: ["playwright","pages","frames","iframes"],
    excerpt: "Work with new tabs, popups, and iframes using Playwright's page and frame APIs.",
    content: `## New Pages / Popups
\`\`\`ts
const [newPage] = await Promise.all([
  page.waitForEvent('popup'),
  page.click('a[target="_blank"]')
]);
await newPage.waitForLoadState();
console.log(await newPage.title());
\`\`\`

## iframes with frameLocator
\`\`\`ts
const frame = page.frameLocator('iframe#myframe');
await frame.locator('button').click();
await frame.getByText('Success').isVisible();
\`\`\`

## Multiple Pages
\`\`\`ts
const page1 = await context.newPage();
const page2 = await context.newPage();
// Switch between them as needed
await page1.goto('/admin');
await page2.goto('/user');
\`\`\`

## 🔑 Key Takeaway
Playwright handles frame switching automatically with frameLocator. No manual switching needed.`
  },
  {
    id: 45, category: "Playwright",
    title: "Playwright Locators & Best Practices",
    tags: ["playwright","locators","selectors","best-practices"],
    excerpt: "Locators are lazy, auto-retrying queries. Use user-facing attributes first.",
    content: `## Locator Priority (Best → Worst)
1. \`getByRole()\` — accessibility-first ✅
2. \`getByLabel()\` — form fields
3. \`getByText()\` — visible text
4. \`getByTestId()\` — explicit contracts
5. CSS/XPath — last resort ❌

## Examples
\`\`\`ts
page.getByRole('button', { name: 'Submit' });
page.getByLabel('Email');
page.getByText('Welcome back');
page.getByTestId('login-form');
page.locator('.submit-btn'); // avoid if possible
\`\`\`

## Locators Are Live Queries
- **Re-evaluated** on every action
- **Auto-wait** until actionable
- Enable **self-healing** behavior

## Chain Locators
\`\`\`ts
page.getByRole('listitem')
  .filter({ hasText: 'Product 1' })
  .getByRole('button');
\`\`\`

## ❓ Quick Quiz
**Q:** Why avoid CSS selectors based on class names?
**A:** Class names change with styling refactors. Role/text locators survive UI redesigns.

## 🔑 Key Takeaway
getByRole > getByLabel > getByText > getByTestId > CSS. Locators are lazy and self-healing.`
  },
  {
    id: 46, category: "Playwright",
    title: "API Testing with Playwright",
    tags: ["playwright","api-testing","request"],
    excerpt: "Make HTTP requests, validate responses, and combine UI + API testing.",
    content: `## API Requests
\`\`\`ts
const response = await request.post('/api/users', {
  data: { name: 'John', email: 'john@test.com' }
});
expect(response.ok()).toBeTruthy();
expect(response.status()).toBe(201);

const body = await response.json();
expect(body.name).toBe('John');
\`\`\`

## Combine UI + API
\`\`\`ts
// Create data via API, verify in UI
await request.post('/api/todos', { data: { title: 'Buy milk' } });
await page.goto('/todos');
await expect(page.getByText('Buy milk')).toBeVisible();
\`\`\`

## Authentication Setup via API
\`\`\`ts
const response = await request.post('/api/login', {
  data: { username: 'admin', password: 'pass' }
});
const { token } = await response.json();
\`\`\`

## 🔑 Key Takeaway
Playwright's request API lets you set up test data, authenticate, and validate APIs — all in one test.`
  },
  {
    id: 47, category: "Playwright",
    title: "Playwright Test Runner & Fixtures",
    tags: ["playwright","test-runner","fixtures"],
    excerpt: "Built-in fixtures for browser, context, page. Parallel by default with full lifecycle hooks.",
    content: `## Key Features
- **Fixtures**: Auto-cleanup browser, context, page
- **Parallel**: Tests run in parallel by default
- **Isolation**: Each test gets a fresh context
- **Retries**: Automatic retry for flaky tests
- **Reporters**: HTML, JSON, JUnit built-in
- **Hooks**: beforeEach, afterEach, beforeAll, afterAll
- **Annotations**: skip, only, fixme, slow

## Test Structure
\`\`\`ts
import { test, expect } from '@playwright/test';

test('user can login', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email').fill('user@test.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('/dashboard');
});
\`\`\`

## Custom Fixtures
\`\`\`ts
const test = base.extend({
  authenticatedPage: async ({ browser }, use) => {
    const ctx = await browser.newContext({ storageState: 'auth.json' });
    const page = await ctx.newPage();
    await use(page);
    await ctx.close();
  }
});
\`\`\`

## 🔑 Key Takeaway
Playwright Test gives you a complete test runner — no need for Mocha, Jest, or other frameworks.`
  },
  {
    id: 48, category: "Playwright",
    title: "Authentication Strategies in Playwright",
    tags: ["playwright","authentication","storage-state"],
    excerpt: "Log in once, save state, reuse everywhere. Avoid re-logging in every test.",
    content: `## Storage State Pattern
\`\`\`ts
// global-setup.ts — log in once
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('/login');
await page.fill('#email', 'admin@test.com');
await page.fill('#password', 'secret');
await page.click('button[type="submit"]');
await page.context().storageState({ path: 'auth.json' });
await browser.close();
\`\`\`

## Reuse in Tests
\`\`\`ts
// playwright.config.ts
use: { storageState: 'auth.json' }
\`\`\`

## Multiple Roles
\`\`\`ts
const adminState = 'admin-auth.json';
const userState = 'user-auth.json';
// Different projects per role
\`\`\`

## 🔑 Key Takeaway
Save authentication state once in global setup. Every test reuses it — 10x faster than logging in per test.`
  },
  {
    id: 49, category: "Playwright",
    title: "Playwright Debugging: Inspector, UI Mode, Traces",
    tags: ["playwright","debugging","inspector","trace-viewer"],
    excerpt: "A complete debugging stack from local development to CI failure forensics.",
    content: `## Debugging Tools
1. **Playwright Inspector**: \`PWDEBUG=1 npx playwright test\` — step through actions
2. **UI Mode**: \`npx playwright test --ui\` — visual time-travel debugging
3. **Trace Viewer**: DOM snapshots + network + console for CI failures
4. **Headed mode**: \`--headed\` flag to watch the browser
5. **Slow motion**: \`slowMo: 500\` to slow down actions
6. **page.pause()**: Pause test for manual inspection

## Trace Configuration
\`\`\`ts
// playwright.config.ts
use: {
  trace: 'on-first-retry', // best balance
  screenshot: 'only-on-failure',
  video: 'retain-on-failure'
}
\`\`\`

## VS Code Integration
- Set breakpoints in test files
- Click to run individual tests
- Live browser preview

## 🔑 Key Takeaway
Use Inspector locally, UI Mode for development, and Trace Viewer for CI failures. Layer the tools.`
  },
  {
    id: 50, category: "Playwright",
    title: "Playwright Internal Architecture",
    tags: ["playwright","architecture","protocols"],
    excerpt: "Direct browser protocol communication — no WebDriver, no middleware.",
    content: `## How Playwright Works Internally
Playwright communicates directly with browser engines:
- **Chromium**: DevTools Protocol
- **WebKit**: Remote debugging protocol
- **Firefox**: Internal protocol

## What This Means
- No JSON Wire Protocol overhead
- No WebDriver middle layer
- Faster, more reliable control
- Understands **browser state**, not just DOM state

## Architecture Flow
\`\`\`
Your Test Code
    ↓
Playwright Library
    ↓
Browser Protocol (CDP/WebKit/Firefox)
    ↓
Browser Engine
\`\`\`

## 🔑 Key Takeaway
Direct protocol access is why Playwright is faster and more deterministic than WebDriver-based tools.`
  },
  {
    id: 51, category: "Playwright",
    title: "Web-First Assertions in Playwright",
    tags: ["playwright","assertions","expect"],
    excerpt: "Auto-retrying assertions that wait for conditions to be met, reducing flakiness.",
    content: `## Web-First Assertions
\`\`\`ts
await expect(page).toHaveTitle('Dashboard');
await expect(page.getByText('Welcome')).toBeVisible();
await expect(page.getByTestId('count')).toHaveText('5');
await expect(page.getByRole('button')).toBeEnabled();
\`\`\`

## Auto-Retry Behavior
- Assertions **retry** until the condition is met or timeout
- Default timeout: 5 seconds (configurable)
- Eliminates race conditions with async UIs

## Non-Retrying (Avoid for Dynamic Content)
\`\`\`ts
// ❌ NOT auto-retrying
const text = await page.textContent('.status');
expect(text).toBe('Done'); // may fail with timing issues

// ✅ Auto-retrying
await expect(page.locator('.status')).toHaveText('Done');
\`\`\`

## 🔑 Key Takeaway
Always use \`await expect(locator)\` web-first assertions. They auto-retry and prevent race conditions.`
  },
  {
    id: 52, category: "Playwright",
    title: "Playwright Retries & Flaky Test Handling",
    tags: ["playwright","retries","flaky-tests"],
    excerpt: "Configure retries as a safety net, not as a fix for broken tests.",
    content: `## Configure Retries
\`\`\`ts
// playwright.config.ts
export default defineConfig({
  retries: process.env.CI ? 2 : 0,
});
\`\`\`

## Retry Semantics
- Each retry gets a **fresh browser context**
- beforeAll/afterAll run **once per worker** (not per retry)
- beforeEach/afterEach run **on every attempt**
- Traces captured on retry help debug the failure

## Flaky Test Detection
\`\`\`ts
// Tests that pass on retry are flagged as "flaky"
// in HTML report
\`\`\`

## ❓ Quick Quiz
**Q:** Should you increase retries to fix flaky tests?
**A:** No — retries are a safety net. Fix the root cause: timing issues, shared state, or brittle locators.

## 🔑 Key Takeaway
Use retries as a resilience guardrail, not a substitute for deterministic tests.`
  },
  {
    id: 53, category: "Playwright",
    title: "Playwright CI Setup & Best Practices",
    tags: ["playwright","ci","github-actions"],
    excerpt: "Reliable CI configuration: install, run, report, and artifact collection.",
    content: `## GitHub Actions Setup
\`\`\`yaml
- uses: actions/setup-node@v4
  with: { node-version: 20 }
- run: npm ci
- run: npx playwright install --with-deps
- run: npx playwright test
- uses: actions/upload-artifact@v4
  if: always()
  with:
    name: playwright-report
    path: playwright-report/
\`\`\`

## CI Best Practices
- Use \`npm ci\` (not \`npm install\`) for reproducible builds
- Set \`workers: 1\` on shared CI for stability
- Enable traces on first retry: \`trace: 'on-first-retry'\`
- Upload reports as artifacts for post-run analysis
- Use \`--shard=x/y\` for large suites

## playwright.config.ts for CI
\`\`\`ts
export default defineConfig({
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'blob' : 'html',
});
\`\`\`

## 🔑 Key Takeaway
Deterministic CI = reproducible installs + consistent settings + artifact-first debugging.`
  },
  {
    id: 54, category: "Playwright",
    title: "Cross-Browser Testing Strategy",
    tags: ["playwright","cross-browser","projects"],
    excerpt: "Configure multi-browser projects for Chromium, Firefox, and WebKit.",
    content: `## Multi-Project Config
\`\`\`ts
// playwright.config.ts
projects: [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  { name: 'mobile-chrome', use: { ...devices['Pixel 5'] } },
  { name: 'mobile-safari', use: { ...devices['iPhone 12'] } },
]
\`\`\`

## Run Specific Browser
\`\`\`bash
npx playwright test --project=chromium
npx playwright test --project=firefox
\`\`\`

## 💡 Strategy
- Run **Chromium** on every PR (fast feedback)
- Run **all browsers** nightly (comprehensive check)
- Use CI artifacts per browser for targeted triage

## 🔑 Key Takeaway
Cross-browser catches engine-specific regressions. Run the minimum set per PR, full set nightly.`
  },
  {
    id: 55, category: "Playwright",
    title: "Test Isolation & Hook Design",
    tags: ["playwright","isolation","hooks","fixtures"],
    excerpt: "Each test gets a fresh context. Use hooks for setup, not shared state.",
    content: `## Built-in Isolation
Every test gets:
- Fresh browser context
- Fresh page
- No shared cookies, cache, or storage

## Hooks
\`\`\`ts
test.beforeEach(async ({ page }) => {
  await page.goto('/dashboard');
});

test.afterEach(async ({ page }) => {
  // cleanup if needed
});

test.beforeAll(async () => {
  // one-time setup (DB seed, etc.)
});
\`\`\`

## Anti-Pattern: Test Dependencies
\`\`\`ts
// ❌ Test B depends on Test A's state
test('create item', ...);
test('verify item exists', ...); // fails if run alone!

// ✅ Each test is independent
test('item lifecycle', async ({ page }) => {
  // create + verify in same test
});
\`\`\`

## 🔑 Key Takeaway
Independent tests are easier to debug, shard, and retry. Never rely on test execution order.`
  },
  {
    id: 56, category: "Playwright",
    title: "Playwright Sharding & Report Merging",
    tags: ["playwright","sharding","parallel","reporting"],
    excerpt: "Split test suites across CI machines and merge results into one report.",
    content: `## Sharding
\`\`\`bash
# Machine 1
npx playwright test --shard=1/4
# Machine 2
npx playwright test --shard=2/4
# Machine 3
npx playwright test --shard=3/4
# Machine 4
npx playwright test --shard=4/4
\`\`\`

## Report Merging
\`\`\`bash
# Each shard produces a blob report
# After all shards complete:
npx playwright merge-reports ./all-blob-reports --reporter=html
\`\`\`

## When to Shard
- Suite runtime exceeds your feedback SLA
- Tests are parallel-safe (independent)
- CI infrastructure supports multiple runners

## 🔑 Key Takeaway
Shard when single-job duration blocks feedback. Use blob reporter + merge for unified results.`
  },
  {
    id: 57, category: "Playwright",
    title: "Playwright Trace Viewer Deep Dive",
    tags: ["playwright","trace-viewer","debugging"],
    excerpt: "Time-travel debugging with DOM snapshots, network logs, and action timeline.",
    content: `## Trace Viewer Features
- **Action timeline**: Every click, fill, navigation
- **DOM snapshots**: Before and after each action
- **Network tab**: All requests and responses
- **Console tab**: Browser console logs
- **Source tab**: Test code at each step

## Enable Tracing
\`\`\`ts
// playwright.config.ts
use: {
  trace: 'on-first-retry' // best for CI
}
// Options: 'on', 'off', 'on-first-retry', 'retain-on-failure'
\`\`\`

## View Traces
\`\`\`bash
npx playwright show-trace trace.zip
\`\`\`

## Share for Collaboration
Trace files are self-contained ZIPs. Share with teammates for async debugging.

## 🔑 Key Takeaway
Trace on-first-retry balances diagnostic depth with execution overhead. It's the best CI default.`
  },
  {
    id: 58, category: "Playwright",
    title: "Network Interception & Mocking",
    tags: ["playwright","network","mocking","api"],
    excerpt: "Intercept, modify, or mock API responses for controlled testing.",
    content: `## Route & Mock
\`\`\`ts
await page.route('**/api/users', route => {
  route.fulfill({
    status: 200,
    body: JSON.stringify([{ name: 'Mock User' }])
  });
});
\`\`\`

## Modify Responses
\`\`\`ts
await page.route('**/api/data', async route => {
  const response = await route.fetch();
  const json = await response.json();
  json.modified = true;
  await route.fulfill({ body: JSON.stringify(json) });
});
\`\`\`

## Wait for Network
\`\`\`ts
await page.waitForResponse('**/api/save');
\`\`\`

## Use Cases
- Test error states (500 responses)
- Test loading states (delayed responses)
- Test with specific data without backend

## 🔑 Key Takeaway
Network mocking gives you full control over test data without backend dependencies.`
  },
  {
    id: 59, category: "Playwright",
    title: "Page Object Model in Playwright",
    tags: ["playwright","pom","design-pattern"],
    excerpt: "Encapsulate page interactions in classes for maintainable, reusable test code.",
    content: `## POM Structure
\`\`\`ts
// pages/login-page.ts
export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/login');
  }
  async login(email: string, password: string) {
    await this.page.getByLabel('Email').fill(email);
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: 'Sign in' }).click();
  }
  async expectLoggedIn() {
    await expect(this.page).toHaveURL('/dashboard');
  }
}
\`\`\`

## Usage in Tests
\`\`\`ts
test('user login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('user@test.com', 'pass');
  await loginPage.expectLoggedIn();
});
\`\`\`

## 🔑 Key Takeaway
POM reduces test duplication. When UI changes, fix one class instead of dozens of tests.`
  },
  {
    id: 60, category: "Playwright",
    title: "Visual Regression Testing with Playwright",
    tags: ["playwright","visual-regression","screenshots"],
    excerpt: "Screenshot comparison to catch unintended visual changes.",
    content: `## Screenshot Assertions
\`\`\`ts
await expect(page).toHaveScreenshot('homepage.png');

// Element-level screenshot
await expect(page.getByTestId('chart')).toHaveScreenshot();
\`\`\`

## Update Baselines
\`\`\`bash
npx playwright test --update-snapshots
\`\`\`

## Configuration
\`\`\`ts
expect.configure({
  toHaveScreenshot: {
    maxDiffPixels: 100,
    threshold: 0.2
  }
});
\`\`\`

## 💡 Best Practice
- Use consistent viewport sizes
- Disable animations for deterministic screenshots
- Review diffs in the HTML report

## 🔑 Key Takeaway
Visual regression catches UI bugs that functional tests miss. Set reasonable thresholds to avoid false positives.`
  },
  {
    id: 61, category: "Playwright",
    title: "Playwright Code Generation (codegen)",
    tags: ["playwright","codegen","recording"],
    excerpt: "Record browser actions and generate test code automatically.",
    content: `## Launch Codegen
\`\`\`bash
npx playwright codegen https://example.com
\`\`\`

## What It Does
- Opens a browser with the Playwright Inspector
- Records your clicks, fills, and navigation
- Generates test code in real-time
- Outputs TypeScript/JavaScript/Python/Java

## Best Use Cases
- Quick prototyping of new tests
- Learning locator strategies
- Generating initial test scaffolding

## ⚠️ Limitations
- Generated code needs cleanup for production
- May use suboptimal locators
- Doesn't handle complex logic (conditionals, loops)

## 🔑 Key Takeaway
Codegen is a rapid starting point. Always refine generated code with proper locator strategies and assertions.`
  },
  {
    id: 62, category: "Playwright",
    title: "Playwright Configuration Deep Dive",
    tags: ["playwright","config","setup"],
    excerpt: "Master playwright.config.ts: projects, timeouts, retries, reporters, and use options.",
    content: `## Essential Config
\`\`\`ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
});
\`\`\`

## Key Options
- **timeout**: Max time per test
- **expect.timeout**: Max time for assertions
- **workers**: Parallel workers count
- **retries**: Number of retry attempts
- **outputDir**: Where artifacts are stored

## 🔑 Key Takeaway
A well-configured playwright.config.ts is the foundation of reliable, maintainable test infrastructure.`
  },
  {
    id: 63, category: "Playwright",
    title: "Handling Dialogs, Downloads & Uploads",
    tags: ["playwright","dialogs","downloads","uploads"],
    excerpt: "Handle browser dialogs, file downloads, and file upload inputs.",
    content: `## Dialogs (alert, confirm, prompt)
\`\`\`ts
page.on('dialog', dialog => dialog.accept());
// or
page.on('dialog', dialog => dialog.dismiss());
\`\`\`

## File Download
\`\`\`ts
const [download] = await Promise.all([
  page.waitForEvent('download'),
  page.click('#download-btn')
]);
const path = await download.path();
\`\`\`

## File Upload
\`\`\`ts
await page.setInputFiles('#file-input', 'path/to/file.pdf');

// Multiple files
await page.setInputFiles('#file-input', ['file1.pdf', 'file2.pdf']);

// Clear
await page.setInputFiles('#file-input', []);
\`\`\`

## 🔑 Key Takeaway
Playwright handles native browser dialogs and file I/O natively — no hacks or external libraries needed.`
  },
  {
    id: 64, category: "Playwright",
    title: "Data-Driven Testing in Playwright",
    tags: ["playwright","data-driven","parameterized"],
    excerpt: "Run the same test with multiple datasets using loops or test.describe.",
    content: `## Parameterized Tests
\`\`\`ts
const testCases = [
  { role: 'admin', url: '/admin-dashboard' },
  { role: 'user', url: '/user-dashboard' },
  { role: 'guest', url: '/guest-view' },
];

for (const { role, url } of testCases) {
  test(\`\${role} sees correct dashboard\`, async ({ page }) => {
    await loginAs(page, role);
    await expect(page).toHaveURL(url);
  });
}
\`\`\`

## CSV/JSON Data
\`\`\`ts
import testData from './data.json';

for (const data of testData) {
  test(\`test with \${data.name}\`, async ({ page }) => {
    // use data.email, data.expected, etc.
  });
}
\`\`\`

## 🔑 Key Takeaway
Data-driven tests reduce duplication. Loop over datasets to cover many scenarios with one test template.`
  },
  {
    id: 65, category: "Playwright",
    title: "JavaScript vs TypeScript for Playwright Projects",
    tags: ["playwright","typescript","javascript"],
    excerpt: "TypeScript is recommended for safety, but JavaScript works for quick prototypes.",
    content: `## Why TypeScript
- **Compile-time safety**: Catch errors before running
- **Better IDE support**: Auto-complete for Playwright API
- **Safer refactoring**: Rename symbols confidently
- **Better AI code generation**: Stronger signal boundaries

## Where JavaScript Works
- Prototypes and proofs of concept
- Small teams with low governance needs
- Quick scripts and one-off tests

## Migration Path (JS → TS)
1. Enable TypeScript in Playwright config
2. Rename .js files to .ts
3. Add types incrementally
4. Use \`strict: true\` in tsconfig

## 🔑 Key Takeaway
Use TypeScript for production test suites. The upfront cost pays off in maintenance and reliability.`
  },

  /* ──────────────────────────────────────────────
     MCP (MODEL CONTEXT PROTOCOL)  (Posts 66 – 100)
     ────────────────────────────────────────────── */
  {
    id: 66, category: "MCP",
    title: "What is MCP (Model Context Protocol)?",
    tags: ["mcp","protocol","ai-testing"],
    excerpt: "MCP is NOT a test framework — it's a protocol standardizing how AI models, tools, and context communicate.",
    content: `## Definition
MCP (Model Context Protocol) standardizes how:
- **AI models** (LLMs)
- **Tools** (Playwright, browsers)
- **Context** (DOM, logs, code)

...communicate in a structured, machine-actionable way.

## What MCP Is NOT
- ❌ Not a test framework
- ❌ Not a replacement for Playwright
- ❌ Not autonomous QA

## What MCP IS
- ✅ A communication protocol
- ✅ A bridge between AI and automation tools
- ✅ A structured way to execute AI-planned actions

## Architecture
\`\`\`
User Intent → AI Code Agent → MCP Protocol → MCP Server → Playwright → Browser
\`\`\`

## 🔑 Key Takeaway
MCP is the protocol that lets AI agents reliably control Playwright. It provides structure where prompts alone fail.`
  },
  {
    id: 67, category: "MCP",
    title: "Why MCP Was Introduced",
    tags: ["mcp","ai","limitations"],
    excerpt: "Prompt-only AI suffers from statelessness, hallucinations, and no execution feedback. MCP fixes this.",
    content: `## Problems with Prompt-Only AI
- **Statelessness**: No memory between interactions
- **Hallucinations**: Generates incorrect actions
- **No feedback loop**: Can't verify if actions succeeded

## What MCP Introduces
- **Tool contracts**: Structured function calling
- **Structured reasoning**: Step-by-step planning
- **Execution observability**: Real browser feedback streams

## Comparison Table
| Prompt-Only AI | MCP-Based AI |
|---------------|-------------|
| Text in/out | Structured actions |
| No execution feedback | Real browser feedback |
| Non-deterministic | Governed execution |

## 🔑 Key Takeaway
MCP gives AI agents the ability to execute, observe, and adapt — not just generate text.`
  },
  {
    id: 68, category: "MCP",
    title: "MCP vs Prompt-Only AI Testing",
    tags: ["mcp","comparison","ai-testing"],
    excerpt: "MCP adds structured actions, real feedback, and governed execution on top of AI capabilities.",
    content: `## The Gap
Prompt-only AI can suggest test code but:
- Can't know if a button actually appeared
- Can't react to unexpected modals
- Can't retry with adjusted strategy

## How MCP Bridges It
1. AI agent generates a **plan** (not just code)
2. MCP server **executes** via Playwright
3. Browser returns **real feedback** (DOM, screenshots)
4. Agent **adapts** based on actual results

## Example Flow
\`\`\`
Prompt: "Verify user can log in"
  ↓
Planner: [navigate, fill email, fill password, click submit, assert dashboard]
  ↓
Generator: Playwright code for each step
  ↓
MCP Server: Executes and streams results
  ↓
Healer: If "Submit" button not found, scans for "Sign In"
\`\`\`

## 🔑 Key Takeaway
MCP transforms AI from a code generator into an execution agent with real-world feedback loops.`
  },
  {
    id: 69, category: "MCP",
    title: "MCP Servers in Testing",
    tags: ["mcp","server","architecture"],
    excerpt: "An MCP server exposes Playwright capabilities as tools and streams DOM, screenshots, and logs.",
    content: `## What an MCP Server Does
- Exposes Playwright capabilities as **structured tools**
- Streams **DOM snapshots, screenshots, logs** to the AI agent
- Accepts **structured plans** from AI agents

## Setup
\`\`\`bash
npm install @playwright/mcp-server
\`\`\`

## Server Responsibilities
- Manage browser lifecycle
- Execute Playwright actions
- Return structured results (success/failure + context)
- Stream execution artifacts

## Folder Structure
\`\`\`
/tests
  /mcp
  /prompts
  /specs
/mcp-server
/playwright.config.ts
\`\`\`

## 🔑 Key Takeaway
The MCP server is the bridge between AI intent and browser execution. It handles protocol, not intelligence.`
  },
  {
    id: 70, category: "MCP",
    title: "Why a Code Agent is Required for MCP",
    tags: ["mcp","ai-agent","copilot"],
    excerpt: "MCP doesn't think — the AI agent interprets intent, plans steps, and decides recovery.",
    content: `## MCP Does NOT Think
MCP is a protocol — it needs an AI code agent to:
- **Interpret intent**: Understand what the user wants
- **Plan steps**: Create execution strategy
- **Decide recovery**: Handle failures intelligently

## Examples of Code Agents
- GitHub Copilot
- Internal LLM agents
- Custom GPT-based agents

## Without an Agent
- MCP is just an API wrapper
- No planning
- No healing
- No intelligence
- You fall back to classic automation

## 🔑 Key Takeaway
MCP without a code agent is like a car without a driver. The protocol provides capability; the agent provides intelligence.`
  },
  {
    id: 71, category: "MCP",
    title: "MCP Security & Governance Basics",
    tags: ["mcp","security","governance"],
    excerpt: "Enterprise MCP requires read-only DOM access, PII masking, prompt logging, and approval workflows.",
    content: `## Enterprise Security Considerations
- **Read-only DOM access**: Prevent unintended mutations
- **PII masking**: Redact sensitive data before AI processing
- **Prompt logging**: Audit trail for all AI interactions
- **Approval workflows**: Human sign-off before production execution

## Key Principle
> MCP is governed intelligence, not autonomous testing.

## Data Access Rules
- Mask all PII before sending to AI
- Screenshot redaction for sensitive screens
- Explicit test data contracts
- Read-only access for sensitive workflows

## 🔑 Key Takeaway
Without security guardrails, MCP becomes ungovernable. Build security in from day one.`
  },
  {
    id: 72, category: "MCP",
    title: "Playwright MCP Architecture",
    tags: ["mcp","architecture","diagram"],
    excerpt: "User Intent → AI Agent → MCP Protocol → MCP Server → Playwright → Browser.",
    content: `## Architecture Flow
\`\`\`
User Intent
    ↓
AI Code Agent (interprets, plans, decides)
    ↓ (MCP Protocol)
MCP Server (routes, executes, streams)
    ↓
Playwright Engine (deterministic actions)
    ↓
Browser (real execution)
    ↓
Results → back to Agent
\`\`\`

## Execution Lifecycle
1. Intent received by AI agent
2. Planner generates execution graph
3. Generator produces Playwright actions
4. MCP server executes actions
5. Browser returns DOM + event feedback
6. MCP streams results back to agent
7. Healer intervenes if contract breaks
8. Final result + artifacts produced

## 🔑 Key Takeaway
Each layer has a single responsibility. Intelligence lives in the agent; execution lives in Playwright.`
  },
  {
    id: 73, category: "MCP",
    title: "MCP Planner Agent: Intent Classification",
    tags: ["mcp","planner","intent"],
    excerpt: "The Planner classifies user intent into navigation, authentication, validation, workflow, and constraint types.",
    content: `## What the Planner Does
Converts human intent into a machine-executable test plan — a **state transition graph**, not a simple step list.

## Internal Inputs
- User prompt (intent, not instructions)
- Current browser state (URL, DOM, cookies)
- Historical execution context (previous steps, failures)

## Intent Classification Types
- **Navigation**: Go to a page
- **Authentication**: Log in/out with specific role
- **Validation**: Assert something is true/false
- **Workflow**: Multi-step business process
- **Negative/Constraint**: Verify something is NOT allowed

## Example
Prompt: "Verify Admin can disable a standard user"

Classification:
- Authentication (Admin)
- Navigation (User Management)
- Role-based authorization
- State mutation (enable → disable)
- Assertion (status change)

## 🔑 Key Takeaway
The Planner breaks complex intent into typed, ordered steps — not ad-hoc scripting.`
  },
  {
    id: 74, category: "MCP",
    title: "MCP Planner: State Gap Analysis",
    tags: ["mcp","planner","state-analysis"],
    excerpt: "The Planner compares current browser state to desired state and determines prerequisite steps.",
    content: `## State Gap Analysis
The Planner compares: **Current state → Desired state**

## Example
- Current: Unauthenticated session on login page
- Desired: Authenticated Admin on User Management page

## Gap = Mandatory Prerequisites
1. Authentication must precede authorization checks
2. Page navigation must precede DOM assertions
3. Entity identification must precede mutation actions

## Dependency Ordering
Steps are ordered based on **state dependency**, not UI flow.

\`\`\`
Login → Navigate → Find User → Disable → Assert Status
\`\`\`

Each step depends on the previous state being achieved.

## 🔑 Key Takeaway
The Planner eliminates test order bugs by reasoning about state dependencies, not UI sequences.`
  },
  {
    id: 75, category: "MCP",
    title: "MCP Planner: Risk Annotation",
    tags: ["mcp","planner","risk"],
    excerpt: "Each planned step is tagged with risk levels: locator volatility, network dependency, auth failure.",
    content: `## Risk Tags Per Step
Each step gets annotated with:
- **Locator volatility risk**: How likely the locator is to break
- **Network dependency risk**: External API/auth dependencies
- **Authorization failure risk**: Role-based access issues

## Why Risk Matters
- High-risk steps get **extra validation**
- The Healer knows which steps are fragile
- Recovery strategy scales with risk level

## Example Risk Annotation
\`\`\`
Step: Click "Disable User" button
- Locator risk: MEDIUM (button text may change)
- Network risk: LOW (client-side action)
- Auth risk: HIGH (admin-only action)
\`\`\`

## 🔑 Key Takeaway
Risk annotation enables intelligent failure handling — the Healer invests more effort in high-risk steps.`
  },
  {
    id: 76, category: "MCP",
    title: "MCP Generator Agent: Plan to Playwright Code",
    tags: ["mcp","generator","code-generation"],
    excerpt: "Converts the Planner's execution graph into deterministic Playwright primitives.",
    content: `## What the Generator Optimizes For
- **Deterministic execution**: Same input → same output
- **Minimal locator brittleness**: User-facing selectors
- **Auto-wait compatibility**: Works with Playwright's waits
- **Assertion stability**: Web-first, retrying assertions

## Locator Strategy Decision Tree
1. ARIA role + accessible name ✅ (preferred)
2. Label-based selectors
3. Text selectors (scoped)
4. Structural selectors (CSS/XPath — last resort ❌)

## Generated Code Example
\`\`\`ts
const disableButton = page.getByRole('button', { name: 'Disable User' });
await expect(disableButton).toBeEnabled();
await disableButton.click();
await expect(page.getByText('User disabled')).toBeVisible();
\`\`\`

## Key Rule
The Generator **never starts with CSS or XPath** unless forced by the DOM structure.

## 🔑 Key Takeaway
The Generator produces Playwright code optimized for stability, not brevity. Role-based locators first, always.`
  },
  {
    id: 77, category: "MCP",
    title: "MCP Generator: TypeScript vs JavaScript",
    tags: ["mcp","generator","typescript"],
    excerpt: "MCP performs better with TypeScript — AST reasoning, safer healing, stronger boundaries.",
    content: `## TypeScript Advantages for MCP
- Generator reasons over **AST**, not plain text
- Stronger signal for **intent boundaries**
- Enables **safer healing** and refactoring
- Better **governance and diffing**

## JavaScript Trade-offs
- Generator emits similar syntax
- No AST safety net
- Healing relies more on runtime signals

## Strategic Guidance
> "MCP can reason about TS, but only execute JS."

## Where JS Is Acceptable
- Prototypes and proofs of concept
- Small teams with low governance
- Short-lived test suites
- Learning phases

## Migration Path
1. Enable TS in Playwright config
2. Convert prompts and plans first
3. Convert specs incrementally
4. Enforce TS for MCP-generated code only

## 🔑 Key Takeaway
TypeScript gives MCP better structural understanding. Use it for production MCP workflows.`
  },
  {
    id: 78, category: "MCP",
    title: "MCP Healer Agent: Failure Recovery",
    tags: ["mcp","healer","self-healing"],
    excerpt: "The Healer is reactive — it activates after a failure and attempts recovery without changing test intent.",
    content: `## Healer Is Reactive, Not Proactive
Activates only after a **contract violation**: locator failure, assertion timeout, navigation mismatch, unexpected modal.

## Healing Strategy Order (Hard Rule)
1. Re-evaluate locator with updated DOM
2. Search for semantic equivalents (role, name, state)
3. Retry action with adjusted preconditions
4. Re-plan only the failed segment
5. Escalate failure (give up)

## Critical Constraint
> Healing must **never alter test intent** or expected outcome.

## Example Recovery
- **Failure**: Test expects "Disable" button, UI changed to "Deactivate"
- **Healer**: Scans DOM for role=button, matches "deactivate" semantically
- **Recovery**: Retries with new locator, validates same state transition
- **Logged**: As non-breaking adaptation

## 🔑 Key Takeaway
The Healer adapts to UI changes but never changes what the test is verifying. Intent is sacred.`
  },
  {
    id: 79, category: "MCP",
    title: "MCP Execution Traces & Observability",
    tags: ["mcp","traces","observability"],
    excerpt: "Every MCP execution must produce: prompt, plan, code, screenshots, traces, and healing diffs.",
    content: `## Mandatory Artifacts (Enterprise)
1. **Original prompt** — what was requested
2. **Execution plan** (versioned) — what was planned
3. **Generated code snapshot** — what was produced
4. **Screenshots & traces** — what happened
5. **Healing diffs** (before/after) — what changed

## Why Non-Optional
- Audit trail for compliance
- Debug failures post-execution
- Track intent drift over time
- Verify healing decisions

## Execution Trace Flow
\`\`\`
1. Prompt received
2. Plan generated
3. Code emitted
4. Actions executed
5. Browser feedback streamed
6. Healer decisions logged
7. Final artifacts archived
\`\`\`

## 🔑 Key Takeaway
If you can't explain why a test passed or was healed, MCP is not ready for that pipeline.`
  },
  {
    id: 80, category: "MCP",
    title: "Enterprise SSO/Auth Testing with MCP",
    tags: ["mcp","enterprise","sso","authentication"],
    excerpt: "MCP handles external auth dependencies, redirect flows, and role validation automatically.",
    content: `## Prompt
"Verify an Admin user can log in using SSO and access User Management"

## Planner Observations
- External auth dependency (SSO provider)
- Redirect-based navigation
- Role validation required

## Generated Strategy
1. Navigate to app → redirected to SSO
2. Fill SSO credentials
3. Handle redirect back to app
4. Assert post-login landing state
5. Assert role-based UI availability (Admin controls visible)

## Key Assertion Strategy
- Validate post-login URL
- Validate role-specific UI elements
- Validate absence of unauthorized elements

## 🔑 Key Takeaway
MCP excels at multi-step auth flows because the Planner understands state dependencies across redirects.`
  },
  {
    id: 81, category: "MCP",
    title: "Role-Based UI Validation with MCP",
    tags: ["mcp","rbac","assertions"],
    excerpt: "Assert on absence, not just presence. Verify users DON'T see what they shouldn't.",
    content: `## Negative Assertions
\`\`\`ts
// Verify standard user cannot see Admin controls
await expect(
  page.getByText('User Management')
).toHaveCount(0);
\`\`\`

## Why Absence Matters
- Positive tests: "Admin sees Admin Dashboard" ✅
- **Negative tests**: "User does NOT see Admin Dashboard" ✅
- Avoids false positives from conditional rendering delays

## MCP Data-Driven Approach
Prompt: "For each user role, verify dashboard visibility"

Planner expands:
- Admin → Admin dashboard ✅
- Manager → Manager dashboard ✅
- User → Standard dashboard ✅

Each becomes a **scoped execution plan**, not duplicated code.

## 🔑 Key Takeaway
Always test both presence AND absence. MCP plans role permutations automatically.`
  },
  {
    id: 82, category: "MCP",
    title: "MCP Anti-Flakiness Strategy",
    tags: ["mcp","flakiness","stability"],
    excerpt: "MCP replaces arbitrary waits with network-idle conditions, UI readiness signals, and state assertions.",
    content: `## Traditional Anti-Pattern
\`\`\`ts
// ❌ Never do this
await page.waitForTimeout(5000);
\`\`\`

## MCP-Driven Strategy
The Planner injects:
- **Network idle conditions**: Wait for all XHR/fetch to complete
- **UI readiness signals**: Spinners gone, content rendered
- **State-based assertions**: Assert on data, not timing

\`\`\`ts
// ✅ MCP approach
await page.waitForLoadState('networkidle');
await expect(page.getByTestId('data-loaded')).toBeVisible();
await expect(page.getByText('Ready')).toBeVisible();
\`\`\`

## Why This Works
- Reduces retries
- Eliminates timing guesses
- Works across slow/fast environments

## 🔑 Key Takeaway
Replace all timing-based waits with state-based assertions. MCP enforces this by design.`
  },
  {
    id: 83, category: "MCP",
    title: "Why Traditional Automation Hits Its Limits",
    tags: ["mcp","automation","maintenance"],
    excerpt: "60-70% of automation effort goes into maintenance. MCP targets this translation cost.",
    content: `## Maintenance Cost Explosion
- UI changes → locator changes → test failures
- 60–70% automation effort goes into **maintenance**
- ROI degrades as suite size grows

## Flakiness at Scale
Root causes:
- Async rendering differences
- Race conditions
- Test environment instability

## The Skill Gap Problem
- Manual QA thinks in **intent**: "Verify user can place an order"
- Automation requires: DOM + selectors + waits + assertions
- Translation gap = cost, errors, and delays

## How MCP Intervenes
MCP reduces the translation cost between:
- Business intent → Test design → Execution

## 🔑 Key Takeaway
MCP doesn't replace automation — it reduces the translation and maintenance tax on your existing investment.`
  },
  {
    id: 84, category: "MCP",
    title: "Governance, Risk & Compliance for MCP",
    tags: ["mcp","governance","compliance"],
    excerpt: "MCP without governance becomes unreviewable automation. Guardrails are mandatory.",
    content: `## Why MCP Fails Without Guardrails
- **Silent intent drift**: Healer changes test meaning
- **Over-healing hides regressions**: Tests pass but validate wrong things
- **Non-deterministic behavior**: Different results each run
- **Loss of trust**: Engineers and leadership stop relying on results

## How NOT to Roll Out MCP
- ❌ Replace all automation immediately
- ❌ Allow unrestricted self-healing
- ❌ Measure only test creation speed
- ❌ Remove human review loops

## Required for Compliance
- Prompt version history
- Execution plan diffs
- Healing decision logs
- Human approval checkpoints
- Traceable: intent → execution → outcome

## Key Principle
> MCP is governed intelligence, not autonomous testing.

## 🔑 Key Takeaway
Every MCP capability (healing, re-planning) must have a corresponding governance control.`
  },
  {
    id: 85, category: "MCP",
    title: "CI/CD Governance Model for MCP",
    tags: ["mcp","cicd","governance","pipeline"],
    excerpt: "MCP in CI/CD needs explicit execution modes: Validation, Exploratory, and Adaptive.",
    content: `## CI/CD Execution Modes
| Mode | Purpose | Healing | Re-Planning |
|------|---------|---------|-------------|
| Validation | PR checks | ❌ Disabled | ❌ Disabled |
| Exploratory | Nightly | ✅ Allowed | ❌ Disabled |
| Adaptive | Pre-prod | ✅ Allowed | ✅ Limited |

## Recommended Pipeline Stages
1. **Prompt Validation**: Syntax, clarity, template compliance
2. **Plan Generation & Diffing**: Compare against approved plans
3. **Deterministic Execution (PR)**: No healing, strict assertions
4. **Adaptive Execution (Optional)**: Healing enabled, non-blocking

## CI/CD Guardrails (Non-Negotiable)
- No automatic healing in PR pipelines
- No prompt edits during CI execution
- All healed changes require human approval
- All MCP artifacts must be archived

## 🔑 Key Takeaway
PR pipelines must be deterministic. Healing is only for exploratory/nightly runs with human review.`
  },
  {
    id: 86, category: "MCP",
    title: "MCP Pipeline Stages in Detail",
    tags: ["mcp","pipeline","stages"],
    excerpt: "Four stages: Prompt Validation → Plan Diffing → Deterministic Execution → Adaptive Execution.",
    content: `## Stage 1: Prompt Validation
- Validate prompt syntax and intent clarity
- Enforce prompt templates
- Block ambiguous or underspecified prompts
- **Failure here blocks pipeline**

## Stage 2: Plan Generation & Diffing
- Generate execution plan
- Compare against last approved plan
- Flag: new steps, deleted assertions, scope expansion
- Changes require re-approval

## Stage 3: Deterministic Execution (PR Gate)
- Healing **disabled**
- Strict assertions
- Any failure = pipeline failure
- Maximum trust, minimum magic

## Stage 4: Adaptive Execution (Optional)
- Healing **enabled**
- Results marked as **non-blocking**
- Healing diffs captured for review
- Used in nightly/staging environments

## 🔑 Key Takeaway
Separate validation from exploration. PR gates must be deterministic; nightly runs can be adaptive.`
  },
  {
    id: 87, category: "MCP",
    title: "Prompt Review & Versioning Workflow",
    tags: ["mcp","prompts","versioning","review"],
    excerpt: "MCP prompts define behavior, scope, and risk. They require formal review like code.",
    content: `## Why Prompts Require Review
In MCP, prompts define:
- **Behavior**: What the test does
- **Scope**: What it covers
- **Risk**: What could go wrong

They are equivalent to **test specifications + architecture decisions**.

## Prompt Lifecycle
1. Draft prompt created (QA/SDET)
2. Planner generates execution plan
3. Prompt + plan reviewed together
4. Prompt version approved
5. Prompt locked for CI usage

## Prompt Review Checklist
- ✅ Intent is explicit and testable
- ✅ No implementation detail embedded
- ✅ Clear success and failure criteria
- ✅ No scope creep ("verify everything")
- ✅ Role and data boundaries defined

## Versioning Rules
- **MAJOR**: Intent change
- **MINOR**: Scope expansion
- **PATCH**: Clarity improvement

## 🔑 Key Takeaway
Treat prompts like code — version them, review them, and never change them without approval.`
  },
  {
    id: 88, category: "MCP",
    title: "Leadership Adoption Playbook for MCP",
    tags: ["mcp","leadership","adoption","strategy"],
    excerpt: "MCP is a test intelligence layer, not a cost-cutting shortcut. Adopt in 3 phases.",
    content: `## What MCP Is (For Leadership)
A test intelligence layer that reduces translation cost between:
- Business intent → Test design → Execution behavior

## What MCP Is NOT
- ❌ Not autonomous QA
- ❌ Not "AI writes all tests"
- ❌ Not a cost-cutting shortcut

## 3-Phase Adoption
### Phase 1 — Assisted Automation
- MCP generates tests, humans review everything
- No healing in CI
- **Goal**: Trust building

### Phase 2 — Governed Intelligence
- Healing in non-blocking pipelines
- Prompt review boards established
- **Goal**: Productivity gains

### Phase 3 — Adaptive Quality Systems
- Limited healing in controlled paths
- Mature approval workflows
- **Goal**: Sustainable scale

## 🔑 Key Takeaway
Skip governance investment and MCP will fail. Start slow, build trust, scale with controls.`
  },
  {
    id: 89, category: "MCP",
    title: "KPIs Leadership Should Track for MCP",
    tags: ["mcp","kpis","metrics","leadership"],
    excerpt: "Track maintenance reduction, flakiness rate, time-to-test. Avoid raw test count and AI-generated %.",
    content: `## Tier 1 Metrics (Executive Dashboard)
| Metric | Why It Matters |
|--------|---------------|
| Test maintenance hours saved | Core ROI signal |
| Flaky test reduction rate | Stability indicator |
| Time-to-test for new features | Delivery velocity |
| Prompt reuse rate | Intent maturity |

## Tier 2 Metrics (Engineering Health)
| Metric | Interpretation |
|--------|---------------|
| Healing frequency | High = instability or poor prompts |
| Plan churn rate | Scope drift indicator |
| Prompt rejection rate | Prompt quality signal |
| Assertion density | Test strength |

## Anti-Metrics (Do NOT Track)
- ❌ Number of tests
- ❌ "AI-generated %" 
- ❌ Lines of generated code
- ❌ Healing success rate alone

These incentivize bad behavior.

## 🔑 Key Takeaway
Measure quality outcomes (stability, speed, maintenance), not vanity metrics (test count, AI percentage).`
  },
  {
    id: 90, category: "MCP",
    title: "RACI Model for MCP Ownership",
    tags: ["mcp","raci","ownership","accountability"],
    excerpt: "MCP agents are responsible for actions, never accountable for outcomes. Humans own decisions.",
    content: `## Core Roles
| Role | Description |
|------|------------|
| QA / SDET | Writes prompts, reviews plans, validates outcomes |
| Automation Architect | Defines guardrails, agent policies, standards |
| Tech Lead | Owns test intent correctness and scope |
| Platform / DevOps | Owns infra, CI/CD, secrets, environments |
| Security | Owns data access rules, audit posture |
| AI Agent | Generates plans, code, healing (non-owning) |

## RACI Matrix
| Activity | QA | Architect | Lead | DevOps | Security | Agent |
|----------|----|-----------| -----|--------|----------|-------|
| Prompt creation | R | C | A | I | I | – |
| Plan generation | I | C | C | I | I | R |
| Healing decision | C | A | A | I | I | R |
| CI execution | I | I | I | R | I | – |

## Non-Negotiable Rule
> If a test heals, a **human** must own the decision to accept it.

## 🔑 Key Takeaway
AI agents execute; humans are accountable. Never delegate outcome ownership to MCP.`
  },
  {
    id: 91, category: "MCP",
    title: "Regulated Industry MCP: SOC2 / ISO 27001",
    tags: ["mcp","soc2","iso27001","compliance"],
    excerpt: "SOC2 requires prompt versioning, plan retention, and healing logs. ISO requires least-privilege and separation.",
    content: `## SOC 2 Requirements
Required:
- Prompt versioning
- Execution plan retention
- Healing decision logs
- Change approval evidence

Disallowed:
- Silent healing in CI
- Unreviewed prompt edits

## ISO 27001 Requirements
- Least-privilege MCP execution roles
- Environment separation (dev / test / prod)
- Artifact retention policies
- Access reviews for AI agents

## ISO Control Mapping
- MCP Server → Controlled system component
- Prompts → Configuration items
- Plans → Change records

## 🔑 Key Takeaway
Map MCP components to your existing compliance framework. The concepts are the same — the entities are new.`
  },
  {
    id: 92, category: "MCP",
    title: "HIPAA-Compatible MCP Testing",
    tags: ["mcp","hipaa","healthcare","compliance"],
    excerpt: "MCP must never infer or generate PHI values. DOM masking and screenshot redaction are mandatory.",
    content: `## HIPAA Constraints
- **DOM masking for PHI**: Redact patient data before AI processing
- **Screenshot redaction**: Blur/remove sensitive fields
- **Read-only access**: For sensitive workflows
- **Explicit test data contracts**: No real patient data

## Absolute Rule
> MCP must **never** infer or generate PHI values.

## Regulated Execution Modes
| Environment | Healing | Re-Planning | Approval |
|-------------|---------|-------------|----------|
| Dev | Allowed | Allowed | Optional |
| Test | Limited | Limited | Required |
| CI (PR) | ❌ | ❌ | Mandatory |
| Pre-Prod | Limited | ❌ | Mandatory |
| Prod-like | ❌ | ❌ | Mandatory |

## 🔑 Key Takeaway
Healthcare testing with MCP requires the strictest controls. When in doubt, restrict more, not less.`
  },
  {
    id: 93, category: "MCP",
    title: "MCP Compliance Artifact Set",
    tags: ["mcp","artifacts","audit","compliance"],
    excerpt: "Five mandatory artifacts: prompt history, plan diffs, healing rationale, execution traces, approval records.",
    content: `## Must Be Retained
1. **Prompt history** — all versions, changes, approvers
2. **Plan diffs** — before/after for every plan change
3. **Healing rationale** — why healing occurred, what changed
4. **Execution traces** — screenshots, DOM, network logs
5. **Approval records** — who approved what, when

## Why Non-Optional
- Without prompt history → can't audit intent changes
- Without plan diffs → can't detect scope drift
- Without healing rationale → can't verify correctness
- Without traces → can't reproduce failures
- Without approvals → can't prove human oversight

## Storage Requirements
- Version-controlled (Git)
- Time-stamped
- Immutable once archived
- Accessible for audit review

## 🔑 Key Takeaway
Without this artifact set, MCP fails audits. Build artifact collection into your pipeline from day one.`
  },
  {
    id: 94, category: "MCP",
    title: "MCP ROI Narrative for Leadership",
    tags: ["mcp","roi","leadership","business-case"],
    excerpt: "MCP reduces waste by eliminating translation and maintenance cost — not by replacing people.",
    content: `## Before MCP
- Manual intent → automation translation (expensive)
- High maintenance cost (60-70% of effort)
- Low trust in tests (flaky, unreliable)

## After MCP
- Intent-first testing (prompts, not code)
- Reduced translation effort
- Controlled adaptability (healing with guardrails)
- Lower long-term cost

## Executive ROI Statement
> "MCP does not reduce quality cost by replacing people — it reduces waste by eliminating unnecessary translation and maintenance."

## Why Traditional Metrics Fail
Traditional: test count, coverage %, execution time
MCP value: intent stability, maintenance reduction, flakiness elimination

## 🔑 Key Takeaway
Frame MCP as a waste-reduction investment, not a headcount-reduction tool.`
  },
  {
    id: 95, category: "MCP",
    title: "Why MCP Fails at Leadership Level",
    tags: ["mcp","failure","leadership","mistakes"],
    excerpt: "MCP fails when leaders treat it as a tooling upgrade, skip governance, or chase speed over correctness.",
    content: `## MCP Fails When Leaders:
- Treat it as a **tooling upgrade** (it's an operating model change)
- Skip **governance investment** (healing without review = chaos)
- Remove **human accountability** (AI shouldn't own outcomes)
- Chase **speed over correctness** (fast wrong tests are worse than slow right ones)

## Executive Rule of Thumb
> If you cannot explain why a test passed or healed, MCP is not ready for that pipeline.

## Warning Signs
- Tests "pass" but nobody trusts them
- Healing frequency is high but nobody reviews
- Test count is growing but defect escape rate isn't dropping
- Engineers avoid the MCP-generated suite

## 🔑 Key Takeaway
MCP success requires organizational change, not just tool adoption. Invest in process alongside technology.`
  },
  {
    id: 96, category: "MCP",
    title: "Full MCP Operating Model: People + Process + Tech",
    tags: ["mcp","operating-model","enterprise"],
    excerpt: "Align roles, processes, and technology to implement MCP safely and at scale.",
    content: `## 1. People
- **QA/SDET**: Write prompts, review plans, validate outcomes
- **Architect**: Define guardrails, agent policies, standards
- **Tech Lead**: Approve prompts, validate intent
- **DevOps**: MCP infra, CI/CD, secrets
- **Security**: Data masking, audit, workflows
- **AI Agent**: Generate plans/code/healing (non-accountable)

## 2. Process
- Prompt lifecycle: draft → plan → review → approve → lock
- Plan review before CI usage
- PR: healing disabled. Nightly: healing allowed.
- Healing flagged and escalated if divergent

## 3. Technology
- MCP Server + Playwright Engine
- Version Control for prompts/plans/code
- CI/CD with execution rules
- Observability stack (traces, screenshots, diffs)

## Core Principle
> "No test executes without human intent approval or traceable rationale."

## 🔑 Key Takeaway
People own intent. Process enforces governance. Technology executes and observes.`
  },
  {
    id: 97, category: "MCP",
    title: "MCP Misuse Case Study: What Went Wrong",
    tags: ["mcp","case-study","failure","lessons"],
    excerpt: "A global enterprise rolled out MCP in 3 weeks without governance — here's what happened.",
    content: `## Scenario
Global enterprise attempted full MCP rollout in 3 weeks.

## Actions Taken (All Wrong)
- All QA engineers allowed unrestricted prompt generation
- Healing enabled in PR pipelines
- No prompt review board or artifact retention
- Leadership tracked only test creation speed

## What Went Wrong
1. **Intent Drift**: Healer silently adjusted steps. Tests passed but didn't validate business intent.
2. **Flakiness Explosion**: Healing masked failed tests → false confidence.
3. **Compliance Violation**: Sensitive DOM data in logs. No audit trail.
4. **Operational Confusion**: Engineers couldn't explain why tests passed.

## Root Cause
| Factor | Explanation |
|--------|------------|
| Governance Gap | No prompt review or plan approval |
| Over-Trust in AI | Healing in PR masked errors |
| Poor Observability | No logs, diffs, or versioning |
| Leadership Misalignment | Speed metrics, not quality |

## 🔑 Key Takeaway
This failure validates every governance control in the operating model. Shortcuts guarantee failure.`
  },
  {
    id: 98, category: "MCP",
    title: "MCP Corrective Measures & Recovery",
    tags: ["mcp","recovery","corrective","governance"],
    excerpt: "After MCP misuse: establish review boards, disable PR healing, retain artifacts, fix KPIs.",
    content: `## Corrective Measures Implemented
1. **Prompt review board** established
2. **Healing disabled** in PR pipelines
3. **Mandatory artifact retention** (prompts, plans, diffs, logs)
4. **KPIs realigned**: flakiness reduction, maintenance hours saved, prompt reuse

## Outcomes
- Stability increased, intent drift eliminated
- ROI became measurable and defensible
- Trust in MCP-driven automation restored

## Lessons Learned
- MCP requires guardrails: prompt review, plan approval, healing limits
- Human accountability cannot be bypassed
- Execution artifacts are mandatory
- Metrics must focus on quality, not speed

## Prevention Framework
- Before enabling healing: establish review process
- Before MCP in CI: define execution modes
- Before leadership reporting: align on correct KPIs
- Before production: complete artifact pipeline

## 🔑 Key Takeaway
Every MCP failure has an organizational root cause. Fix the process, not just the technology.`
  },
  {
    id: 99, category: "MCP",
    title: "MCP Environment Setup: Step by Step",
    tags: ["mcp","setup","installation","configuration"],
    excerpt: "Node 18+, Playwright, MCP server installation, and project folder structure.",
    content: `## Prerequisites
- Node.js 18+
- npm or pnpm
- TypeScript recommended

## Install Playwright
\`\`\`bash
npm init playwright@latest
\`\`\`

## Install MCP Server
\`\`\`bash
npm install @playwright/mcp-server
\`\`\`

## Recommended Folder Structure
\`\`\`
/tests
  /mcp          → MCP-specific tests
  /prompts      → Versioned prompts
  /specs        → Traditional test specs
/mcp-server     → MCP server configuration
/playwright.config.ts
\`\`\`

## Configuration Points
- MCP server: ports, permissions, tool exposure
- Playwright config: browsers, retries, traces
- CI config: execution modes, artifact collection

## 🔑 Key Takeaway
Start with a clean folder structure. Separate MCP prompts, plans, and specs from the beginning.`
  },
  {
    id: 100, category: "MCP",
    title: "Playwright + MCP: The Complete Mental Model",
    tags: ["mcp","playwright","summary","mental-model"],
    excerpt: "The full picture: Playwright provides deterministic execution; MCP provides intelligent orchestration.",
    content: `## The Complete Stack
\`\`\`
Human Intent (business goal)
    ↓
AI Code Agent (interprets, plans, decides)
    ↓
MCP Protocol (structured communication)
    ↓
MCP Server (routes, executes, streams)
    ↓
Playwright Engine (deterministic browser actions)
    ↓
Browser (real execution + feedback)
\`\`\`

## Division of Responsibility
- **Playwright**: Execution, auto-waiting, assertions, traces
- **MCP**: Protocol, communication, tool contracts
- **AI Agent**: Intelligence, planning, healing decisions
- **Humans**: Intent, approval, accountability

## Why This Works
- Playwright provides **deterministic primitives**
- MCP provides **structured orchestration**
- AI provides **intelligent adaptation**
- Governance provides **trust and safety**

## The Executive Summary
> Playwright is the engine. MCP is the protocol. AI is the driver. Humans are the authority.

## 🔑 Key Takeaway
No single layer works alone. The power comes from the disciplined combination of all four.`
  }
];
