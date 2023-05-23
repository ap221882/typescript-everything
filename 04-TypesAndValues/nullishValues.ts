//> null for absence of a value
//> undefined for a value that is not for the time being but can be there, by reassigning etc...
//> void - explicitly for function returns - means the return value has no meaning(to be ignored), need not to be handled

//~# Non null assertion operator
//~* !.
type GroceryCart = {
  fruits?: { name: string; qty: number }[];
  vegetables?: { name: string; qty: number }[];
};

const cart: GroceryCart = {};

cart.fruits.push({ name: "kumkuat", qty: 1 }); //! gives error
cart.fruits!.push({ name: "kumkuat", qty: 1 });

//~# Definite assignment operator
//~* !: - taking responsibility that this things get its value
// https://www.typescript-training.com/course/fundamentals-v3/13-nullish-values/#definite-assignment-operator
