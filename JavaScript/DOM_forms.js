let handleInput = (e) => {
    e.preventDefault()
    let printname = document.getElementById('printname')
    let fname = e.target[0].value
    let lname = e.target[1].value
    let place = e.target[2].value
    let dob = e.target[3].value
    let dateObj = new Date()
    let age = dateObj.getFullYear() - dob.slice(0, 4)


    printname.innerText = `My name is ${fname} ${lname} & age is ${age} living in ${place}`
}


let Validation = (e) => {
    e.preventDefault()
    let err = document.querySelector('.err')
    let emailfeild = e.target[0]

    if (emailfeild.value === "" || emailfeild.value === null) {
        emailfeild.style.border = 'solid 5px red'
        err.innerHTML = `Email field is empty`
    } else {
        alert('welcome')
    }
}

let loginpage = (e) => {
    e.preventDefault()
    let msg = document.querySelector('.msg')

    let credentials = {
        email: 'admin123@gmail.com',
        password: 'admin123'
    }

    let { email, password } = credentials

    let emailfeild = e.target[0]
    let pswdfield = e.target[1]

    emailfeild.style.border=''
    pswdfield.style.border=''
    msg.innerHTML=''

    if (emailfeild.value === email) {
        if (pswdfield.value === password) {
            window.location.href='./welcome.html'
        } else {
            pswdfield.style.border = 'solid 5px red'
            msg.innerHTML = `Wrong Password`
        }
    } else {
        emailfeild.style.border = 'solid 5px red'
        msg.innerHTML = `Wrong Email`
    }

}

