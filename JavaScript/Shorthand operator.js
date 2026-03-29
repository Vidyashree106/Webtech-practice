document.writeln('<h1>Shorthand_operator</h1>')

// Shorthand operator
let num=10
console.log(num)

num+=5  //num=num+5
console.log(num)
num*=3  //num=num*3
console.log(num)
num/=10 //num=num/10
console.log(num)

//Unary operator
let a=10
let b=5
let c=a++ + ++b + b-- + a--
console.log(c)

let a1=5
let b1=5
let c1=a++ + a++ + --b + b-- + a++ + --a + ++b + a-- + --b 
console.log(c1)

//Turnary operator
//Syntx:condtion ? statement 1 ; statement 2

let a2=10;
let b2='10';
(a2===b2)?console.log('hello'):console.log('bye');
(a2==b2)?console.log('hello'):console.log('bye')

//Typeof operator
let d=10
console.log(typeof(d));




