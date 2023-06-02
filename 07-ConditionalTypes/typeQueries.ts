//~# Allow us to obtain information of type from the values, especially when libraries dont expose type information

//~> keyof     - extract type information from objects
type DatePropertyNames = keyof Date;
//* but what if I want only string types - intersection operator
type DatePropertyStringNames = DatePropertyNames & string;
type DatePropertySymbolNames = DatePropertyNames & symbol;
//^ hence toPrimitive is the only non string type in Date constructor

//~> typeof     - extract type information from anything, e.g., return value of function
const variable = "Wow this value!";
const myFunction = (a: number, b: number, c: number, d: number) =>
  a + b + c + d;
const result = myFunction(1, 2, 3, 4);
type extractedStringType = typeof variable;
type extractedFunctionType = typeof myFunction;
type extractedFunctionReturnType = typeof result;

class Fruit {
  constructor(
    public readonly name: string,
    public readonly mass: number,
    public readonly color: string
  ) {}

  static createBanana() {
    return new Fruit("banana", 108, "yellow");
  }
}
//* type with static types of constructor function
const MyFruit = Fruit;
type Wow = Fruit;

const banana: Wow = Fruit.createBanana();
