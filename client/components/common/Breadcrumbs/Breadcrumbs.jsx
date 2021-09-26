import React from 'react'
import Link from "next/link"

import s from './Breadcrumbs.module.scss'

const Breadcrumbs = () => {
  return (
    <div>
      <ul className={s.breadcrumbs}>
        <li>Каталог</li>
        <li><Link href={'/'}><a>Готовые миксы</a></Link></li>
        <li>PADOVAN OVOMIX GOLD ROSSO</li>
      </ul>
    </div>
  )
}

export default Breadcrumbs
