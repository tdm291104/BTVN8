
document.getElementById("submit").addEventListener("click", Submit)

function Submit() {
    let CheckSubmit = kiemtra();
    if(CheckSubmit)
    {
    alert ("Đăng ký thành công")
    }
}

function kiemtra(){

    let name = document.getElementById("name")
    if(name.value == ""){
        return false
    }

    let email = document.getElementById("email")
    if(email.value == ""){
        return false
    }

    let pws = document.getElementById("pws")
    if(pws.value == ""){
        return false
    }

    return true
}
