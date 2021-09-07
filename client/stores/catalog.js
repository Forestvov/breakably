import {createStore} from 'nanostores'

const initialValue = [
  {
    text: 'Готовые миксы',
    url: '#',
  },
  {
    text: 'Отдельные виды кормов',
    url: '#',
    isMain: true,
    description: '(зерен)',
    img: '/image/catalog/catalog-3.jpg'
  },
  {
    text: 'Кормушки',
    url: '#',
    isMain: true,
    img: '/image/catalog/catalog-1.jpg'
  },
  {
    text: 'Готовые комплекты',
    url: '#',
    isMain: true,
    description: '(смеси кормов)',
    img: '/image/catalog/catalog-2.jpg'
  },
  {
    text: 'Аксессуары и другое',
    url: '#',
  }
]

export const catalog = createStore(() => {
  catalog.set(initialValue)
})