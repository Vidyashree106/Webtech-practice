document.writeln('<h1>Control Statements</h1')

console.warn('Control statements')
//Control statements - 1)Branching/condition  2)Looping
//Branching/condition
//If
if(true)
{
    console.log('hello');
}
else{
    console.log('bye');
}

//
let rcb='loss'
if(rcb==='won')
{
    console.log('E sala cup namdhe 🏆')
}
else{
    console.log('Next sala cup namdhe 🏆')
}

//WAP to check the number is even or odd
let num=10
if(num%2 === 0){
    console.log(num+' is even number')
}
else{
    console.log(num+' is odd number')
}

//If else ladder
//WAP to check the number is +ve or -ve
let n=0
if(n>0){
    console.log(n+' is +ve number')
}
else if(n<0){
    console.log(n+" is -ve number")
}
else{
    console.log(n+' is either +ve or _ve')
}

//Nested if - if inside another if
//WAP to check the number is even or odd or digit
let n1='a'
if(typeof n1==='number'){
   if(n1%2 == 0){
    console.log(n1+' is even number')
   }
   else{
    console.log(n1+' is')
   }
}
else{
    console.log(n1+' it is not a number')
}

//
let email='abc@gmail.com'
let password='1234567'

if(email==='abc@gmail.com'){
    if(password==='1234567'){
    console.log('welcome')
    }
    else{
        console.error("password is invalid")
    }
}
else{
    console.error("Email is invalid")
}

//Switch case Statement
let signal='red'
switch(signal){
    case 'red':
        console.log('stop');
        break;
    case 'yellow':
        console.log('get ready');
        break;
    case 'green':
        console.log('go');
        break;
    default:
        console.log('invalid signal');
}