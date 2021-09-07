import {createStore} from 'nanostores'

const initialValue = [
  {
    title: 'Готовые миксы',
    more: true,
    items: [
      {
        title: 'PADOVAN OVOMIX GOLD ROSSO',
        description: 'Корм для птиц',
        img: '/image/productImage/item.jpg',
        price: 1000
      }
    ]
  }

]

export const homeProducts = createStore(() => {
  homeProducts.set(initialValue)
})