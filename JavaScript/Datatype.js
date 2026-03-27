document.writeln("<h1>Datatypes</h1>")

//todo : primitive datatype
// todo : Number
let a = 10
console.log(a)
console.log(typeof a);

let b = 10.12
console.log(b)
console.log(typeof(b));

// using number inbuilt function
let n1 = Number(100)
console.log(n1)
console.log(typeof(n1));

let n2 = Number('dinga')
console.log(n2)
console.log(typeof(n2));

let n3 = Number(true)
console.log(n3)
console.log(typeof(n3));

let n4 = Number()
console.log(n4)
console.log(typeof(n4));

//todo : String
let s = "hii"
console.log(s)
console.log(typeof(s))

// using string inbuilt function
let s1 = String("Hello")
console.log(s1)
console.log(typeof(s1));

let s2 = String(100)
console.log(s2)
console.log(typeof(s2));

let s3 = String(true)
console.log(s3)
console.log(typeof(s3));

//todo : Boolen
let b1 = true
console.log(b1)
console.log(typeof(b1));

let b2 = Boolean(0)
console.log(b2)
console.log(typeof(b2));

let b3 = Boolean('Dinga')
console.log(b3)
console.log(typeof(b3));

//todo : Bigint - large number end with "n"
let num = 1000007327638723678n
console.log(num)
console.log(typeof(num));

//todo : Undefined
let d;
console.log(d)
console.log(typeof(d));

let u = undefined;
console.log(u)
console.log(typeof(u));

//todo : Null
let x = null;
console.log(x);
console.log(typeof(x));

//todo : Non-primitive
//todo : funtion
function fun(){
    let a = 10
}
console.log(typeof(fun));

//todo : object
let obj ={
    name : "dinga",
    age : 25
}
console.log(typeof(obj));

//todo : Array
let arr = [10,"hi"]
console.log(typeof(arr));