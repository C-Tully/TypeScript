// let names: Array<string> = ["Max", "Anna"];

// type DataStore<T> = {
//   [key: string]: T;
// };

// let store: DataStore<string | boolean> = {};
// store.name = "Max";
// store.isInstructor = true;

// let nameStore: DataStore<string> = {};

// //multiple placeholder types can be passedin to allow for
// // a more dynamic generic type.
// function merge<T, U>(a: T, b: U) {
//   return [a, b];
// }

// //you can manually set the types here, but it's overkill
// // const ids = merge<number, string>(1, 2);
// const ids = merge(1, "Max");
