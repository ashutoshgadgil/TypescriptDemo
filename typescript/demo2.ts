// Function Overloading

function add(num1:number):void;
function add(num1:number,num2:number):void;

function add(num1:any,num2?:any):void
{
    if(arguments.length==1)
    {
        console.log(num1+100);
    }
    if(arguments.length==2)
    {
        console.log(num1+num2);
    }
}

add(10);
add(20,30);