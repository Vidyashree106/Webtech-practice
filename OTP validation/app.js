let otp;
let getotp=()=>{
    let display=document.getElementById('display')
    let rnum=Math.random()*10000
    otp=Math.floor(rnum);
    (otp>=1000) ? display.innerText=otp : getotp()
}

let validation=(e)=>{
    let show=document.getElementById('show').value
    let val=show;
        if(val==otp){
            msg.style.color='green'
            msg.innerHTML=`validated`
        }else{
            msg.style.color='red'
            msg.innerHTML=`invalid otp`
        }
    }
    