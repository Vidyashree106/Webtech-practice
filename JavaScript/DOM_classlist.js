let box=document.getElementById('box')
let applyred=()=>{
    box.classList.add('red')
    box.classList.remove('yellow')
}
let applyyellow=()=>{
    box.classList.add('yellow')
    box.classList.remove('red')
}


let onoff=()=>{
    let btn=document.getElementById('btn')
    btn.classList.toggle('on')
    btn.classList.toggle('off')
    btn.innerText=(btn.innerText==='ON') ? 'OFF': 'ON'
}

let changecolor=()=>{
    let bton=document.getElementById('bton')
    let color=prompt('Enter a color:')
    if(color){
        document.body.style.background=color
    }     
}