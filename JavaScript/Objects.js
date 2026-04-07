console.warn("Objects in JavaScript");
// Objects are a collection of key-value pairs. They are used to store data in a structured way.
// Objects can be created using object literals
// 3 types of creating objects - 1) Direct literals 2) Using new keyword 3) Using constructor function
// 1) Direct literals
// // Syntax: {
//             name 1: value,
//             name 2:value2
//         }
// Example:
let car={
    carname:'BMW',
    carcolor:'red'
}
console.log(car);
console.log(typeof(car));

// Accessing the property from object
// Using dot operator .
console.log(car.carname);

// Using subscript []
console.log(car['carcolor'])

// Destructing
// it is used to unpack the values
// Example:
let person={
    fname:'Vidya',
    lname:'Achar',
    age:23
}

//Without Destructing
console.log(person)
console.log(`${person.fname} ${person.lname} age is ${person.age}`)

// with Destructing
let {fname,lname,age}=person
console.log(`${fname} ${lname} age is ${age}`)

// CRUD Operation
// Create the object
let person1={
    fname1:'Kiran',
    lname1:'J',
    age1:24
}
console.log(person1)

// Read the object
console.log(`${person1.fname1} age is ${person1.age1}`)

// Update the object
let {fname1,lname1,age1}=person1
console.log(`${fname1}${lname1} age is ${age1}`)

// Delete the object
delete person1.lname2
console.log(person1)

// Nested object
// Exemple
let person2={
    fname2:'Vikram',
    lname2:'Vicky',
    age2:25,
    address:{
        streetNo:'#101',
        street:'Deepanjali nagar',
        area:'Bangalore'
    }
}

// Without destructuring
console.log(person2)
console.log(`${person2.fname2} is from ${person2.address.street}`)

// With destructuring
let{fname2,address} =person2
let{area}=address
console.log(`${fname2} is from ${area}`)

//Example 2 using this operator
let p={
    f:'Bossu',
    l:'Baby',
    dob:2000,
    fullname:function(){
        console.log(`My name is ${this.f} ${this.l}`);
    },
    calculateage:function(){
        let age=2026-this.dob
        console.log(`my age is ${age}`)
    }

}
p.fullname()
p.calculateage()