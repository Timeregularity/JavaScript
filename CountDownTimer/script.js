let time=10;
const tim=document.querySelector(".Timer");
const btn=document.querySelector(".btn");

function Timer()
{
    const id=setInterval(()=>
    {
        time=time-1;
        if(time==0)
            {
                alert("Time Out!");
              clearInterval(id);
            }
        
        tim.textContent=time;
        
    },1000);
    
}

