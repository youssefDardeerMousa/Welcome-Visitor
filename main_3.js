var MyBtn=document.getElementById("MyBtn");
var h1=document.getElementById("h1")
var indEmail;
var indPass;
MyBtn.addEventListener("click",function(){
    window.location="index.html"
})
          var indexName=Number(localStorage.getItem("indexName"))
    var user=JSON.parse(localStorage.getItem("user"))
    console.log(user);
          h1.innerHTML="Welcome "+user[indexName].yourName






 