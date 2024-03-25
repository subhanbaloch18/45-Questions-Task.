// EXERCISE NO 24 (MORE CONDITIONAL TESTS).
var car = 'subaru';
var age = 35;
var numbers = [1, 2, 3, 4];
//        "STRING TESTS"
// TEST NO 1: (EQUALITY TRUE).
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True (case-insensitive).
// TEST NO 2: STRICT EQUALITY (FALSE).
console.log("Is car === 'subaru'? I predict False.");
console.log(car === 'subaru'); // False (case-sensitive).
// TEST NO 3: INEQUALITY (TRUE).
console.log("Is car != 'Mehran'? I predict True.");
console.log(car != 'Mehran'); // True 
// TEST NO 4: INEQUALITY (FALSE).
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False (case-sensitive).
//          "Lowercase Function Tests"
// TEST NO 5: Lowercase conversion (TRUE).
console.log("Is car.toLowercase() == 'subaru'? I Predict True.");
console.log(car.toLowerCase() == 'subaru'); // True (converted to lowercase).
// TEST NO 6: Lowercase conversion (FALSE).
console.log("Is car === car.toLowercase()? I Predict False.");
console.log(car === car.toLowerCase()); // False (original value remains uppercase).
//        "NUMERICAL TESTS"
// TEST NO 7: EQUALITY (TRUE).
console.log("Is age == 35? I Predict True.");
console.log(age == 35); // True.
// TEST NO 8: INEQUALITY (FALSE).
console.log("Is age != 40? I Predict True.");
console.log(age != 40); // True.
// TEST NO 9: GREATER THAN (FALSE).
console.log("Is age > 40? I Predict False.");
console.log(age > 40); // False.
// TEST NO 10: LESS THAN OR EQUAL (TRUE).
console.log("Is age <= 40? I Predict True.");
console.log(age <= 40); // True.
//        "LOGICAL OPERATORS"
// TEST NO 11: AND (TRUE).
console.log("Is > 30 && age < 40? I Predict True.");
console.log(age > 30 && age < 40); // True (Both Conditions Met).
// TEST NO 12: OR (FALSE).
console.log("Is age > 40 || age < 28? I Predict False.");
console.log(age > 40 || age < 28); // False (Neither Conditions Met).
//       "ARRAY TEST"
// TEST NO 13: IN ARRAY (TRUE).
console.log("Is 3 in numbers? I Predict True.");
console.log(3 in numbers); // True (check for index existence).
// TEST NO 14: NOT IN ARRAY (FALSE).
console.log("Is 5 not in numbers? I Predict True.");
console.log(5, not in numbers); // True (negation of "in" operator).
