function flipCoin(): "heads" | "tails" {
  if (Math.random() > 0.5) return "heads";
  return "tails";
}

function maybeGetUserInfo():
  | ["error", Error]
  | ["success", { name: string; email: string }] {
  if (flipCoin() === "heads") {
    return ["success", { name: "Mike North", email: "mike@example.com" }];
  } else {
    return ["error", new Error("The coin landed on TAILS :(")];
  }
}

const outcome = maybeGetUserInfo();

outcome[0] === "success" && outcome[1];
/**
 *  // ~% DISCRIMINATED UNIONS
 * //* outcome can be only this now in the above line
 *> ["success", {
 *> name: string;
 *> email: string;
 *> }]
 */

const [type, message] = outcome;

//~# UNION ALLOWS US TO USE ONLY THE COMMON BEHAVIOUR IF WE ARE NOT HANDLING THE SAME WITH TYPE GUARDS

//# Type guarding is increasing the specificity of the type
