import React, {useState} from 'react'
import Image from 'next/image'
import Link from "next/link"

import s from './productCard.module.scss'
import ProductVariation from '../ProductVariation/ProductVariation'
import BtnMore from "../BtnMore/BtnMore"
import Cart from "../../icons/Cart"
import cn from "classnames"

const variations = [
  {text: '200 г'},
  {text: '400 г'},
  {text: '800 г'},
  {text: '1 кг'},
]

const ProductCard = props => {
  const [selectedVariation, setSelectedVariation] = useState(0)
  const [inCart, setInCart] = useState(false)

  return (
    <div className={s.item}>
      <div className={s.item_img}>
        <Link href="#">
          <a>
            <Image layout="fill" src={props.img}/>
          </a>
        </Link>
      </div>
      <div className={s.item_title}>
        <Link href="#">
          <a>
            {props.title}
          </a>
        </Link>
      </div>
      <div className={s.item_descr}>
        {props.description}
      </div>
      <div className={s.item_price}>
        {props.price}
      </div>
      <ProductVariation
        selectedVariation={selectedVariation}
        setSelectedVariation={setSelectedVariation}
        variations={variations}/>
      <div className={s.item_actions}>
        <BtnMore text="Подробнее"/>
        <button
          className={cn(s.item_toCart, inCart && s.current)}
          onClick={() => setInCart(true)}>
          <Cart/>
        </button>
      </div>
    </div>
  )
}

export default ProductCard
