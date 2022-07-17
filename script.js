const quote = document.querySelector(".quote"),
author = document.querySelector(".author .name"),
btn = document.querySelector("button"),
copyBtn = document.querySelector(".copy"),
twitBtn = document.querySelector(".twitter"),
playBtn = document.querySelector(".sound");

const generateQuote = function() {

    const quotes = [
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        author: "Albus Dumbledore"
    },
    {
        quote: "It is impossible to manufacture or imitate love",
        author: "Horace Slughorn"
    },
    {
        quote: "Being different isn't a bad thing. I mean that you are brave enough to be yourself.",
        author: "Luna Lovegood"
    },
    {
        quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        author: "Sirius Black"
    },
    {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        author: "Arthur Weasley"
    },
    {
        quote: "Every human life is worth the same, and worth saving.",
        author: "Kingsley Shacklebolt"
    },
    {
        quote: "Have a biscuit, Potter.",
        author: "Minerva McGonagall"
    },
    {
        quote: "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
        author: "Albus Dumbledore"
    },
    {
        quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
        author: "Dobby"
    }
]; 
    let arrayIndex = Math.floor(Math.random() * quotes.length);
        quote.innerText = quotes[arrayIndex].quote;
        author.innerText = quotes[arrayIndex].author;
    //document.getElementById("quote").innerHTML = quotes[arrayIndex].quote;
    //document.getElementById("author").innerHTML = quotes[arrayIndex].author;
} 
generateQuote()

genRandomQuote = () => {
    generateQuote();
        console.log(generateQuote());
        
    };

playBtn.addEventListener("click", () => {
    let vocate = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`); //text to speech api
    speechSynthesis.speak(vocate); 
    //speak method that 'plays' the text
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quote.innerText);
    //copies on click - writeText writes to clipboard
});

twitBtn.addEventListener("click", () => {
    let tweetURL = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
    window.open(tweetURL, "_blank");
});

btn.addEventListener("click", genRandomQuote);




