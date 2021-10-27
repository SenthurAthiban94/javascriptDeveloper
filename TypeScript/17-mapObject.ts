interface Obj<T = any> {
    [k: string]: T | undefined
}

const mapObject = <T,S>(inputObj:Obj<T>, cb:(input:T)=>S):Obj<S>=>{
    const output:Obj<S> = {};
    Object.keys(inputObj).forEach(e=>{
        if(inputObj[e]){
            output[e] = cb(inputObj[e]);
        }
    });
    return output;
}

const test = {
    a:1,
    b:2,
    c:3
}

const output = mapObject(test,(val)=>{
    return val.toString();
});