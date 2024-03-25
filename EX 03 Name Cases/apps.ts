// EXERCISE 03 (NAME CASES).

// lower case
let personName: string ="Subhan Ghafoor"
console.log("lowercase:", personName.toLowerCase());

// upper case
console.log("uppercase:", personName.toUpperCase());

// title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
