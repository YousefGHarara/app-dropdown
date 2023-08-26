import React, { useState } from "react";
import "./dropDown.css";

const DropDown = () => {
  const [isAction, setIsAction] = useState(false);
  const [selected, setSelected] = useState("Choose one");
  const options = ["React", "Next", "Node", "Vue"];

  return (
    <div className="dropDown">
      <div className="select" onClick={() => setIsAction(!isAction)}>
        <div className="selected">{selected}</div>
        <div className="caret" style={isAction ? {transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}}></div>
      </div>

      {isAction && (
        <>
          <ul className="content">
            {options.map((option, i) => (
              <li key={i} onClick={(e) => {
                setIsAction(false);
                setSelected(e.target.textContent)
                console.log(e.target.textContent)
              }}>{option}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default DropDown;
