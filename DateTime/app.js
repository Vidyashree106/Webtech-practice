let digitalclock=()=>{
    let elem=document.getElementsByTagName('h2')
    let datobj=new Date()

    let curdate=datobj.toLocaleDateString()
    let curtime=datobj.toLocaleTimeString()
   

    elem[0].innerText=curdate
    elem[1].innerText=curtime 

    let curday=datobj.getDay()
    switch(curday){
        case 1 : elem[2].innerText='Monday'
        break;
    }          
}

