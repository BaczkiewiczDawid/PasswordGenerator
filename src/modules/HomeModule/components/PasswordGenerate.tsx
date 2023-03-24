import React, { useState } from 'react'

const PasswordGenerate = () => {
  const lowerCaseLetters  = 'abcdefghijklmnopqrstuwxyz';
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';
  const symbols = '!@#$%^&*';
  const numbers = '0123456789';

  let password: string[] = [];
  const passwordLength = 6;

  const generatePassword = () => {
    const a = [lowerCaseLetters, upperCaseLetters, symbols, numbers];
    password = [];

    for (let i = 1; i <= passwordLength; i++) {
      const randomValue = Math.floor(Math.random() * 4);
      const randomized = a[randomValue][Math.floor(Math.random() * a[randomValue].length)]
      password.push(randomized)
    }

    const finalPassword = password.join('')
    console.log(finalPassword)
  }

  return (
    <div>
        <input type="text" />
        <button onClick={generatePassword}>Generate password</button>
    </div>
  )
}

export default PasswordGenerate