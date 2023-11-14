// {     #####Const#####
    {
        const v1 = "string";
        {
        console.log("V1",v1)
        const v2="string 2";
        console.log("V2",v2)
        // const v1="string3"; Error we connot reasign in const
        
        }
        // console.log("V1",v2)Error we cannot define const
        console.log("V1",v1)
        console.log("--------------------------------")
        }
// {     #####Let#####
{
    let v1 = "string";
    {
    // console.log("V1",v1) Error
    let v2="string 2";
    console.log("V2",v2)
    let v1="string3"; 
    
    }
    // console.log("V1",v2)Error we cannot define const
    console.log("V1",v1)
    console.log("-----------------------------")
    
    }

    {
        // #####var#####
        var v1 = "string";
        {
        console.log("V1",v1) 
        var v2="string 2";
        console.log("V2",v2)
        var v1="string3"; 
        
        }
        console.log("V1",v1)
        console.log("V2",v2)
        console.log("-----------------------------")
        
        }
{
    
        // ------------Type Conversion------
        var a="1";
        var b=1;
    var c=a+b;
    console.log(c)
}
{
    
    // ------------Type Conversion------
    var a="1";
    var b=1;
var c=a-b;
console.log(c)
}
{
    
    // ------------Type Conversion------
    var a=1;
    var b=1;
var c=a+b;
console.log(c)
}
// -------templete string-------
let name = 'idrees';

let last="Khan";

console.log(`my name is ${name} last name is: ${last}`
);
// Function with Parameters
console.log("----------------------------------")
function greet(name) {
    console.log(`Hello,${name} hi`);
  }
  
  // Calling the Function with an Argument
  greet ("Noman");

  console.log("-----------------------------")
  // Higher-order function that accepts a callback function
function higherOrderFunction(callback) {
    console.log("Inside the higher-order function");
    // Execute the callback function passed as an argument
    callback();
  }
  
  // Callback function passed to the higher-order function
  function callbackFunction() {
    console.log("This is the callback function");
  }
  
  // Calling the higher-order function and passing the callback function as an argument
  higherOrderFunction(callbackFunction);
  
  