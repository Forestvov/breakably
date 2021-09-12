import React from 'react'

import s from './cards.module.scss'

import DropArrow from "../../icons/DropArrow"

const Cards = props => {
  return (
    <div className={s.cards}>
      <div className={s.cards_top}>
        <span className={s.cards_title}>
          {props.title}
        </span>
        {!props.noMore &&
        <button className={s.cards_more}>
          Ещё
          {/*<DropArrow/>*/}
        </button>
        }
      </div>
      <div className={s.cards_main}>
        {props.children}
      </div>
    </div>
  )
}

export default Cards
