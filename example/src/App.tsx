import React from 'react'
import { useState } from 'react'
import { DarkToggler } from 'darkmode'
import './index.css';
const App = () => {
  // True: Dark mode is on, False: light Mode is on
  const [isDark, setIsChecked] = useState<boolean>(false)
  const darkModeTogger = () => {
    setIsChecked((isDark) => !isDark)
  }

  return (
    <div className="container">
      <DarkToggler size='middle' isDark={isDark} onClick={darkModeTogger} border="#000" />
    </div>
  )
}

export default App
