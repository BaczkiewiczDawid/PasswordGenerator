import React from "react";
import CharacterLengh from "./modules/HomeModule/components/CharacterLength";
import CheckboxContainer from "./modules/HomeModule/components/CheckboxContainer";
import PasswordStrength from "./modules/HomeModule/components/PasswordStrength";
import PasswordGenerate from "./modules/HomeModule/components/PasswordGenerate";
import PasswordOptionsContext from "./modules/HomeModule/context/PasswordOptionsContext";

const App: React.FC = () => (
  <>
    <div className="main">
      <h1 className="main__title">Password Generator</h1>
      <PasswordOptionsContext>
        <CharacterLengh />
        <CheckboxContainer />
        <PasswordStrength />
        <PasswordGenerate />
      </PasswordOptionsContext>
    </div>
  </>
);

export default App;
