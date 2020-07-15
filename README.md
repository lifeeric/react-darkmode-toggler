# react-darkmode-toggler

![image](darkmode.gif)

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/darkmode.svg)](https://www.npmjs.com/package/darkmode) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
import React, { Component } from 'react'

import DarkModeToggler from 'darkmode'

export default () => {

  // True: Dark mode is on, False: light Mode is on
  const [isDark, setIsChecked] = useState<boolean>(false)

  // toggling button handler
  const darkModeTogger = () => {
    setIsChecked((isDark) => !isDark)
  }

  render() {
    return <DarkToggler size='middle' isDark={isDark} onClick={darkModeTogger} />
  }
}
```

## [](https://github.com/lifeeric)![pushpin](https://github.githubassets.com/images/icons/emoji/unicode/1f4cc.png)  Props

```markdown
| Props   | Types   | Default | Required |
|---------|---------|---------|----------|
| isDark  | boolean | false   | Yes      |
| onClick | func    | null    | yes      |
| size    | string  | middle  | no       |
```


## License

MIT © [](https://github.com/)