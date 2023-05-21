//> TypeScript complains when we assign a function having argument as an object with an extra property not configured
//> BUT this can be fixed using object literal type

function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}) {
  // implementation removed for simplicity
}

//~^ PROBLEM
printCar({
  make: "Tesla",
  model: "Model 3",
  year: 2020,
  chargeVoltage: 220,
  color: "RED", // <0------ EXTRA PROPERTY
});

//~^ FIXED
const myCar = {
  make: "Tesla",
  model: "Model 3",
  year: 2020,
  chargeVoltage: 220,
  color: "RED", // <0------ EXTRA PROPERTY
};

printCar(myCar);
