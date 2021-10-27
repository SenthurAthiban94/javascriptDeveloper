enum Gender {
    Male='male',
    Female='female',
    Transgender='transgender'
}

interface address {
    name: string,
    addressLine1: string,
    addressLine2: string,
    city: string,
    pincode: number,
    state: string,
    country: string,
}

interface signup {
    username: string,
    password: string,
    email?: string,
    gender?: Gender,
    age?: number,
    addresses?: address[],
}

// Required fields given
let user: signup = {
    username: 'senthur',
    password: 'test',
}

// Utility Function Partials - makes fields optional
let Partialuser: Partial<signup> = {}

// Utility Function Required - makes all fields required
let requiredUser: Required<signup> = {
    username:'senthur',
    password: 'test',
    email: 't@gmail.com',
    gender: Gender.male,
    age: 27,
    addresses: []
}

// Utility Function Required - makes all fields required
let readOnlyUser: Readonly<signup> = {
    username: 'senthur',
    password: 'test',
    email: 'test@gmail.com'
}
// cannot modifiy these fields as it is readonly
// readOnlyUser.email='test';

// Utility Function Record - makes a seperate record with key and values
type UserName = string;
let recordUser: Record<UserName, signup> = {
    'Senthur Athiban': {
        username:'senthurathiban',
        password:'test'
    }
}

// Utility Function Pick - makes selected keys seperated from provided type
type filteredProfile = Pick<signup, 'username' | 'age' | 'gender'>;

// let myProfile :filteredProfile = {
//     username: 'senthur'
// };
// let myProfile :filteredProfile = {
//     username: 'senthur'
//      email:'', // throws error only picked fields will be available.
// };
let myProfile :filteredProfile = {
    username: 'senthur',
    age:27,
    gender: Gender.female
};

// Utility Function Omit - Omits the field selected
type omitedFields = Omit<signup, 'email' | 'age' | 'gender' | 'username' | 'password'>;
let addresses :omitedFields = {
    addresses:[]
}

// Utility Function Exclude - excludes the type when 
type excludedFields = Exclude<signup | string | number | boolean, signup>;
let remainingType :excludedFields = 'test';
// Throws error
// let signupVar :excludedFields = {
//     username: 'test',
//     password: 'hello'
// };