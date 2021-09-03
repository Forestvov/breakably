import React from 'react'
import Link from 'next/link'

import s from './header.module.scss'

import Logo from "../../icons/logo"
import Phone from "../../icons/Phone"

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header_top}>
          <Logo/>
          <div className={s.header_top__right}>
            <Link href="tell:89209994350">
              <a className={s.phone}>
                <Phone/>
                8 920 999 43 50
              </a>
            </Link>
          </div>
        </div>
        <div className={s.header_bottom}>

        </div>
      </div>
    </header>
  )
}

export default Header
