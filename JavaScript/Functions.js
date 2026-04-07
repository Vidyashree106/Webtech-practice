//Funtions
//Types of function:
        // 1)General
        // 2)Anonymonus
        // 3)Arrow
        // 4)Self invoking
        // 5)Call Back
        // 6)High order

//Function without parameter and without return statement 
console.warn('General function')
console.warn('Function without parameter and without return statement')
function fun(){
    console.log('HELLO')
}
fun() // invoking function or calling function
fun()
console.log(typeof(fun));


function add(){
    let a=100
    let b=200
    let sum= a+b;
    console.log(sum);
}
add()
add()

console.warn('Function with parameter and without return statement ')
function printname(fname){
    console.log('Hello '+fname)
}
printname('Vidya')
printname('Kiru')

//
function pn(fname,lname){
    console.log(`Hello ${fname} ${lname}`)
}
pn('Vidya','kiran')

// WAP to add 2 numbers using general function with parameter
function add2num(n1,n2){
    let res=n1+n2;
    console.log(`${n1} + ${n2} =${res}`)
}
add2num(100,50)
add2num(25,75)

//WAP to print only even number from start to end using general function with parameter
function even(start, end) {
    console.warn(`Even numbers from ${start} to ${end} are:`)
    if (typeof start === 'number' && typeof end === 'number') {
        if (start < end){
            for (let i = start; i <= end; i++) {
                if (i % 2 == 0)
                    console.log(i);
            }
        }
        else{
            console.warn('Invalid Range')
        }
    }
    else{
        console.error('It is not a number')
    }
}
even(20,30)
even(45,55)
even(78,68)
even('a','b')

//WAP to print only odd number start to end using general function with parameter
function odd(start, end) {
    console.warn(`Odd numbers from ${start} to ${end} are:`)
    if (typeof start === 'number' && typeof end === 'number') {
        if (start < end) {
            for (let i = start; i <= end; i++) {
                if (i % 2 == 1)
                    console.log(i);
            }
        }
        else {
            console.warn('Invalid range')
        }
    }
        else{
            console.error('It is not a nuumber')
        }
    }

odd(20,30)
odd(10,20)
odd(30,10)
odd('a','c')

//How to change the default vaalue of parameter
function demo(a=0){
    console.log(a)
}
demo()
demo(100)

//
function sum(a=0,b=0){
    let res=a+b;
    console.log(`${a} + ${b} = ${res}`)
}
sum()
sum(20,30)


// function without parameter and with return statements
function fun2(){
    let a=100
    let b=200
    let sum=a+b
    console.log(sum)
    return `sum of ${a} + ${b} = ${sum}`
}
let res =fun2()
console.log(res);


// function with parameter and return statements
function myname(fname='',lname=''){
    return(`Hello ${fname} ${lname}`);
}
let n1=myname('Dinga','Raja')
console.log(n1)
console.log(myname('Dingi'))

// WAP to check given number even or odd with general function with parameter and return statements
function evenodd(num=Number()){
    if (num%2==0)
    return(`${num} is even`);
else
    return(`${num} is odd`)
}
let n=evenodd(20)
console.log(n);
console.log(evenodd(3))

//OR - using turnary operator
function eo(num2=Number()){
    return(num2%2==0) ? 'Even' :'Odd'
}
let n5=eo(20)
console.log(n5);
console.log(eo(3))

//Anonymous function
console.warn('Anonymous function')
//function with parameter and with return statements
let fun1=function(fname){
    return('Hello '+fname)
}
let r=fun1('Vidya')
console.log(r)

//function without parameter and without return statements
let f1=function(){
    console.log('Hello')
}
f1()

//function with parameter and without return statements
let f2=function(fname=''){
    console.log('Hello '+fname)
}
f2('Kiran')

//function without parameter and with return statements
let f3=function(){
    let fname='Vidya'
    let lname='Achar'
    return `${fname} ${lname}`
}
let r2=f3()
console.log(r2)
console.log(f3())

//Arrow function
console.warn('Arrow function')
//function with parameter and with return statements
let arrow=(a=0,b=0)=>{
    let res = a+b;
    return(`${a} + ${b} = ${res}`);
}
let sum5=arrow(10,20)
console.log(sum5);

//function with parameter and without return statements
let arrow1=(m=0,n=0)=>{
        let o = m+n;
    console.log(`${m} + ${n} = ${o}`);
}
arrow1(100,200)

//function without parameter and without return statements
let arrow2=()=>{
    let e=100
    let f=20
    let g=e+f
    console.log(`${f} + ${f} = ${g}`);
}
arrow2()

//function without parameter and with return statements
let arrow3=()=>{
    let m1=30
    let m2=45
    let op=m1+m2
    return(`${m1} + ${m2} = ${op}`)
}
let op1=arrow3()
console.log(op1)


//Self invoking function
console.warn('Self invoking function')
let x=(function(a,b){
    let sum=a+b
    return `${a} - ${b} = ${sum}`
})(10,20)
console.log(x);

// Call back function
console.warn('Call back function')
let num5=()=>{
    return 300
}
let s=(z,x)=>{
    let res=z+x
    console.log(res);
}
s(num5(),200)

// OR
let num6=()=>{
    return 300
}
let s1=(z1,x1)=>{
    let result=z1()+x1
    console.log(result)
}
s1(num6,600)

// OR
let s2=(z2,x2)=>{       //s2 is a high order function
    let res1=z2()+x2
    console.log(res1);
}
s2(()=>{
    return 200
},200)
