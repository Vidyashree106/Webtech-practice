let generateotp=()=>{
    let display=document.getElementById('display')
    let randomnu=Math.random()*10000;
    let otp=Math.floor(randomnu);
    (otp>=1000)? display.innerText=otp : generateotp()
}