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