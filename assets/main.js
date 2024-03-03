
const userName = document.getElementById("name")
const userEmail = document.getElementById("email")
const userPws = document.getElementById("pws")

function validateName(){
    if(userName.value === ""){
        userName.classList.add("loi")
        return false
    }else{
        userName.classList.remove("loi")
        return true
    }
}

function validateEmail(){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailPattern.test(userEmail.value)){
        userEmail.classList.add("loi")
        return false
    }else if(userEmail.value === ""){
        userEmail.classList.add("loi")
        return false
    }else{
        userEmail.classList.remove("loi")
        return true
    }
}

function validatePws(){
    if(userPws.value === ""){
        userPws.classList.add("loi")
        return false
    }else{
        userPws.classList.remove("loi")
        return true
    }
}

function validateForm(){
    let check = true;

    if (!validateName()) check = false
    if (!validateEmail()) check = false
    if (!validatePws()) check = false

    return check
}

document.getElementById("submit").addEventListener("click", Submit)

function Submit() {
    let CheckSubmit = validateForm();
    if(CheckSubmit)
    {
    alert ("Đăng ký thành công")
    }
}