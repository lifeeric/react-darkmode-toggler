import * as React from 'react'
// import 'learning-npm-package/dist/index.css'
import classes from './style.module.css'
require('./index.css')

interface Props {
  onClick: () => void
  isDark?: boolean
  size?: string
}
export const DarkToggler: React.FC<Props> = ({
  onClick,
  isDark = false,
  size
}) => {
  return (
    <div
      className={`${classes.container} ${
        size === 'middle' ? `middle` : classes.small
      }`}
    >
      <label
        className={classes.switch}
        htmlFor='checkbox'
        title='Change color scheme to dark mode'
      >
        <input
          type='checkbox'
          checked={isDark}
          onChange={onClick}
          id='checkbox'
        />
        <div className={`${classes.slider} ${classes.round}`}> </div>
        <div className={isDark ? classes.togglemoon : classes.hide}>🌙</div>
        <div className={isDark ? classes.hide : classes.togglesun}>☀️</div>
      </label>
    </div>
  )
}
