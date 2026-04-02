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

//WAP to print odd number from 50-60 both for loop and while loop using general function with parameter
function oddnum(start,end){
    console.warn(`Odd numbers from ${start} to ${end} are:`)    
    for(let i=start;i<=end;i++){
        if(i%2==1)
        console.log(i);
    }
}
oddnum(50,60)

// WAP to check the even or odd number from 60-70 using both for loop and while loop using general function with parameter
function evenodd(start,end){
    console.warn(`Even and odd numbers from ${start} to ${end} are:`)
    for(let i=start;i<=end;i++){
        if(i%2==0){
            console.log(`${i} is even`)
        }
        else{
            console.log(`${i} is odd`)
        }
    }
}
evenodd(60,70)

