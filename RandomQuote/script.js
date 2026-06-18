const button=document.querySelector("#button");
const quo=document.querySelector("#quo");
const auth=document.querySelector("#auth");
const quotes = [
    {
      quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "Stay hungry, stay foolish.",
      author: "Steve Jobs"
    },
    {
      quote: "The future depends on what you do today.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Dream big and dare to fail.",
      author: "Norman Vaughan"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "The harder you work for something, the greater you'll feel when you achieve it.",
      author: "Unknown"
    },
    {
      quote: "Push yourself because no one else is going to do it for you.",
      author: "Unknown"
    },
    {
      quote: "Great things never come from comfort zones.",
      author: "Unknown"
    },
    {
      quote: "Your limitation—it's only your imagination.",
      author: "Unknown"
    },
    {
      quote: "Opportunities don't happen. You create them.",
      author: "Chris Grosser"
    },
    {
      quote: "If you want to achieve greatness stop asking for permission.",
      author: "Unknown"
    },
    {
      quote: "Do something today that your future self will thank you for.",
      author: "Sean Patrick Flanery"
    },
    {
      quote: "Little things make big days.",
      author: "Unknown"
    },
    {
      quote: "It's going to be hard, but hard does not mean impossible.",
      author: "Unknown"
    },
    {
      quote: "Don't stop when you're tired. Stop when you're done.",
      author: "Unknown"
    },
    {
      quote: "Wake up with determination. Go to bed with satisfaction.",
      author: "Unknown"
    },
    {
      quote: "The key to success is to focus on goals, not obstacles.",
      author: "Unknown"
    },
    {
      quote: "Consistency is what transforms average into excellence.",
      author: "Unknown"
    },
    {
      quote: "Every expert was once a beginner.",
      author: "Helen Hayes"
    }
  ];

function randomQuote()
{
 let index=Math.random();
 index*=quotes.length;
 index=Math.floor(index);
 let q=quotes[index].quote;
 let a=quotes[index].author;
 quo.textContent=q;
 auth.textContent=a;
}
button.addEventListener("click",function()
{
randomQuote();

})