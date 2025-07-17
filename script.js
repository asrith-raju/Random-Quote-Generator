let quotes =  [
  { quote: "Honesty is the first chapter in the book of wisdom.", author: "Thomas Jefferson" },
  { quote: "What you do not want done to yourself, do not do to others.", author: "Confucius" },
  { quote: "Do the right thing, even when no one is looking.", author: "Unknown" },
  { quote: "The only thing necessary for the triumph of evil is for good men to do nothing.", author: "Edmund Burke" },
  { quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
  { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { quote: "Integrity is doing the right thing, even when no one is watching.", author: "C.S. Lewis" },
  { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { quote: "Respect is earned. Honesty is appreciated. Trust is gained. Loyalty is returned.", author: "Unknown" },
  { quote: "In a world where you can be anything, be kind.", author: "Jennifer Dukes Lee" },
  { quote: "Wisdom begins in wonder.", author: "Socrates" },
  { quote: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
  { quote: "Success without integrity is failure.", author: "Richie Norton" },
  { quote: "Character is how you treat those who can do nothing for you.", author: "Johann Wolfgang von Goethe" },
  { quote: "Forgive others, not because they deserve forgiveness, but because you deserve peace.", author: "Jonathan Lockwood Huie" },
  { quote: "Humility is not thinking less of yourself, it’s thinking of yourself less.", author: "C.S. Lewis" },
  { quote: "Every action you take is a vote for the person you wish to become.", author: "James Clear" },
  { quote: "It is never wrong to do the right thing.", author: "Mark Twain" },
  { quote: "Treat people the way you want to be treated.", author: "Golden Rule" },
  { quote: "A man is not finished when he is defeated. He is finished when he quits.", author: "Richard Nixon" }
];
quotetext = document.querySelector(".quo")
authortext = document.querySelector(".authorr")
let randomIndex
function getrandom(){
 return Math.floor(Math.random()*20)
}

let button = document.querySelector(".btn-1")
let button2 = document.querySelector(".btn-2") 
button.addEventListener("click",()=>{
    randomIndex = getrandom(); 
  quotetext.innerText = quotes[randomIndex].quote;
  authortext.innerText = `---${quotes[randomIndex].author}`;

}) 
button2.addEventListener("click",()=>{
 const quote = quotetext.innerText;
  const author = authortext.innerText;
  const fullMessage = `${quote} ${author}`;
  
  navigator.clipboard.writeText(fullMessage).then(() => {
    alert("Quote copied! paste it where you want.");
  }).catch(err => {
    alert("Could not copy text. Try manually.");
    console.error(err);
  });
})