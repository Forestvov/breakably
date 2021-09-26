import React from 'react'
import SwiperCore, {Navigation} from "swiper"

import '../styles/global.scss'

SwiperCore.use([Navigation])

const App = ({Component, pageProps}) => {
  return <Component {...pageProps} />
}

export default App
