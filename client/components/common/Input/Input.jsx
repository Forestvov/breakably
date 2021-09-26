import React from 'react'
import cn from "classnames"
import InputMask from 'react-input-mask'

import s from './Input.module.scss'

const Input = ({name, register, errors, placeholder, type = 'text', required, phone}) => {
  return (
    phone
      ? <InputMask mask="+7 (999) 999-99-99" {...register(name, {required})}>
        {(inputProps) => (
          <>
            <input
              placeholder={placeholder} type={type}
              className={cn(s.input, errors[name] && s.error)} {...register(name, {required})}
              {...inputProps}
            />
            <p className={s.error__text}>{errors[name]?.message}</p>
          </>
        )}
      </InputMask>
      : <>
        <input
          placeholder={placeholder} type={type}
          className={cn(s.input, errors[name] && s.error)} {...register(name, {required})} />
        <p className={s.error__text}>{errors[name]?.message}</p>
      </>
  )
}

export default Input