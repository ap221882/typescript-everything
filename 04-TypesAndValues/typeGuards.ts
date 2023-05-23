let values:
  | Date
  | null
  | undefined
  | "pineapple "
  | [number]
  | { dateRange: [Date, Date] };

// instanceof
if (values instanceof Date) {
  values;
}
// typeof
else if (typeof values === "string") {
  values;
}
// Specific values check
else if (values === null) {
  values;
}
// Truthy/falsy check
else if (!values) {
  values;
}
// Some built-in functions
else if (Array.isArray(values)) {
  values;
}
// Property presence check
else if ("dateRange" in values) {
  values;
} else {
  values;
}

//~> use "is" & "asserts" for custom typeguards
// https://www.typescript-training.com/course/fundamentals-v3/12-type-guards/
