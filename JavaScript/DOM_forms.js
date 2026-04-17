let handleInput=(e)=>{
    e.preventDefault()
    let printname=document.getElementById('printname')
    let fname=e.target[0].value
    let lname=e.target[1].value
     let place=e.target[2].value
    let dob=e.target[3].value
    let dateObj=new Date()
    let age =dateObj.getFullYear()-dob.slice(0,4)
   
    
    printname.innerText=`My name is ${fname} ${lname} & age is ${age} living in ${place}`
}