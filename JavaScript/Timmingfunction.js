let fun=()=>{
    console.log('Hello')
    console.log('.')
}

let num=1
let fun2=()=>{
    console.log(num++)
}

let Reset=()=>{
    num=1;
}

let timer=()=>{
    let value=10;
    let val=setInterval(()=>{
        console.log(value--)
    },1000)

    setTimeout(()=>{
        clearInterval(val)
        console.log("Time Up")
    },10000)
}

