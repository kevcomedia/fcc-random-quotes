"use strict";

var quotes = function Quotes() {
  "use strict";

  function createQuoteObject(quote, author, link) {
    return { quote: quote, author: author, link: link };
  }

  var quoteList = [createQuoteObject("This is awesome! I would nominate this for @P1xt's forum quote of the day, but I am not @P1xt, so I can't.", "JacksonBates", "http://forum.freecodecamp.com/t/25371/17"), createQuoteObject("the animation is amaze-balls.", "pietrosparks", "http://forum.freecodecamp.com/t/25371/17"), createQuoteObject("Programming and computer science in general is all about math", "jrepe", "http://forum.freecodecamp.com/t/24862/15"), createQuoteObject("The coding Gods are cruel and fickle in their appreciation of our worship.", "JacksonBates", "http://forum.freecodecamp.com/t/21811/6"), createQuoteObject("it's still totally worth it for every self-labeled programmer to learn data structures & algorithms whether it's through a free MOOC or a book, or whatever else", "astv99", "http://forum.freecodecamp.com/t/23471/18"), createQuoteObject("Yup. If you are on my team and you commit code without semicolons* I will personally light your cubicle on fire.", "ArielLeslie", "http://forum.freecodecamp.com/t/22719/8")];

  var current = {};

  return {
    newRandom: function newRandom() {
      var index = Math.floor(Math.random() * quoteList.length);
      current = quoteList[index];
      return current;
    },
    getCurrent: function getCurrent() {
      return current;
    }
  };
}();

function renderQuote() {
  "use strict";

  var _quotes$newRandom = quotes.newRandom();

  var quote = _quotes$newRandom.quote;
  var author = _quotes$newRandom.author;
  var link = _quotes$newRandom.link;

  var quoteElem = document.getElementById("quote");
  var authorElem = document.getElementById("author");
  var linkElem = document.getElementById("link");

  quoteElem.innerHTML = quote;
  authorElem.innerHTML = author;
  linkElem.href = link;
}

window.onload = function (event) {
  return renderQuote();
};
document.getElementById("newQuote").onclick = function (event) {
  return renderQuote();
};
document.getElementById("tweet").onclick = function tweet() {
  "use strict";

  var _quotes$getCurrent = quotes.getCurrent();

  var quote = _quotes$getCurrent.quote;
  var author = _quotes$getCurrent.author;

  window.open("https://twitter.com/intent/tweet?text=" + quote + " —" + author);
};