import {add} from './add';

function printableSum(a,b){
    return add(a,b);
}

const result = printableSum(3,4);

console.log('hello',result);