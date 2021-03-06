import React, {useRef, useState} from 'react'
import {CSSTransition} from "react-transition-group"

import {useOnOutsideClick} from "../../../hooks/useOnOutsideClick"


import s from './User.module.scss'
import {useRouter} from "next/router";

const User = () => {
  const [showPup, setShowPup] = useState(false)
  const elementRef = useRef(null)
	const router = useRouter()
	
  useOnOutsideClick(elementRef, () => {
    setShowPup(false)
  })
	
  return (
    <div className={s.user__inner}>
      <svg onClick={() => setShowPup(true)} width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3465.4999A6.6273 6.6273 0 003.699 7.1474a6.6282 6.6282 0 006.6475 6.6475 6.6273 6.6273 0 006.6475-6.6475A6.6265 6.6265 0 0010.3465.4999zm0 1.875c2.6522 0 4.7725 2.1202 4.7725 4.7725 0 2.6514-2.1207 4.7725-4.7725 4.7725-2.651 0-4.7725-2.1216-4.7725-4.7725 0-2.6518 2.121-4.7725 4.7725-4.7725zm.0001 13.6953c-6.2875 0-9.8462 1.1931-9.8462 4.5738 0 3.3844 3.5745 4.6 9.8462 4.6l.8044-.0069c5.7844-.1011 9.0419-1.334 9.0419-4.5669 0-3.3108-3.4208-4.5461-9.4411-4.5982l-.4052-.0018zm0 1.875c5.2518 0 7.9713.9248 7.9713 2.725 0 1.7891-2.7128 2.6988-7.9713 2.6988-5.2518 0-7.9712-.9248-7.9712-2.725 0-1.7414 2.5667-2.649 7.5503-2.6968l.4209-.002zM22.0048 7.8989c.4747 0 .8669.3526.929.8102l.0085.1273v1.5686h1.6202a.9375.9375 0 01.9375.9375c0 .4746-.3527.8668-.8103.9289l-.1272.0086h-1.6202v1.5689a.9375.9375 0 01-1.8664.1272l-.0086-.1272V12.28H19.45a.9375.9375 0 01-.1272-1.8665l.1272-.0085h1.6173V8.8364a.9375.9375 0 01.9375-.9375z"
          fill={showPup ? '#3FCF5E' : '#333'}/>
      </svg>
			
      <CSSTransition
        in={showPup}
        timeout={{
          enter: 800,
          exit: 800,
        }}
        unmountOnExit
        mountOnEnter
        classNames="popup"
      >
        <div className={s.user__popup} ref={elementRef}>
          <button onClick={() => router.push('/signin')} className={s.signin}>Войти в аккаунт</button>
          <button onClick={() => router.push('/signup')} className={s.signup}>Зарегистрироваться</button>
        </div>
      </CSSTransition>
    </div>
  )
}

export default User
