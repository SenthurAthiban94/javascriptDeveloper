// Narrowing
const fn = (arg: string | number ):void=>{
    // type of arg would be string | number
    console.log(arg);
    if(typeof arg === 'string'){
        // type of arg would be string
        console.log(arg);
    }else if(typeof arg === 'number'){
        // type of arg would be number
        console.log(arg);
    }else{
        // type of arg would be never
        console.log(arg);
    }
}