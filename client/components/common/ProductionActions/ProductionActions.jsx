import React, {useState} from 'react'

import s from './ProductionActions.module.scss'
import Minus from "../../icons/Minus"
import Plus from "../../icons/Plus"

const ProductionActions = () => {
  const [amount, setAmount] = useState(1)

  const incrementHandler = () => {
    setAmount(amount + 1)
  }

  const decrementHandler = () => {
    if (amount !== 1) {
      setAmount(amount - 1)
    }
  }

  return (
    <div>
      <div className={s.counter}>
        <span>Количество:</span>
        <div className={s.input}>
          <button onClick={decrementHandler}><Minus/></button>
          <input max={99} type="text" value={amount}/>
          <button onClick={incrementHandler}><Plus/></button>
        </div>
      </div>

      <div className={s.btns}>
        <button className={s.buy}>Купить</button>
        <button className={s.addToCart}>Добавить в корзину</button>
      </div>
    </div>
  )
}

export default ProductionActions
