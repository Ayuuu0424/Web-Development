// ==============================
// JavaScript Strict Mode Practice
// ==============================

// 1. Enable "use strict" and declare a variable using var, then print it.
"use strict";
var a = 10;
console.log("1:", a);

// 2. Enable "use strict" and try using a variable without declaration.
try {
  b = 20; // ❌ Error in strict mode
  console.log("2:", b);
} catch (error) {
  console.log("2 Error:", error.message);
}

// 3. Enable "use strict" inside a function and use a variable without declaration.
function test3() {
  "use strict";
  try {
    c = 30; // ❌ Error
    console.log(c);
  } catch (error) {
    console.log("3 Error:", error.message);
  }
}
test3();

// 4. Create a function in strict mode and log the value of this.
function test4() {
  "use strict";
  console.log("4:", this); // undefined in strict mode
}
test4();

// 5. Try to delete a variable in strict mode.
var d = 40;
try {
  delete d; // ❌ Not allowed
} catch (error) {
  console.log("5 Error:", error.message);
}

// 6. Create a function with duplicate parameters in strict mode.
try {
  eval(`
        "use strict";
        function test6(x, x) { 
            return x; 
        }
    `);
} catch (error) {
  console.log("6 Error:", error.message);
}

// 7. Use an octal number (starting with 0) in strict mode.
try {
  eval(`
        "use strict";
        var num = 010; // ❌ Not allowed
        console.log(num);
    `);
} catch (error) {
  console.log("7 Error:", error.message);
}

// 8. Try to declare a variable using a reserved keyword like eval in strict mode.
try {
  eval(`
        "use strict";
        var eval = 50; // ❌ Not allowed
    `);
} catch (error) {
  console.log("8 Error:", error.message);
}

// 9. Compare undeclared variable behavior

// WITHOUT strict mode
function nonStrict() {
  x1 = 100; // allowed (becomes global)
  console.log("9 Non-strict:", x1);
}
nonStrict();

// WITH strict mode
function strictModeTest() {
  "use strict";
  try {
    x2 = 200; // ❌ Error
    console.log(x2);
  } catch (error) {
    console.log("9 Strict Error:", error.message);
  }
}
strictModeTest();

// 10. Combined program showing multiple strict mode errors and behavior
function test10() {
  "use strict";

  // undeclared variable
  try {
    y = 300;
  } catch (e) {
    console.log("10 Undeclared Error:", e.message);
  }

  // this behavior
  console.log("10 this:", this); // undefined

  // duplicate parameters (via eval to catch error)
  try {
    eval(`function demo(a, a) {}`);
  } catch (e) {
    console.log("10 Duplicate Param Error:", e.message);
  }
}
test10();
