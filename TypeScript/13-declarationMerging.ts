interface person {
    firstName: string,
    lastName: string,
}

interface person {
    age:number,
}

interface person {
    gender: 'Male' | 'Female' | 'Transgender'
}

// Now Person Interface is been merged.

// Similiarly Namespace is also been merged!!

namespace A {
    export interface X {
        firstName: string,
        lastName: string,
    }
};

namespace A {
    export interface Y {
        age:number
    }
};

let employee:A.X = {
    firstName:'senthur',
    lastName:'athiban'
}

let employeeAge:A.Y = {
    age:27
}
