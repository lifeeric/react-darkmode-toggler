import React from 'react'
import { useState } from 'react'
import { DarkToggler } from 'learning-npm-package'
const App = () => {
  // True: Dark mode is on, False: light Mode is on
  const [isDark, setIsChecked] = useState<boolean>(false)
  const darkModeTogger = () => {
    setIsChecked((isDark) => !isDark)
  }

  return (
    <>
      <DarkToggler size="small" isDark={isDark} onClick={darkModeTogger} />
      <div style={{ background: isDark ? '#000' : '#fff' }}>
        <h1 style={{ color: isDark ? '#fff' : '#000' }}>Hello</h1>
      </div>
    </>
  )
}

export default App
