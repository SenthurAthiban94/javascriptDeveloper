// Type Assertions just lies the type while Type manipulations could be used to actually change the type.

/*
 *  keyof Type
 *  typeof Type
 *  indexed Access
 *  conditioned Type
 *  mapped Type
*/

// keyof
interface account{
    username: string,
    userId: number,
    age: number,
    isActivated: boolean
}
// new Type with all keys of account
type ac = keyof account;
let users: ac = 'username';

// typeof
const testUser = {
    username: 'test',
    userId: 1234,
    age: 27,
    isActivated: true
}
// new Type with all types based on the value of testUser
type testAccount = typeof testUser;




// Indexed Access
type USER = {
    username: string,
    userId: number,
    age: number,
    isActivated: boolean
}
interface Library {
    user: USER | Array<USER>
    book: string,
    author: string,
}
// new Type based on the type of user field index under Library type
type userType = Library['user'];
let IndexedUser: userType;


// Conditioned Types
type mobile = number;
type email = string;
const m:mobile = 8667704728;
const e:email = 'senthur@gmail.com';

type contactInfo<T extends mobile | email>=T extends mobile ? mobile : email;
let mobileInfo:contactInfo<mobile>;
mobileInfo = 8667704728;
let emailInfo:contactInfo<email>;
emailInfo = 'senthurathiban@gmail.com';

// Mapped Types
type gender = 'MALE' | 'FEMALE' | 'TRANSGENDER';

type GenderList = {
    [k in gender]: number
}

let genderSelection:GenderList;