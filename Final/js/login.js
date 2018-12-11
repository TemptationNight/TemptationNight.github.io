



function check() {
    var username= document.getElementsByClassName("input1")[0].value;
    var password=document.getElementsByClassName("input2")[0].value;
    if((username==="heyuanhui")&&(password==="hyh971127")){
        window.location.href='about.html';
    }else if(username===""){
        alert("用户名为空");
    }else if(password===""){
        alert("密码为空");
    }else{
        alert("用户名或密码错误");
    }
    return false;
}

