import React from 'react'

import Page from "../components/layouts/Page/Page"
import Cards from "../components/common/Cards/Cards"
import {useStore} from "nanostores/react"
import {catalogHome} from "../stores/home/catalogHome"
import ItemCatalog from "../components/common/ItemCatalog/ItemCatalog"




const Home = () => {
  const catalog = useStore(catalogHome)

  return (
    <Page title="Главная страница">

      <Cards title="Каталог" noMore>
        {catalog.map((item, idx) =>
          <ItemCatalog
            key={idx}
            title={item.text}
            text={item.description}
            image={item.img}
          />)}
      </Cards>

      <Cards title="Готовые миксы">

      </Cards>

    </Page>
  )
}

export default Home
