let input=document.querySelector('input')

let getValue=(e)=>{
    let text=e.target.innerText
    input.value += text
}

let calculate=()=>{
    let res=eval(input.value)
    input.value=res
}
let clearall=()=>{
    input.value=''
}

let clearone=()=>{
    let del=input.value.slice(0,-1)
    input.value=del
}