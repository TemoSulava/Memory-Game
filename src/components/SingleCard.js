import React from "react";
import "./SingleCard.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {

  const handleClick = () => {
    if(!disabled) {
    handleChoice(card);
    }
  }

  return (
    <div>
      <div className='card'>
        <div className={flipped ? 'flipped' : ''}>
          <img className="front" alt="card front" src={card.src} />
          <img
            className="back"
            src="/img/cover.png"
            onClick={handleClick}
            alt="card back"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
