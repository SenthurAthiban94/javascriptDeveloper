
interface A {
    name: string,
    address?: string[],     // optional field
    age: number
}

const log = (thing: A)=>{
    console.log(thing?.address);    // when not sure address will be there
    console.log(thing.address!);    // when sure address present all the time.
}

const isNumber = (thing: any): thing is number=>{
    return thing.age;
}
isNumber(12); // returns a boolean


let foo,baz;
let nullishCollation = foo ?? baz;          // if foo is undefined/null then return baz else return foo


// import { add } from './add';
// this actually imports the function itself and will be included in the bundle 
// It can be imported this way when you want to use that function


// This actually imports only the type of the add function and doesn't gets included into bundle.
// calling the function will throw an error as we are importing only its type.
import type { add } from './add';
type localAdd = typeof add;
let sumnumbers:localAdd = (a,b)=>a+b;
console.log(sumnumbers(2,2));