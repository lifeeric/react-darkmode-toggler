import * as React from 'react'
import { FaSun } from 'react-icons/fa'
import { BsMoon } from 'react-icons/bs'
// import 'learning-npm-package/dist/index.css'
import classes from './styles.module.css'

interface Props {
  onClick: () => void
  isDark?: 'light' | 'dark'
  size?: 'middle' | 'small'
  border?: string
}

export const DarkModeToggler: React.FC<Props> = ({
  onClick,
  isDark,
  size,
  border
}: Props) => {
  const toggleCSS = [classes.toggle]
  size === 'small' && toggleCSS.push(classes.small)
  isDark === 'dark' && toggleCSS.push(classes.dark)

  return (
    <div
      style={{ borderColor: isDark === 'dark' ? border : '' }}
      className={toggleCSS.join(' ')}
      onClick={onClick}
    >
      <div className={classes.toggle__slide} />
      <span className={classes.toggle__sunlight}>
        <FaSun />
      </span>
      <span className={classes.toggle__moon}>
        <BsMoon />
      </span>
    </div>
  )
}
