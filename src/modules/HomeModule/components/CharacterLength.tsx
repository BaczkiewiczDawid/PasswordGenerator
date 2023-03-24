import React, { useState, useEffect } from "react";

const CharacterLength = () => {
  const [passwordLength, setPasswordLength] = useState<number>(6);

  const getPasswordLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordLength(e.target.valueAsNumber)
  }

  return (
    <div className="range">
      <div className="range__container">
        <h2 className="range__title">Character Length</h2>
        <h2 className="range__number">{passwordLength}</h2>
      </div>
      <input type="range" defaultValue={passwordLength} onChange={getPasswordLength} min={4} max={16} />
    </div>
  );
};

export default CharacterLength;
