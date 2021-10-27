// Type Inference (Typescript assuming types based on its value assigned initially)
let a = 'hello';
// a = 20;  // throws an error
a = 'accepting strings';

// Explicit Types explicitly specifying to "any" type which accepts world string and number 10;
let b : any = 'world';
b = 10;

// Primitives
let n: number = 20;
let s: string = 'hello world';
let isValid: boolean = true;

// Arrays & Tuples
const Arr: number[] = [1,2,3,4];
const Arr1: Array<number> = [1,2,3,4];
// Tuples
const Tuple: [number,string,boolean] = [1,'Senthur Athiban', true];


// Functions
let testFunc = (a: number, b:number) :number =>{
    return a+b;
}
const result: number = testFunc(2,2);
//Objects type can be defined explicitly or assumed by initial assignment while declaring.
let obj = {
    firstName: 'senthur',
    lastName: 'athiban'
}
// obj.test=12; throws an err as key not specified on obj

// ENUMS
enum Gender {
    male= "male",
    female= "female",
    transgender = "transgender"
}

type customType = keyof typeof Gender;

const gender:customType = 'male'