

const api_url = "https://api.quotable.io/random"

const quoteDisplay = document.getElementById('quote');
const authorDisplay = document.getElementById('author');
const generateBtn = document.getElementById('gBtn')


async function generate(url){
    let result = await fetch(api_url);
    let data = await result.json();

    let quote = data.content;
    let author = data.author;

    console.log(data);

    quoteDisplay.textContent = quote;
    authorDisplay.textContent = author;
    
}

generateBtn.addEventListener('click', () => {
    generate(api_url);
})
