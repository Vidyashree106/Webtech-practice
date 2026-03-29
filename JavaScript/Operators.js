document.writeln("<h1>Operators</h1>")

// Arithemetic operartor(+,-,*,/,%)
console.warn('Arithemetic operator')
console.log(10+20)
console.log("10"+20)
console.log(20-10)
console.log("20"-10)
console.log(10+'a')
console.log(10-'a')
console.log(10+true)
console.log(10+'true')
console.log(10-'true')
console.log(10+true-'a')
console.log(10-true+'a')
console.log(10+'true'-1)
console.log(true+10-false+'10')
console.log(true+'10'-false+10)
console.log(true+10+'false'+10-5)
console.log('3'+'3'-'3')
console.log(true+1)
console.log(undefined+1)
console.log(NaN+1)
console.log(NaN+'1')
console.log(undefined+1+NaN)
console.log(NaN+'a')

console.warn('Arithemetic operartos using expression')
console.log(10+5*2/2-5)
console.log(10+2*5/2-3)
console.log(25-10+5*2/5+3)
console.log(10+(true+3)*3+4-true)
console.log(25+2+'0'+(true*3)+20+(true+1-false)+(5+true))

//Realational operators
console.warn('Realational operartors')
console.log(10>5)
console.log(10<5)
console.log(10>=5)
console.log(10<=5)
console.log(10==5)
console.log(10!=5)

console.warn('Equaltity operator')
console.log(100==100)
console.log(100=='100')
console.log(true==1)
console.log(true!=1)

//Strictly equality operator
console.warn('Strict equality operator')
console.log(100===100)
console.log(100==='100')
console.log(true===1)

//Logical operator - && ||
console.warn('Logical operator && ||')
console.log(true||false)
console.log(true||true)
console.log(false||false)

console.log(10=='10')&&(true===1)||(10===10)

//Bitwise operator -& |
console.warn('Bitwise operator')
console.log(5&1)
console.log(5|1)

//Assignment operator =
let a=10