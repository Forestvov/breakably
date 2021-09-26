import React from 'react'
import {useRouter} from "next/router"

import s from './btnMore.module.scss'

const BtnMore = ({text, href = '#'}) => {
  const router = useRouter()

  return (
    <button onClick={() => router.push(href)} className={s.btn}>
      {text}
    </button>
  )
}

export default BtnMore
