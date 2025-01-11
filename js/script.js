//Create Quote box elements
var app = document.getElementById("quote-section");

var p = document.createElement("p");

p.setAttribute("class", "quote-style");
app.appendChild(p);

//Sans body
var sans = document.getElementById("sans-body");

//Blasters elements
var gaster1 = document.getElementById("gaster-1");
var gaster2 = document.getElementById("gaster-2");

//Selecting buttons
var buttonQuote = document.getElementById("quote-btn");
var buttonTweet = document.getElementById("tweet-btn");
var buttonFight = document.getElementById("fight-btn");

function getQuote() {
  // API endpoint
  const endpoint = "https://zenquotes.io/api/random";

  // Use fetch to make the GET request
  fetch(endpoint)
    .then((response) => {
      // Check if the response is OK
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Display the quote and author
      const quote = data;
      p.textContent = `"${quote.q}" - ${quote.a}`;
      console.log(quote);
    })
    .catch((error) => {
      // Handle errors
      p.textContent = "Flowey is the responsible :[";
      console.error("Fetch error:", error);
    });
}

//Tweet the quote
function tweetear() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + p.textContent,
    "_blank"
  );
}

//To get the initial quote
getQuote();
shoot();

//Animations events
function miss() {
  sans.classList.toggle("sans-move");
}

//Show gaster blasters

function shoot() {
  gaster1.classList.toggle("shoot-1");
  gaster2.classList.toggle("shoot-2");
}

//Events lisnteners
buttonQuote.addEventListener("click", getQuote);
buttonQuote.addEventListener("click", shoot);
buttonTweet.addEventListener("click", tweetear);
buttonFight.addEventListener("click", miss);