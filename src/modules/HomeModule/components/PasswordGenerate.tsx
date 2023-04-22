import React, { useContext } from 'react';
import { PasswordContext } from '../context/PasswordOptionsContext';
import { PasswordOptions } from '../types/types';

const PasswordGenerate = () => {
  const pattern: string[] = [];

  const { passwordOptions, selectedPatterns, passwordLength }: any = useContext(PasswordContext)

  let password: string[] = [];

  const generatePassword = () => {
    password = [];

    selectedPatterns.forEach((el: string) => {
      pattern.push(passwordOptions.find((x: PasswordOptions) => x.name === el).value)
    })

    for (let i = 1; i <= passwordLength; i++) {
      const randomValue = Math.floor(Math.random() * selectedPatterns.length);
      const randomized = pattern[randomValue][Math.floor(Math.random() * selectedPatterns[randomValue].length)]
      password.push(randomized)
    }

    const finalPassword = password.join('')


    console.log(finalPassword)


    console.log(pattern)
  }

  return (
    <div>
        <input type="text" />
        <button onClick={generatePassword}>Generate password</button>
    </div>
  )
}

export default PasswordGenerate