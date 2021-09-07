import React from 'react'

import s from './productVariation.module.scss'

const ProductVariation = props => {
  return (
    <div className={s.variations}>
      {props.variations.map((item, idx) => <button className={s.variation} key={idx}>{item.text}</button>)}
    </div>
  )
}

export default ProductVariation
