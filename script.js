const quoteText = document.querySelector(".quote"),
btn = document.querySelector("button");


genRandomQuote = () => {
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
    });
}

btn.addEventListener("click", genRandomQuote);