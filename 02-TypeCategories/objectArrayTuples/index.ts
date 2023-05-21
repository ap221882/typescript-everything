//> Objects -
//> 1.  what are the properties available
//> 2. what are the types of the properties available

let cat: { name: string; species: string; sound: string; age: number };

cat.age = 10;

//~^ optional properties

let car: { name: string; brand: string; year: number; new?: boolean };
car.new = true; //? MAY BE, MAY BE NOT
//~^ typescript complains when you dont use typeguard(to handle undefined type)

//~! OPTIONAL properties are not === property: number | undefined

//! The former one demands the explicit undefined to be provided each time the value is referenced while for ?.(optional type) it need not to be there.
