import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import s from './itemCatalog.module.scss'
import BtnMore from '../BtnMore/BtnMore'

const ItemCatalog = props => {
  return (
    <div className={s.item}>
      <div className={s.item_img}>
        <Link href="#">
          <a>
            <Image layout='fill' src={props.image}/>
          </a>
        </Link>
      </div>
      <div className={s.item_title}>
        {props.title}
      </div>
      <p className={s.item_descr}>
        {props.text}
      </p>
      <BtnMore text="Подробнее"/>
    </div>
  )
}

export default ItemCatalog
