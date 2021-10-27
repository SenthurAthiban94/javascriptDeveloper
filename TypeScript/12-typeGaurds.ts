const typeGaurds = (val: string | number):void=>{
    // Throws error when something related to one type doesn't work on another type.
    // val.toUpperCase(); // number can't have toUpperCase() method which string type has. So typeguard is necessary

    // TypeGaurding and error will be gone.
    if(typeof val === 'string'){
        val.toUpperCase();
    }
}