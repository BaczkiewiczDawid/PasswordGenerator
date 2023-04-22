import React, { useContext } from "react";
import { PasswordContext } from "../context/PasswordOptionsContext";

const CharacterLength = () => {
  const { passwordLength, setPasswordLength }: any = useContext(PasswordContext);
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
