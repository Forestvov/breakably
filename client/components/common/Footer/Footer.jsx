import React from 'react'
import Link from 'next/link'
import cn from "classnames"

import s from './Footer.module.scss'
import Phone from "../../icons/Phone"
import Vkontakte from "../../icons/Vkontakte"
import Instagram from "../../icons/Instagram"

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__inner}>
          <div className={cn(s.footer__col, s.footer__link)}>
            <Link href="/">
              <a>Оплата</a>
            </Link>
            <Link href="/">
              <a>Доставка</a>
            </Link>
          </div>
          <div className={cn(s.footer__col, s.footer__social)}>
            <a href="https://vk.com" rel="noreferrer" target="_blank"><Vkontakte/></a>
            <a href="https://instagram.com" rel="noreferrer" target="_blank"><Instagram/></a>
          </div>
          <div className={cn(s.footer__col, s.footer__phone)}>
            <a href="tel:+79209994350"><Phone/>8 920 999 43 50</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
