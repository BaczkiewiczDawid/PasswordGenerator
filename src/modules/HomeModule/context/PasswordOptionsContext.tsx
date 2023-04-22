import React, { useState, createContext } from 'react';
import { PasswordOptions } from '../types/types';

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

    const [passwordOptions, setPasswordOptions] = useState<PasswordOptions[]>(initialState);
    const [selectedPatterns, setSelectedPatterns] = useState<string[]>(['lowerCaseLetters']);
    const [passwordLength, setPasswordLength] = useState<number>(6);

  return (
    <PasswordContext.Provider value={{ passwordOptions, setPasswordOptions, selectedPatterns, setSelectedPatterns, passwordLength, setPasswordLength }}>
        {children}
    </PasswordContext.Provider>
  )
}

export default PasswordOptionsContext