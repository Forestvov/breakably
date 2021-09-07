import React from 'react'
import Image from 'next/image'

import s from './productCard.module.scss'
import ProductVariation from "../ProductVariation/ProductVariation"

const variations = [
  {text: '200 г'},
  {text: '400 г'},
  {text: '800 г'},
  {text: '1 кг'},
]

const ProductCard = props => {
  return (
    <div className={s.item}>
      <div className={s.item_img}>
        <Image layout="fill" src={props.img}/>
      </div>
      <div className={s.item_title}>
        {props.title}
      </div>
      <div className={s.item_descr}>
        {props.description}
      </div>
      <div className={s.item_price}>
        {props.price}
      </div>
      <ProductVariation variations={variations}/>
    </div>
  )
}

export default ProductCard
