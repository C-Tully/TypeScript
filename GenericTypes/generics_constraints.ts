// let names: Array<string> = ["Max", "Anna"];

// type DataStore<T> = {
//   [key: string]: T;
// };

// let store: DataStore<string | boolean> = {};
// store.name = "Max";
// store.isInstructor = true;

// let nameStore: DataStore<string> = {};

// function merge<T, U>(a: T, b: U) {
//   return [a, b];
// }

// const ids = merge(1, "Max");

// // function mergeObj(a:any,b:any) {
// //Adding a constrainr on a placeholder is being
// // the extends tells TSC that the type that will be used
// // in these params must extend a given type as well as
// // the parent type
// // function mergeObj<T extends object>(a: T, b: T) {
// function mergeObj<T extends object, U extends object>(a: T, b: U) {
//   return { ...a, ...b };
// }

// //This usage will throw an error as a result of the extends
// //keyword requring a object be used
// // const merged = mergeObj(1, 2);

// //Due to the different types within the passed objects we risk a
// // possible bug, and this also returns a complex type
// //by using the multiple type restraints on the function type we
// // can narrow this down
// const merged = mergeObj({ lorem: "ipsum" }, { dolar: 35 });
// console.log(merged);
