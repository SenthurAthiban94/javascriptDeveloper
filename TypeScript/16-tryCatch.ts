const logGroup = (message:string,type:'Error' | 'Info' | 'Warning'):void =>{
    console.log(type,message);
}

try{
    logGroup('I am an error message', 'Error');
}catch(e: unknown){
    // any could be used as type to catch the javascript errors and if there could be possible non javascript errors thrown as text then any type won't catch those 
    // hence type gaurd and unknown type should be used in order to catch even non javascript errors
    if(e instanceof Error){
        console.log(e.stack);       // which is available for all javascript errors
    }else{
        console.log(e);
    }
}