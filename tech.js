//  var favecolor=prompt(" select your favecolor   ", "1)red)2 green )3 blue "); 

  //  switch(favecolor)  {
  //    case "1" :
  //   case "red":
  //    case "RED" :

  //    document.write("red") ;
  //     break; 

  //     case "2" :
  //        document.write("green") ;
  //     break;
  //     case "3" :
  //        document.write("blue") ;
  //     break;
     
  //     default: 
  //     alert(" color not in the list ")
  //  } 



  // var favecolor=prompt(" select your favecolor   ", "1)red)2 green )3 blue ");  

//     var flag=1;
//     var color;
//    switch(favecolor)  {
//      case "1" :
//     case "red":
//      case "RED" :

//        color="red";
//       break; 

//       case "2" :
//           color="green";
//       break;
//       case "3" :
//             color="blue";
//       break;
     
//       default:  
//       flag=0;
//       alert(" color not in the list ");
//    }  
//    if(flag==1){
//  document.write("your fave color is "  +  color) 

//    };



  //  function addparam ( x=0,y=0){
  
    // x=x==undefined ? 0:x;
    // y= y==undefined ? 0:y;
//   var sum =0 ;
//   sum =x+y;
//   return sum ;


// } 

// var result =addparam (4,3) ; 
// console.log (result);




// var mystr="scwelcome to javascript world!!";

// var newstr= new String ("javascript string object");

// var str= String(" ") 


// console.log (typeof mystr)

// console.log (typeof newstr)


// console.log (typeof str) 

// console.log ( mystr.length) ;


// console.log ( mystr.charAt(0)) ;
// console.log ( mystr.indexOf("j")) ;
// console.log ( mystr.indexOf("sc")) ;
// console.log ( mystr.lastIndexOf("sc")) ; 
// console.log ( mystr.substring(4,12)) ;
// console.log ( mystr.split(" ")) ;  
// console.log ( mystr.replace("sc","_")) ;
// console.log ( mystr.replace(/sc/g,"_"))

// // /pattern /flag // 



// var myArry=[1,2, "abc",,,90,101,[55,"mno",false],"xy"];
// console.log(myArry[0]);
// console.log(myArry[4]);
// console.log(myArry);
// console.log(myArry.length);
// console.log(myArry[7]);
// console.log(myArry[7][0]);
// console.log(myArry[7][1]);
// console.log(myArry[7][2]);
// console.log(myArry[7][3]);
// console.log(myArry[7][4]);
// console.log(myArry[7].length);

// myArry[99]="new value";
// console.log(myArry.length)
// myArry[7][8]=222;
// console.log(myArry[7]);
// console.log(myArry[7].length)  



// var newarr=[1,2,3,6,8,9,27] ; 
// console.log(newarr.join("**"));
// console.log(newarr.pop());
// console.log(newarr.push(28));
// console.log(newarr.unshift(7)); 
// console.log(newarr.shift()); 
// console.log(newarr.reverse()); 
// console.log(newarr.sort(function (a,b){
//   return a-b;
// } ));
  

// var associativeArray=new Array();
// var x="first value"; 
// associativeArray[x]=1000; 
// associativeArray["new elem"]="abc";
// associativeArray["username"]="ali"; 

// for(i in associativeArray) {
 
//   console.log(i+":" +associativeArray[i]);

// }
 


// var myerror  = new Error("cat error");
 
// throw myerror;  

// js Error handling by using try and catch and finally

//  try{
// var myresult=parseInt(prompt("enter value between 10 && 20 ","15"));

// if(myresult<10)
//   throw"less than expect" ;
//   else if (myresult>20)
//     throw new RangeError("out of range");
//  else 
//   alert("value within accepted range"); 

//  console.log(" inside try");
//  }
//  catch(e){ 

//   if(e instanceof RangeError){
//  console.log("this is range error");
//  console.log(e.name);
//   console.log(e.message);

//   }
//   else if(e=="less than expect"){
//   console.log("low")

//   }

//   // type Error
//   // console.logg("catch Error occured");
//     console.log("catch block");

//  }
// finally{
//  console.log("done");
// }

// console.log ("after finally");



 
// onerror=errorHandle; 
// function errorHandle(msg,url,l,col,error){ 
//   console.log(msg);
//     console.log(l);

//   return false;

// }

// var myresult=parseInt(prompt("enter value between 10 && 20 ","15"));

// if(myresult<10)
//   throw"less than expect" ;
//   else if (myresult>20)
//     throw new RangeError("out of range");
//  else 
//   alert("value within accepted range"); 


// console.log ("done");