# react-darkmode-toggler

![image](https://i.ibb.co/28G6dL7/darkmode.gif)

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
import React, { Component } from 'react'

import { DarkToggler } from "react-darkmode-toggler";


export default () => {

  // True: Dark mode is on, False: light Mode is on
  const [isDark, setIsChecked] = useState<boolean>(false)

  // toggling button handler
  const darkModeTogger = () => {
    setIsChecked((isDark) => !isDark)
  }

  return <DarkToggler size='small' isDark={isDark} onClick={darkModeTogger} />
}
```

## [](https://github.com/lifeeric)![pushpin](https://github.githubassets.com/images/icons/emoji/unicode/1f4cc.png) Props

```markdown
| Props   | Types   | Default | Required |
| ------- | ------- | ------- | -------- |
| isDark  | boolean | false   | Yes      |
| onClick | func    | null    | yes      |
| size    | string  | middle  | no       |
| border  | string  | #000    | no       |
```

## License

MIT © [](https://github.com/)
