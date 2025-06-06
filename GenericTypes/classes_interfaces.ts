let names: Array<string> = ["Max", "Anna"];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = "Max";
store.isInstructor = true;

let nameStore: DataStore<string> = {};

function merge<T, U>(a: T, b: U) {
  return [a, b];
}

const ids = merge(1, "Max");

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const merged = mergeObj({ lorem: "ipsum" }, { dolar: 35 });
console.log(merged);

//Generic Class
class User<T> {
  constructor(public id: string | number | object) {}
}

//Generic Interface
interface Role<T> {}

//Like other applications this will
//show either a inferred type or a more statly set type
const user = new User("i1");
console.log(user.id);
