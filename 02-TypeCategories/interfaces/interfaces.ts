//~> Way to define the object types

//~#   Inheritance using extends - inheritance for like things
//~# Inheritance using extends - inheritance for unlike things

class LivingOrganism {
  isAlive() {
    return true;
  }
}
interface AnimalLike {
  eat(food): void;
}
interface CanBark {
  bark(): string;
}

class Dog extends LivingOrganism implements AnimalLike, CanBark {
  bark() {
    return "woof";
  }
  eat(food) {
    consumeFood(food);
  }
}
function consumeFood(food: any) {
  throw new Error("Function not implemented.");
}
