import React from 'react'
import Link from "next/link"

import s from './header.module.scss'

import Logo from "../../icons/logo"
import Phone from "../../icons/Phone"
import Cart from "../../icons/Cart"
import User from "../../icons/User/User"
import Search from "../../icons/Search"
import DropArrow from "../../icons/DropArrow"


const links = [
  {
    text: 'О проекте',
    link: '#'
  },
  {
    text: 'Птицы',
    link: '#'
  },
  {
    text: 'Пожертвования',
    link: '#'
  }
]

const Header = () => {

  return (
    <header className={s.header}>
      <div className="container">

        <div className={s.header_top}>
          <Link href="/">
            <a className={s.logo}><Logo/></a>
          </Link>
          <div className={s.header_top__right}>
            <a className={s.phone} href="tel:89209994350">
              <Phone/>
              8 920 999 43 50
            </a>
            <div className={s.header_top__right__btns}>
              <button className={s.cart}>
                <span>2</span>
                <Cart/>
              </button>
              <button className={s.user}>
                <User/>
              </button>
            </div>
          </div>
        </div>

        <div className={s.header_bottom}>
          <ul className={s.header_bottom__menu}>
            <li><button className={s.catalog}>Каталог <DropArrow/></button></li>
            {links.map((item, idx) => <li key={idx}><Link href={item.link}><a>{item.text}</a></Link></li>)}
          </ul>

          <form className={s.form_search}>
            <input placeholder="Поиск" type="text"/>
            <button><Search/></button>
          </form>

        </div>
      </div>
    </header>
  )
}

export default Header
