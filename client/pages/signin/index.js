import React from 'react'
import {Fade} from "react-awesome-reveal"
import {useForm} from "react-hook-form"
import Link from "next/link"
import {yupResolver} from "@hookform/resolvers/yup"

import s from './signin.module.scss'

import {SignInSchema} from "../../scripts/validation"

import Page from "../../components/layouts/Page/Page"
import Plus from "../../components/icons/Plus"
import Input from "../../components/common/Input/Input"

const Index = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(SignInSchema)})
	
  const onSubmitHandler = (data) => {
    console.log(data)
  }
	
  return (
    <Page>
      <Fade>
        <form className={s.form} onSubmit={handleSubmit(onSubmitHandler)}>
          <div className={s.top}>
            <h1 className={s.top__tile}>Вход в аккаунт</h1>
            <Link href="/">
              <a className={s.close}><Plus/></a>
            </Link>
          </div>
          <Input name="phone" placeholder="Телефон" errors={errors} register={register} phone required/>
          <Input name="password" placeholder="Пароль" errors={errors} register={register} required/>
          <div className={s.form_btns}>
            <Link href={'/signup'}><a className={s.signup}>Зарегистрироваться</a></Link>
            <button type="submit" className={s.signin}>Войти в аккаунт</button>
          </div>
        </form>
      </Fade>
    </Page>
  )
}

export default Index
