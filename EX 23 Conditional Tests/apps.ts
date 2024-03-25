// EXERCISE 23 (CONDITIONAL TESTS).

let car: string = 'subaru';

// TEST NO 1: EQUALITY COMPARISION (TRUE).
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True.


// TEST NO 2: STRICT EQUALITY COMPARISION (TRUE).
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True.


// TEST NO 3: INEQUALITY COMPARISION (FALSE).
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False.


// TEST NO 4: STRICT INEQUALITY COMPARISION (FALSE).
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False.


// TEST NO 5: LESS THAN COMPARISION (FALSE).
console.log("Is car < 'subaru'? I predict False.");
console.log(car < 'subaru'); // False (lexicographic comparision).


// TEST NO 6: GEATER THAN COMPARISION (FALSE).
console.log("Is car > 'subaru'? I predict False.");
console.log(car > 'subaru'); // False (lexicographic comparision).


// TEST NO 7: LESS THAN OR EQUAL COMPARISION (TRUE).
console.log("Is car <='subaru'? I predict True.");
console.log(car <='subaru'); // True.


// TEST NO 8: GREATER THAN OR EQUAL COMPARISION (TRUE).
console.log("Is car >='subaru'? I predict True.");
console.log(car >='subaru'); // True.


// TEST NO 9: CHECKING TRUTHINESS (TRUE).
console.log("Is car? I predict True.");
console.log(car); // True (non-empty string is truthy).


// TEST NO 10: CHECKING FALSINESS (FALSE).
console.log("Is !car? I predict False.");
console.log(!car); // False (negation of a  truthy value).
