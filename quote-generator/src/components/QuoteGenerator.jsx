import React from "react";
import { useState, useEffect } from "react";
import "./quotegeneratorstyles.css";

function QuoteGenerator() {
  const [quote, setQuote] = useState(" ");
  const [author, setAuthor] = useState(" ");

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((result) => result.json())
      .then((quotes) => {
        setQuote(quotes.content);
        setAuthor(quotes.author);
      });
  }, []);

  let generateQuote = () => {
    fetch("http://api.quotable.io/random")
      .then((result) => result.json())
      .then((quotes) => {
        setQuote(quotes.content);
        setAuthor(quotes.author);
      });
  };
  return (
    <div>
      <div className="quote">
        <h2>{quote}</h2>
        <small>--{author}</small>
      </div>
      <br />
      <button onClick={generateQuote}>Generate Quote</button>
    </div>
  );
}

export default QuoteGenerator;
