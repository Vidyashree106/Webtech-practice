let alertmsg=()=>{
    alert('BE CAREFUL')
}
let printname=()=>{
    let user=prompt('Enter your name')
    alert(user)
}

let takeconfirmation=()=>{
    let bool=confirm('Ready for mock?')
    bool ? alert('Welcome') : alert('Moye moye')
}