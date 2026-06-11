const original= Math.ceil(Math.random()*2);

let guessed=Number(prompt("enter a number"));
if(guessed==NaN)
{
    alert("Invalid Number");
}
if(guessed===original)
{
    alert("Correct Guess");
}
else{
    alert("incorrect");
}
console.log(original);
