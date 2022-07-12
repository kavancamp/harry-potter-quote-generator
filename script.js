const quote = document.querySelector(".quote"),
author = document.querySelector(".author .name"),
btn = document.querySelector("button"),
copyBtn = document.querySelector(".copy"),
twitBtn = document.querySelector(".twitter"),
playBtn = document.querySelector(".sound");

genRandomQuote = () => {
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quote.innerText = result.content;
        author.innerText = result.author;
    });
}

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