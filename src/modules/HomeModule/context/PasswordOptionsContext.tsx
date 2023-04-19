import React, { useState, useContext, createContext } from 'react';

export const PasswordContext = createContext({});

const PasswordOptionsContext = ({ children }: any) => {
    const initialState = [
        {
          name: 'lowerCaseLetters',
          text: 'Include Lowercase Letters',
          isChecked: true,
        },
        {
          name: 'upperCaseLetters',
          text: 'Include Upeercase Letters',
          isChecked: false,
        },
        {
          name: 'symbols',
          text: 'Include Symbols',
          isChecked: false,
        },
        {
          name: 'numbers',
          text: 'Include Numbers',
          isChecked: false,
        }
      ]

    const [passwordOptions, setPasswordOptions] = useState(initialState);

  return (
    <PasswordContext.Provider value={{ passwordOptions, setPasswordOptions }}>
        {children}
    </PasswordContext.Provider>
  )
}

export default PasswordOptionsContext