// Sort method
//1) Direct sort method
let arr = [5, 2, 9, 1, 5];
console.log(arr);
let x=arr.sort();
console.log(x);
console.log(x.reverse());

//-----------------------------------------------------------------------------------------------------------------//

//2) Sort method 
let arr1 = [5, 2, 9, 1, 5];
console.log(arr1);
let x1=arr1.sort((a,b)=>{
    return a-b
});
console.log(x1);

//-----------------------------------------------------------------------------------------------------------------//

// push method()
let arr2=[10,20,30]
console.log(arr2);
arr2.push('Hi',true)
console.log(arr2);
console.log(arr2.length);

//-----------------------------------------------------------------------------------------------------------------//

// unshift method()
let arr3=[10,20,30]
console.log(arr3);
arr3.unshift('Bye',false)
console.log(arr3);
console.log(arr3.length);

//-----------------------------------------------------------------------------------------------------------------//

// pop method() and shift method()
let arr4=[10,'hi',true,false,200,'bye']
console.log(arr4);
let y=arr4.pop()
console.log(y);
let z=arr4.shift()
console.log(arr4);
console.log(z);

//-----------------------------------------------------------------------------------------------------------------//

// Splice method()
let arr5=[10,20,30,40,50]
console.log(arr5);
let x2=arr5.splice(1,2)
console.log(arr5);
console.log(x2);

//-----------------------------------------------------------------------------------------------------------------//

let arr6=[10,20,30,40,50]
console.log(arr6);
arr6.splice(3,0,'new1','new2')
console.log(arr6);

//-----------------------------------------------------------------------------------------------------------------//

let arr7=[10,20,30,40,50]
console.log(arr7);
arr7.splice(2,2,'hi')
console.log(arr7);

//-----------------------------------------------------------------------------------------------------------------//

// Slice method()
let arr8=[10,20,30,40,50]
console.log(arr8.slice(1,4));
console.log(arr8);

//-----------------------------------------------------------------------------------------------------------------//

//indexOf() and lastIndexOf()
let arr9=['yellow','red','blue','green','red']
console.log(arr9);
console.log(arr9.indexOf('red'));
console.log(arr9.lastIndexOf('red'));
console.log(arr9.indexOf('gray'));

//-----------------------------------------------------------------------------------------------------------------//

//includes() method
let arr10=['yellow','red','blue','green','red']
console.log(arr10);
console.log(arr10.includes('red'));
console.log(arr10.includes('gray'));

//-----------------------------------------------------------------------------------------------------------------//

//join() method
let arr11=['I','love','JavaScript']
console.log(arr11);
console.log(arr11.join());
console.log(arr11.join(' '));

//-----------------------------------------------------------------------------------------------------------------//

//split() method
let str='I love JavaScript'
console.log(str);
console.log(str.split());
console.log(str.split(' '));    
console.log(str.split(''));

//-----------------------------------------------------------------------------------------------------------------//

