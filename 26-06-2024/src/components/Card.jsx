import React from "react";
import "./Card.css";

function Cards(props) {
  const { title, content, userId } = props;

  let cardColorClass = "";
  if (userId % 3 === 0) {
    cardColorClass = "card-yellow";
  } else if (userId % 3 === 1) {
    cardColorClass = "card-purple";
  } else {
    cardColorClass = "card-blue";
  }

  return (
    <article className={`card ${cardColorClass}`}>
      <span className="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      </span>

      <a href="#">
        <h3 className="title">{title}</h3>
      </a>
      <p className="description">{content}</p>

      <span href="#" className="more-link">
        {userId}
      </span>
    </article>
  );
}

export default Cards;
