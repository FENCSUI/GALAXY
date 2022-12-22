function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="user"){
        window.open("page21.html")
    }
    else{
        window.open("page13.html") 
    }
}