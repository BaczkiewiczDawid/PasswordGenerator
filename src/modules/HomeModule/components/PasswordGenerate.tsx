import React, { useState } from 'react'

const PasswordGenerate = () => {
  const lowerCaseLetters  = 'abcdefghijklmnopqrstuwxyz';
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';
  const symbols = '!@#$%^&*';
  const numbers = '0123456789';

  let password: string[] = [];
  const passwordLength = 6;
  const selectedPatterns: string[] = [lowerCaseLetters];

  selectedPatterns.push(symbols)

  const generatePassword = () => {
    password = [];

    for (let i = 1; i <= passwordLength; i++) {
      const randomValue = Math.floor(Math.random() * selectedPatterns.length);
      const randomized = selectedPatterns[randomValue][Math.floor(Math.random() * selectedPatterns[randomValue].length)]
      password.push(randomized)
    }

    const finalPassword = password.join('')
    console.log(finalPassword)
    console.log(selectedPatterns)
  }

  return (
    <div>
        <input type="text" />
        <button onClick={generatePassword}>Generate password</button>
    </div>
  )
}

export default PasswordGenerate