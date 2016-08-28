let quotes = (function Quotes() {
  "use strict";
  function createQuoteObject(quote, author, link) {
    return { quote, author, link };
  }
  
  const quoteList = [
    createQuoteObject(
      "This is awesome! I would nominate this for @P1xt's forum quote of the day, but I am not @P1xt, so I can't.",
      "JacksonBates",
      "http://forum.freecodecamp.com/t/25371/17"),
    createQuoteObject(
      "the animation is amaze-balls.",
      "pietrosparks",
      "http://forum.freecodecamp.com/t/25371/17"),
    createQuoteObject(
      "Programming and computer science in general is all about math",
      "jrepe",
      "http://forum.freecodecamp.com/t/24862/15"),
    createQuoteObject(
      "The coding Gods are cruel and fickle in their appreciation of our worship.",
      "JacksonBates",
      "http://forum.freecodecamp.com/t/21811/6"),
    createQuoteObject(
      "it's still totally worth it for every self-labeled programmer to learn data structures & algorithms whether it's through a free MOOC or a book, or whatever else",
      "astv99",
      "http://forum.freecodecamp.com/t/23471/18"),
    createQuoteObject(
      "Yup. If you are on my team and you commit code without semicolons* I will personally light your cubicle on fire.",
      "ArielLeslie",
      "http://forum.freecodecamp.com/t/22719/8")
  ];
  
  let current = {};
  
  return {
    newRandom() {
      let index = Math.floor(Math.random() * quoteList.length);
      current = quoteList[index];
      return current;
    },
    getCurrent() {
      return current;
    }
  };
})();

function renderQuote() {
  "use strict";
  let { quote, author, link } = quotes.newRandom();
  let quoteElem = document.getElementById("quote");
  let authorElem = document.getElementById("author");
  let linkElem = document.getElementById("link");
  
  quoteElem.innerHTML = quote;
  authorElem.innerHTML = author;
  linkElem.href = link;
}

window.onload = event => renderQuote();
document.getElementById("newQuote").onclick = event => renderQuote();
document.getElementById("tweet").onclick = function tweet() {
  "use strict";
  let { quote, author } = quotes.getCurrent();
  window.open(`https://twitter.com/intent/tweet?text=${quote} —${author}`);
}