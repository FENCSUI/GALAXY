function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username==="admin" && password==="1234"){
        window.open("page21.html");
    }
    else {
        window.open("page13.html");
    }
}