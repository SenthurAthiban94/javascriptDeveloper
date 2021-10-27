(function(){
    interface Company{
        name: string,
    }
    interface Employee{
        name: string
    }
    function getName<T extends Company, Employee>(thing:T):string{
        return thing.name;
    }
    let company:Company = {
        name: 'Halfcute'
    }
    let senthur:Employee = {
        name: 'Senthur Athiban'
    }
    console.log(getName(company));
    console.log(getName(senthur));
})()