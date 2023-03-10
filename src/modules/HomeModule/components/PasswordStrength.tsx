import React from 'react'

const PasswordStrength = () => {
  return (
    <div className="password">
        <div className="password__header">
          <h2 className="password__title">Strenght</h2>
          <p className="password__subtitle">Low password strength</p>
        </div>
        <div className="password__strength">
          <div className="password__line"></div>
          <div className="password__line"></div>
          <div className="password__line"></div>
          <div className="password__line"></div>
        </div>
      </div>
  )
}

export default PasswordStrength