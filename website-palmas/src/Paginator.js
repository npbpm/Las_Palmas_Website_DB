import React from "react";
import "./styles/PaginatorStyle.css";

const Paginator = ({ dataLength, activeIndex }) => {
  let dots = [];
  let classes = "";
  for (let index = 0; index < dataLength; index++) {
    classes = activeIndex === index ? "dot active" : "dot";
    dots.push(<div key={index} className={classes}></div>);
  }

  return (
    <div className="paginator">
      <div className="hr"></div> {/* horizontal rule */}
      {dots.map((dot) => dot)}
    </div>
  );
};

export default Paginator;
