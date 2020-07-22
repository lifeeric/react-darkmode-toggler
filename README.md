# react-darkmode-toggler

![image](https://i.ibb.co/bXQSN4f/dark.gif)

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/darkmode.svg)](https://www.npmjs.com/package/react-darkmode-toggler) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

###### [Demo](https://lifeeric.github.io/react-darkmode-toggler/)

## Install

```bash
npm i react-darkmode-toggler
```

or

```bash
yarn add react-darkmode-toggler
```

## Usage

```tsx
import React, { useState } from 'react'

import { DarkModeToggler } from 'react-darkmode-toggler'

const App = () => {
  const [isDark, setIsDark] = useState<'light' | 'dark'>('light')

  // button toggler
  const darkModeHandler = () => {
    setIsDark(isDark === 'light' ? 'dark' : 'light')
  }

  return (
    <DarkModeToggler
      size='small'
      isDark={isDark}
      onClick={darkModeHandler}
      border='#000'
    />
  )
}
```

## [](https://github.com/lifeeric)![pushpin](https://github.githubassets.com/images/icons/emoji/unicode/1f4cc.png) Props

```markdown
| Props   | Types               | Default | Required |
| ------- | ------------------- | ------- | -------- |
| isDark  | light `or` dark     | 'light' | no       |
| onClick | func                | null    | yes      |
| size    | `middle` or `small` | no      | no       |
| border  | hex color           | #000    | no       |
```

## License

MIT © [](https://github.com/)
