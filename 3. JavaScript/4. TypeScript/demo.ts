// Creates a package.json file by running: npm init -y
// Install Typescript by running: npm install typescript ts-node @types/node --save-dev
// Create a tsconfig.json file by running: npx tsc --init
// Run the code by running: npx ts-node demo.ts
// Run npx tsc to compile the code to JS (Optional)

let str: string = "Hello";
let num: number = 5;
let bool: boolean = true;
let nil: null = null;
let undef: undefined = undefined;
let big: bigint = 100n;
let sym: symbol = Symbol("id");
let any: any = "I can be anything I want";
let unk: unknown = "44";

let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [2, 3, 4];
let pair: [string, number] = ["Bob", 44];

if (typeof sym === "symbol") {
    console.log("This is a symbol");
}

function voidFuntion(): void {
    console.log("I return nothing :(");
}

function test1(a: number, b: string): number {
    return a;
}

const test2 = (a: number, b: string): number => {
    return a;
}

enum Role {
    ADMIN,
    SECURITY,
    DEVELOPER,
}

type Person = {
    name: string;
    age: number;
}

interface User {
    name: string;
    role: Role;
    id?: number; // make id optional
}

const personObj: Person = {
    name: "Bill",
    age: 21,
}

const userObj: User = {
    name: "Kim",
    role: Role.DEVELOPER,
    id: 99999999,
}

type Values = number | string;
const x: Values = 5;
const y: Values = "Meow";

type Food = "hot dogs" | "hamburger";
const fav: Food = "hot dogs";

type Drink = "coke" | "7-up";
type Meal = Food | Drink;

type Admin = User & { isAdmin: boolean };
const admin: Admin = {
    name: "Bob",
    role: Role.ADMIN,
    isAdmin: true,
}

const namerName: Partial<User> = { role: Role.SECURITY };

type Personnel = Pick<User, "name" | "id">;
const personnel: Personnel = {
    name: "Tom",
    id: 555555,
}

// Look into Omit and Record
