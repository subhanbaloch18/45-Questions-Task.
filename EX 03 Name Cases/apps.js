// EXERCISE 03 (NAME CASES).
// lower case
var personName = "Subhan Ghafoor";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toUpperCase());
// title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
