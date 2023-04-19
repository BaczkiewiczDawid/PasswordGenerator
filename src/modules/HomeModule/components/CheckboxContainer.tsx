import React, { useState, useEffect, useContext } from 'react'
import { CheckboxTypes } from '../types/types';
import {PasswordContext} from '../context/PasswordOptionsContext'

const CheckboxContainer = () => {

  const [selectedPatterns, setSelectedPatterns] = useState<string[]>(['lowerCaseLetters']);

  const { passwordOptions, setPasswordOptions }: any = useContext(PasswordContext)

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const findCheckbox = (checkbox: CheckboxTypes) => {
      return checkbox.name === e.target.value
    }

    const findedCheckbox = passwordOptions.find(findCheckbox)

    const newState = passwordOptions.map((obj: any) => {
      if (obj.name === findedCheckbox?.name) {
        const isChecked = findedCheckbox.isChecked;

        return {...obj, isChecked: !isChecked};
      }

      return obj;
    })

    setPasswordOptions(newState)
  }

  useEffect(() => {
    passwordOptions.forEach((el: any) => {
      if (el.isChecked) {
        if (!selectedPatterns.includes(el.name)) {
          setSelectedPatterns((prevState) => [
            ...prevState,
            el.name
          ])
        }
      } else {
        if (selectedPatterns.includes(el.name)) {
          selectedPatterns.splice(selectedPatterns.indexOf(el.name), 1)
        }
      }
    })
  }, [passwordOptions])

  const show = () => {
    console.log(selectedPatterns)
  }

  return (
    <div className="section">
      {passwordOptions.map((el: any) => {
        return (
          <div key={el.name} className="section__row">
            <input name={el.name} value={el.name} checked={el.isChecked} onChange={handleCheckboxChange} type="checkbox" className="section__checkbox" />
            <p>{el.text}</p>
          </div>
        )
      })}
      <button onClick={show}>Show</button>
    </div>
  )
}

export default CheckboxContainer