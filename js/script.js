
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {
    quote: "I'm not sure if I was the first man in space or the last dog.",
    source: "-Yuri Gagarin",
    year: "1961",
  },
  {
    quote: "You know, Hobbes, some days even my lucky rocket ship underpants don't help.",
    source: "-Bill Watterson",
    citation: "Calvin and Hobbes",
  },
  {
    quote: "Only I can change my life, Only I can do it for me.",
    source: "Carol Brunette"
  },
  {
  quote: "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
  source: "Paulo Coelho",
  citation:"The Alchemist",
  year: "1988"}
  ];

  function printQuote() {
    let quote = getRandomQuote();
    let template = `<p class="quote"> ${quote.quote} </p>
    <p class="source"> ${quote.source}`;

    if(quote.citation)
      template += `<span class="citation"> ${quote.citation} </span>`;

    if (quote.year)
      template +=  ` <span class="year"> ${quote.year} </span>`;


    document.getElementById('quote-box').innerHTML = template;

  }

  function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];

  }
