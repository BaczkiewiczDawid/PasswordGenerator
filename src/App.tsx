import React from "react";
import CharacterLengh from "./modules/HomeModule/components/CharacterLengh";
import CheckboxContainer from "./modules/HomeModule/components/CheckboxContainer";

const App: React.FC = () => (
  <>
    <div className="main">
      <h1 className="main__title">Password Generator</h1>
      <CharacterLengh />
      <CheckboxContainer />
    </div>
  </>
);

export default App;
