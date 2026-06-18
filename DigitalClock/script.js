const Time=document.querySelector("#Time");
const da=document.querySelector("#Date");
const days = [
    
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
function time()
{
    let now=new Date();
    let date=now.getDate();
    let month=now.getMonth();
    let year=now.getFullYear();
    let day=now.getDay();
    let hours=now.getHours();
    let seconds=now.getSeconds();
    let min=now.getMinutes();
    console.log(date);
    console.log(month);
    console.log(year);
    console.log(day);
    console.log(hours);
    console.log(min);
    console.log(seconds);
    Time.textContent=`${hours}:${min}:${seconds}`;
    da.textContent=`${date} ${months[month]} ${year}      ${days[day]}`;
};
setInterval(time,1000);

