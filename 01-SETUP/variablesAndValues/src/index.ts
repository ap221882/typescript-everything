//~# 1.
//> variables are born with their types
let age = 10; //~* age is inferred type string
const number = 1; //~* literal type(literally it is 1, cant be changed) - 1 - since it is immutableß

//~# 2.
//~% Hence,TypeScript helps in the common behaviour of JS
let myVariable; //~* variable is inferred type -any-most flexible type
//> Hence type annotations
let myDate: Date;

/**
 * ~? "any" can break your TS code as it can be used in a well typed code
 * ~? - assigned to anything any can accept anything + present iself as anything
 */

//~# 3.
//> Return type of a function is also inferred based on the types of the arguments
function add(a: number, b: number) {
  return a + b; // strings? numbers? a mix?
}
