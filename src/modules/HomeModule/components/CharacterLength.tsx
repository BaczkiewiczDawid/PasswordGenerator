import React, { useState } from "react";

const CharacterLength = () => {
  const [passwordLength, setPasswordLength] = useState<number>(6);
  const minLength = 4;
  const maxLength = 16;

  const getPasswordLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordLength(e.target.valueAsNumber)
  }

  return (
    <div className="range">
      <div className="range__container">
        <h2 className="range__title">Character Length</h2>
        <h2 className="range__number">{passwordLength}</h2>
      </div>
      <input type="range" defaultValue={passwordLength} onChange={getPasswordLength} min={minLength} max={maxLength} />
    </div>
  );
};

export default CharacterLength;
