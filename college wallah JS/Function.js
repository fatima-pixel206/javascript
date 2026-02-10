
    let n1=prompt("Enter First number ");
    let number=parseInt(n1);
    let n2=prompt("Enter First number ");
    let number2=parseInt(n2);
 let add=sum(number,number2);
   console.log(" sum is :",add);
   let cut=sub(number,number2);
   console.log(" sub is :",cut);
   console.log(" table of First number is :")
table(number);



function sum( a,b){
  
    sum=a+b;
return sum;
 }
 function sub( a,b){
  
    sub=a-b;
return sub;
 } function table(a){
    for(let i=1; i<=10;i++){
        console.log(i+"x",a,"=",i*a);
    }
 }
