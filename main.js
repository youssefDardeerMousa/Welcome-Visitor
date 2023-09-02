var  myName=document.getElementById("myName");
 var myEmail=document.getElementById("myEmail");
 var myPass=document.getElementById("myPass");
 var MyBtn=document.getElementById("MyBtn");
var theResult=document.getElementById("theResult");
var errorName=document.getElementById("errorName");
var errorEmail=document.getElementById("errorEmail");
var errorpass=document.getElementById("errorpass");
var x,e;
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
    var myObject={
        yourName:myName.value,
        yourEmail:myEmail.value,
        yourPass:myPass.value
    }
    // empty()
  

   

      
       
        switch(true){
            case checkMail()!=true:
                if(nameTest()==true && emailTest()==true && passTest()==true  &&checkMail()!=true){
        
        
                    arr.push(myObject)
                  
                    theResult.innerHTML="Success"
                    theResult.style.color="green"
                   
                }
                break;
                case checkMail()==true:
                    theResult.innerHTML="This Email Is Already Exist"
                    theResult.style.color="red"
        }
        checkMail()
        // checkMail2()
      
    // nameTest()
    if( nameTest()!=true){
        errorName.innerHTML="Please Enter correct Name"
        // errorName.style.color="red"
    }
    else{
        errorName.innerHTML=""
       
    }
    if( emailTest()!=true){
        errorEmail.innerHTML="Please Enter correct email using @ and . "
        // errorName.style.color="red"
    }
    else{
        errorEmail.innerHTML=""
        errorName.style.color=""
    }
    if( passTest()!=true){
        errorpass.innerHTML="Please Enter correct password between[5-15] character or number "
        // errorName.style.color="red"
    }
    else{
        errorpass.innerHTML=""
        // errorName.style.color=""
    }
    // isEmpty()
    // isNotEmpty()
    localStorage.setItem("user",JSON.stringify(arr))
    // check2();
    
})

function nameTest(){
var x=/^[A-z a-z]{1,}/
var y=x.test(myName.value)
if(y==true){
    return true
}
else{
    return false
}
}
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

// function empty(){
//     if(myName.value=="" && myEmail.value=="" && myPass.value==""){
       
//         return true;
//     }
//     else{
      
//         return false
//     }
// }

    function checkMail(){
        
        for(var i=0;i<arr.length;i++){
            if(myEmail.value==arr[i].yourEmail){
               
              
            
            
                return true;
            }
           

        }
     
    //  console.log(x);
    }
// }
    // const data = localStorage.getItem("user") ; 
    // console.log(data) ; 
    // for( Name in data ){
    //   (Name ?  theResult.innerHTML="this is already exist" : console.log("False")) ; 
    // }
// function final(){
//     if(x==0 && e){
//         theResult.innerHTML="Success"
//     }
//     if(x==)
// }

