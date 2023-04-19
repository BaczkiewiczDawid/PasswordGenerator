import React, { useState, useContext, createContext } from 'react';

export const PasswordContext = createContext({});

const PasswordOptionsContext = ({ children }: any) => {
    const initialState = [
        {
          name: 'lowerCaseLetters',
          text: 'Include Lowercase Letters',
          value: 'abcdefghijklmnopqrstuwxyz',
          isChecked: true,
        },
        {
          name: 'upperCaseLetters',
          text: 'Include Upeercase Letters',
          value: 'ABCDEFGHIJKLMNOPQRSTUWXYZ',
          isChecked: false,
        },
        {
          name: 'symbols',
          text: 'Include Symbols',
          value: '!@#$%^&*',
          isChecked: false,
        },
        {
          name: 'numbers',
          text: 'Include Numbers',
          value: '0123456789',
          isChecked: false,
        }
      ]

    const [passwordOptions, setPasswordOptions] = useState(initialState);
    const [selectedPatterns, setSelectedPatterns] = useState<string[]>(['lowerCaseLetters']);

  return (
    <PasswordContext.Provider value={{ passwordOptions, setPasswordOptions, selectedPatterns, setSelectedPatterns }}>
        {children}
    </PasswordContext.Provider>
  )
}

export default PasswordOptionsContext