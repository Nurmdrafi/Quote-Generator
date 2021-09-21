const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a random quote
  const quote = apiQuotes[Math.trunc(Math.random() * apiQuotes.length) + 1];
  // Check if Author field is blank and replace it with 'Unknown'
  if (quote.author === []) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  // Check Quote length
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.text;
  authorText.textContent = quote.author;
}

/* // Get data from local
const quote = localQuotes[Math.trunc(Math.random() * apiQuotes.length) + 1];
*/

// Get Quotes From API
async function getQuotes() {
  const apiURL = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank"); // open new window with Tweet
}
// New Quote
newQuoteBtn.addEventListener("click", getQuotes);
// Tweet Button
twitterBtn.addEventListener("click", tweetQuote);

// On load
window.addEventListener('load', getQuotes)

// getQuotes()
