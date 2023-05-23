//~# never

let someVariable: never;
//> never means we have handled all of the cases in type guards . There can not be any other type, e.g.

let value:
  | Date
  | null
  | undefined
  | "pineapple"
  | [number]
  | { dateRange: [Date, Date] };

// instanceof
if (value instanceof Date) {
  let value: Date;
}
// typeof
else if (typeof value === "string") {
  let value: "pineapple";
}
// Specific value check
else if (value === null) {
  let value: null;
}
// Truthy/falsy check
else if (!value) {
  let value: undefined;
}
// Some built-in functions
else if (Array.isArray(value)) {
  let value: [number];
}
// Property presence check
else if ("dateRange" in value) {
  let value: {
    dateRange: [Date, Date];
  };
} else {
  value;
}

//~! never only accepts type never, nothing else

//~^USECASE
//~^ `https://www.typescriptlang.org/play?#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAUAGYCuAdgMYAuAlnCaHAEYUCGVJASsyQCZwC2ANUgALKmQA2kABQBKVFwCeoAN55QoaJApFodZQF9QzREZIK8+vBOMmAws2gq1obtCoA3aTKfr1ZWohwkgB04nAA5lIARO7w-FEyzpaW1ogmACrQRGQA1j6gFHAA7rL5fgFBkKER0a7M4eFs4aCBfFqiJOEJSRZW4jagAEJwzBT5VIgAYmGjTaWqvhpaOnQUWZA9lhQKAA6QoEKiEvsAvKCZ2XkAPqD2jjfDo3h4kmN8Codikqifx6BnjBYbE4PH4v0ksjwIDAAFo4WQiBQ4TC+gMAKokTTMMjCZgMSQAUVgCFAkAAHhRIDwTET4I4FqB-CREGtsoVoFIAPokWKoEiQTzQAA0oDaaXqkFQLLcnW8DPUiCIew5YsQEsS6mSzxA52E+3JuKILI8+yZ3Co1FozHEeCoBFAUne4P2bBZXDIkDg9ouuTlzidIi+VUKJW8Op9OQspPEiBd9sdH0Df1dLHInvtdz96gDRxCrhNpR1dyjkBj+wZOoAcgSAJLpAASBPYAEJnBRhPAiqB+V2MVicXjCcSOc5s4nc5AhaPQAADDHkvaUSDcUCeCcFXaS0AAEmUOaD+hnzkS+iAA`
