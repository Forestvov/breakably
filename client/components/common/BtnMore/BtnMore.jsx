import React from 'react'

import s from './btnMore.module.scss'

const BtnMore = props => {
  return (
    <button className={s.btn}>
      {props.text}
    </button>
  )
}

export default BtnMore
