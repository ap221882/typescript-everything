//> Just a friendly name, TS only supports structural type system.

/*
type UserContactInfo = {
  name: string;
  email: string;
};

type UserContactInfo = {
  fail: "this will not work";
};
//~^ Interfaces can be duplicate, Types cant be duplicate
*/

//~* Inheritance works using the & operator
