var myEmail=document.getElementById("myEmail");
var myPass=document.getElementById("myPass");
var MyBtn=document.getElementById("MyBtn");
var errorEmail=document.getElementById("errorEmail");
var errorpass=document.getElementById("errorpass");
var theResult=document.getElementById("theResult");
var indEmail;
var indPass;
var arr;

(function(){
if(localStorage.getItem("user")==null){
    arr=[]
}
else{
    arr=JSON.parse(localStorage.getItem("user"))
}
}())
MyBtn.addEventListener("click",function(){
    if( emailTest()!=true){
        errorEmail.innerHTML="Please Enter correct email using @ and . "
        // errorName.style.color="red"
    }
    else{
        errorEmail.innerHTML=""
        
    }
    if( passTest()!=true){
        errorpass.innerHTML="Please Enter correct password between[5-15] character or number "
        // errorName.style.color="red"
    }
    else{
        errorpass.innerHTML=""
        // errorName.style.color=""
    }

    // IsEmpty()
    myDataEmail()
    // mycheckdata()
    // mycheckdata2()
x()
})




function emailTest(){
    var x=/^[A-z a-z 0-9]{1,}\@[A-Z a-z]{1,}\.[A-Z a-z]/
    var y=x.test(myEmail.value)
    if(y==true){
        return true
    }
    else{
        return false
    }
    }
    function passTest(){
        var x=/^[A-z a-z 0-9]{5,}/
        var y=x.test(myPass.value)
        if(y==true){
            return true
        }
        else{
            return false
        }
        }
        function x(){
            if(myEmail.value=="" || myPass.value==""){
                theResult.innerHTML="All Inputs Are Required";
            }
        }
        var indexName;
        var my_data=JSON.parse(localStorage.getItem("user"));

            function myDataEmail(){
                if(my_data==null && myEmail.value!="" && myPass.value!=""){
                    theResult.innerHTML="This Email or Password not exist,Please sign Up and Login"
                arr.push(0)
                }
                if(my_data==null){
                    theResult.innerHTML="This Email or Password not exist,Please sign Up and Login"
                arr.push(0)
                }
                else{
                    var x=my_data.length;
                    for(var i=0;i<x;i++){
                      if(myEmail.value==my_data[i].yourEmail){
                          indEmail=i;
                          indexName=i
                          // console.log(indEmail);
                          // return true;
                          localStorage.setItem("indexName",""+indexName)
      
                      }
                      if(myPass.value==my_data[i].yourPass){
                          indPass=i;
                          // console.log(indPass);
                         
                      }
                     
                    }
                    indexName=indPass;
                    if(indEmail==indPass && indEmail!=undefined && indPass!=undefined){
                      console.log(indEmail,indPass);
                      window.location="website.html"
                      return true;
                    }
                    if(indEmail!=indPass ){
                      console.log(indEmail,indPass);
                      theResult.innerHTML="Error Email or password"
                      
                    }
                    else if(indEmail==undefined && indPass==undefined && indEmail!="" && indPass!=""){
                      theResult.innerHTML="Error Email or password"
                    }
                }

             
            }
        
        
        
        
        
       