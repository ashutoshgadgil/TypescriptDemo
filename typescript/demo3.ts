function display(...restParam:string[])
{
    console.log(restParam.join(" "));
}

display("Hello");
display("Hello"," Typescript");
display("Hello"," Hi"," Welcome");
display("Hello"," Javascript"," Typescript"," NodeJS");