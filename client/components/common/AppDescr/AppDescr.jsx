import React from 'react'

import s from './appDescr.module.scss'
import CheckBox from "../CheckBox/CheckBox"

const AppDescr = () => {
  return (
    <div className={s.appDescr}>
      <div className="container">
        <div className={s.appDescr_inner}>
          <div className={s.appDescr_left}>
            <div className={s.appDescr_title}>
              Пожертвуйте на благо проекта
            </div>
            <form className={s.appDescr_form}>
              <div className={s.appDescr_checkboxs}>
                <CheckBox lightText text="Единоразовая выплата"/>
                <CheckBox lightText checked text="Ежемесячные выплаты"/>
              </div>
              <div className={s.appDescr_inputs}>
                <input type="text" placeholder="Введите сумму"/>
                <button>Пожертвовать</button>
              </div>
            </form>
          </div>
          <div className={s.appDescr_right}>
            <img width={300} height={400} src={'/image/phone.png'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppDescr
