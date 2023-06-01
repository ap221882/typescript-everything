interface Fruits {
  name: string;
  mass: number;
  color: string;
}

const Fruits: Fruits = {
  name: "banana",
  color: "yellow",
  mass: 183,
};

interface Fruit {
  name: string;
  mass: number;
  color: string;
}

class Fruit {
  static createBanana(): Fruit {
    return { name: "banana", color: "yellow", mass: 183 };
  }
}

// the namespace
namespace Fruit {
  function createFruit(): Fruit {
    // the type
    return Fruit.createBanana(); // the class
  }
}

export { Fruit, Fruits };
