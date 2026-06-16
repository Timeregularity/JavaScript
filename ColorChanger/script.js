const body=document.querySelector("#body")
const red=document.querySelector("#red");
const green=document.querySelector("#green");
const blue=document.querySelector("#blue");

red.addEventListener('click',function(){
    body.style.backgroundColor="red";
});
green.addEventListener('click',function(){
    body.style.backgroundColor="green";
});
blue.addEventListener('click',function(){
    body.style.backgroundColor="blue";
});