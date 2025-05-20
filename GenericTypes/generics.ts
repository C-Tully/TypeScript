// let names: Array<string> = ["Max", "Anna"];

// type DataStore<T> = {
//   [key: string]: T;
// };

// let store: DataStore<string | boolean> = {};
// store.name = "Max";
// store.isInstructor = true;

// let nameStore: DataStore<string> = {};

// //Generic Functions
// // To make it more generic, we set the <T> as
// // a placeholder so that we get let the type
// // be set downstream.
// // function merge(a: any, b: any) { -> results in a 'any' type return
// function merge<T>(a: T, b: T) {
//   return [a, b];
// }

// //because we are returning a 'any'
// //type TSC doesn't have a concret return type
// // const ids = merge(1, 2);

// //TSC now returns as a number type
// //Note that you can omit the <number> in these case
// //as the inputs are both numbers, it can infer it'll be a number
// const ids = merge<number>(1, 2);
