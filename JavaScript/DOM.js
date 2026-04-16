let changetext=()=>{
    let ele=document.getElementById('head')
    ele.style.color='Blue'
    ele.innerText='Welcome to JAVA SCRIPT'
    ele.style.background='yellow'
    ele.style.border="solid 2px black"
    ele.style.textAlign='center'   
}

let Applycolor=()=>{
    let ele=document.getElementsByTagName('h2')
    ele[0].style.cssText=`background:orange;
    color:white;`
    ele[1].style.cssText=`color:blue;`
    ele[2].style.cssText=`background:green;
    color:white;`
}

let boxes=()=>{
    let b=document.getElementsByClassName('box')
    b[0].innerText='Welcome'
    b[1].innerHTML='<i>Hello</i>'
    b[1].style.cssText=`color:blue;background:pink`
    b[2].style.cssText=`border-radius:50%;background:yellow`
}

let changeimage=()=>{
    let image=document.getElementsByTagName('img')[0];
    image.src='./images/lion.jpg'
}

let onoff=()=>{
    let btn=document.getElementById('btn')
    if(btn.innerText==='ON'){
        btn.innerText='OFF'
        btn.style.background='red'
    }else{
        btn.innerText='ON'
        btn.style.background='green'
    }
}
