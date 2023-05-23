class Car {
  public make: string;
  public readonly model: string; //? can't be updated
  private year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  protected unlockAllDoors() {
    return this.year;
  }
}

const car = new Car("Tata", "Suzuki", 1992);

//> access modifier keywords

//~* abbr.
class Cars {
  constructor(public make: string, public model: string, public year: number) {}
}
