import React, { useState, useContext } from 'react';
import { PasswordContext } from '../context/PasswordOptionsContext'

const PasswordGenerate = () => {
  const lowerCaseLetters  = 'abcdefghijklmnopqrstuwxyz';
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';
  const symbols = '!@#$%^&*';
  const numbers = '0123456789';

  // const [pattern, setPattern] = useState('');
  const pattern: any[] = [];

  const { passwordOptions, setPasswordOptions, selectedPatterns }: any = useContext(PasswordContext)

  let password: string[] = [];
  const passwordLength = 6;

  const generatePassword = () => {
    password = [];

    selectedPatterns.forEach((el: any) => {
      pattern.push(passwordOptions.find((x: any) => x.name === el).value)
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