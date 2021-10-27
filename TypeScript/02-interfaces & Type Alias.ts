
(function(){
    // Type Alias
type myNumbers = number;
let age : myNumbers = 20;

type contactInfo = {
    mobile: number,
    email: string,
}
type user = {
    username: string,
    age: number,
    gender: 'Male' | 'Female' | 'Transgender'
}

// Extending types
let customer:contactInfo & user = {
    mobile:9283,
    email:'safdsl@gmail.com',
    username:'senthur',
    age: 27,
    gender: 'Male',
};

// Interface extending types
interface userInterface extends contactInfo{
    username: string,
    age: number,
    gender: 'Male' | 'Female' | 'Transgender'
}

type numOrstr = number | string;
let mobile :numOrstr = 9524898941;
mobile = '+91-9524898941';

// Interfaces
interface customer {
    id: number,
    name: string,
    mobile: number,
    email?: string,
    isVerified: boolean,
    isActive: boolean,
}
interface Address {
    id: number,
    addressLine1: string,
    addressLine2: string,
    city: string,
    pincode: number,
    state: string,
    country: string,
    isDefault: boolean
}

interface customer {
    addresses: Address[],
}
    let user:customer = {
        addresses: [{
            id: 1,
            addressLine1: 'Plot no 9 loordhunagar',
            addressLine2: '10th st, k-pudur',
            city: 'madurai',
            pincode: 625007,
            state: 'Tamil Nadu',
            country: 'India',
            isDefault: false
        },{
            id: 2,
            addressLine1: 'Plot no 9 loordhunagar',
            addressLine2: '10th st, k-pudur',
            city: 'madurai',
            pincode: 625007,
            state: 'Tamil Nadu',
            country: 'India',
            isDefault: false
        }],
        name: 'Senthur Athiban',
        id: 1,
        isActive: true,
        isVerified: true,
        mobile: 9524898941,
        email: 'senthurathiban@gmail.com',
    }
    console.log(user);
})();