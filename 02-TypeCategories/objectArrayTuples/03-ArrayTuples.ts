//~* ARRAYS
type ArrayType<T> = T[];

const stringArray: ArrayType<string> = ["string"];

//~* TUPLES
//~? Basically are arrays of fixed length and a definite type at particular index

const myTuple: [string, number, string] = ["Ajay", 23, "Software Engineer"];

const alertSuccess = (messageArray: ["success" | "failure", string]) => {
  //~^ Bonus index (0,1) typeahead suggestions as indexes are limited
  return [messageArray[0], messageArray[1]];
};

//~! @@@@ But still the tuple can be pushed and popped

myTuple.pop(); //~!` No Complains
