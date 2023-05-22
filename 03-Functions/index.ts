//~# 1. Call Signatures

interface ITwoNumberCalculation {
  (x: number, y: number): number;
}

type TTtwoNumberCalculation = (x: number, y: number) => number;

//> They act as type aliases for the function signatures

//~# 2. void vs undefined
//~? void means the return value is to be ignored, undefined means the function must not return anything
function invokeInFourSeconds(callback: () => undefined) {
  setTimeout(callback, 4000);
}
function invokeInFiveSeconds(callback: () => void) {
  setTimeout(callback, 5000);
}

const values: number[] = [];
// @ts-ignore
invokeInFourSeconds(() => values.push(4));
invokeInFiveSeconds(() => values.push(4));

//~# 3. Construct Signatures

interface DateConstructor {
  new (value: number): Date;
}

let MyDateConstructor: DateConstructor = Date;
const d = new MyDateConstructor();

//~# 4. Function overloading

type FormSubmitHandler = (data: FormData) => void;
type MessageHandler = (evt: MessageEvent) => void;
//~* HEADS
function handleMainEvent(elem: HTMLFormElement, handler: FormSubmitHandler);
function handleMainEvent(elem: HTMLIFrameElement, handler: MessageHandler);
//~* IMPLEMENTATION
function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {}

//~# 5. this type
/**
 * # Note TypeScript understands that .bind, .call or .apply will result in the proper this being
 * # passed to the function as part of its invocation.
 */

const myButton = document.getElementsByTagName("button")[0];

function myClickHandler(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}

myClickHandler.call(myButton, new Event("click")); // seems no longer ok
