import React from 'react'
import cn from 'classnames'

import s from './productVariation.module.scss'

const ProductVariation = props => {

  return (
    <div className={s.variations}>
      {props.variations.map((item, idx) =>
        <button
          onClick={() => props.setSelectedVariation(idx)}
          className={cn(s.variation, props.selectedVariation === idx && s.current)}
          key={idx}>
          {item.text}
        </button>)}
    </div>
  )
}

export default ProductVariation
