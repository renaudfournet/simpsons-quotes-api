import React from "react";
import "./DisplayQuote.css";

function DisplayQuote({ simpsons }) {
  return (
    <figure className="DisplayQuote">
      <img src={simpsons.image} alt={simpsons.character} />
      <figcaption>
        <h4>{simpsons.character}</h4>
        <cite>{simpsons.quote}</cite>
      </figcaption>
    </figure>
  );
}

export default DisplayQuote;
