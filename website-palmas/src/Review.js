import React, { useContext } from "react";
import "./styles/Review.css";
import { LanguageContext } from "./context/LanguageContext";

function Review(props) {
  const { message, name, evaluation, cardStyle } = props;

  const { language } = useContext(LanguageContext);

  return (
    <div className={`card ${cardStyle}`}>
      <div className="title">
        {language === "spanish" ? '" Opinión Cliente' : '" Customer Review'}
      </div>
      <div className="review">
        <p>{message}</p>
        <h4>
          {language === "spanish" ? `Cliente: ${name}` : `Customer: ${name}`}
        </h4>
      </div>
    </div>
  );
}

export default Review;
