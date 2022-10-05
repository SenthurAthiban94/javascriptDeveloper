let DB = require('./DB');

const Query = {
    users: ()=>DB,
}

const Mutation = {
    createUser:(root, args, context, info)=>{
        const userExist = DB.find(e=>e.firstName===args.firstName && e.lastName===args.lastName);
        if(!userExist){
            const newUser = {
                id:DB.length+1,
                firstName:args.firstName,
                lastName:args.lastName
            };
            DB.push(newUser);
            return newUser;
        } else {
            throw new Error('User Already Exist!');
        }
    },
    updateUser:(root, args, context, info)=>{
        let userExist = DB.find(e=>e.id===args.id);
        if(userExist){
            userExist = {
                ...userExist,
                firstName:args.firstName,
                lastName:args.lastName
            };
            DB = DB.map(e=>(e.id===userExist.id) ? userExist : e);
            return userExist;
        } else {
            throw new Error('User does not exist!');
        }
    },
    delteUser:(root, args, context, info)=>{
        const userExist = DB.find(e=>e.id===args.id);
        if(userExist){
            DB = DB.filter(e=>e.id!=args.id);
            return DB;
        } else {
            throw new Error('User does not exist!');
        }
    },
}


module.exports = {
    Query,
    Mutation
}