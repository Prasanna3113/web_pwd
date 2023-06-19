var s="";
document.getElementById("fun").onclick=function(){
    if(password.value==password1.value){
        alert("Account created Successfully");
    }
    else{
        alert("password's didn't match");
        return false;
    }
}