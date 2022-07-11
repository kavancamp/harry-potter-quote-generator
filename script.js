const quoteText = document.querySelector(".quote"),
author = document.querySelector(".author .name"),
btn = document.querySelector("button"),
copyBtn = document.querySelector(".copy"),
snapBtn = document.querySelector(".snapchat"),
soundBtn = document.querySelector(".sound");

genRandomQuote = () => {
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.content;
    });
}

btn.addEventListener("click", genRandomQuote);