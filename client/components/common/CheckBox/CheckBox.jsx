import React, {useState} from 'react'
import cn from 'classnames'

import s from './checkBox.module.scss'

const CheckBox = ({text, lightText, checked = false}) => {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <div className={cn(s.checkbox, lightText && s.lightText, isChecked && s.checked)} onClick={() => setIsChecked(!isChecked)}>
      <input value={isChecked} type="checkbox"/>
      <span>{text}</span>
    </div>
  )
}

export default CheckBox
