import * as React from 'react'
import { useState } from 'react'

import { DarkModeToggler } from 'react-darkmode-toggler'
import 'react-darkmode-toggler/dist/index.css'

const App = () => {
  const [isDark, setIsDark] = useState<'light' | 'dark'>('light')

  // button toggler
  const darkModeHandler = () => {
    setIsDark(isDark === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`container ${isDark === 'dark' && 'dark'}`}>
      <h1>React-DarkMode-Toggler</h1>
      <DarkModeToggler
        size='middle'
        isDark={isDark}
        onClick={darkModeHandler}
        border='#fff'
      />
    </div>
  )
}

export default App
