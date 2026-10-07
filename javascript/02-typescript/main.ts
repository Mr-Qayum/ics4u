const str: string = "Hello";
const num: number = 5;
const bool: boolean = true;
const nil: null = null;
const any: any = "I can be anything I want";
const undef: undefined = undefined;
const unk: unknown = "44";
const sym: symbol = Symbol("id");
const big: bigint = 100n;
const obj: object = {};

const arr: number[] = [1, 2, 3];
const arr2: Array<number> = [2, 3, 4];
const pair: [string, number] = ["Bob", 44];

any.toUpperCase();

if (typeof unk === "string") {
    unk.toUpperCase();
}

function voidFunction(): void {
  console.log("I return nothing :(");
}

function test1(a: number, b: string): number {
  return a;
}

const test2 = (a: number, b: string): number => {
  return a;
};

type Role = "ADMIN" | "SECURITY" | "DEVELOPER";

type Person = {
    name: string;
    age: number;
}

type User = {
    name: string;
    role: Role;
    id?: number;
}

const personObj: Person = {
    name: "Batman",
    age: 45,
}

const userObj: User = {
    id: 999999999,
    name: "Bill",
    role: "ADMIN",
}

type Values = number | string;

const x: Values = 5;
const y: Values = "Meow";

type Food = "hot dogs" | "hamburger";
const fav: Food = "hot dogs";

type Drink = "coke" | "7-up";
type Meal = Food | Drink;

const meal: Meal = "coke";

type Admin = User & { isAdmin: boolean };

const admin: Admin = {
    name: "Bob",
    role: "DEVELOPER",
    isAdmin: true,   
}

const gamerName: Partial<User> = { role: "SECURITY" };

type Personnel = Pick<User, "name" | "id">;

const personnel: Personnel = {
  id: 555555,
  name: "Tom",
};

