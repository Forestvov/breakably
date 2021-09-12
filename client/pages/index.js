import React from 'react'

import Page from "../components/layouts/Page/Page"
import Cards from "../components/common/Cards/Cards"
import {useStore} from "nanostores/react"
import {catalogHome} from "../stores/home/catalogHome"
import ItemCatalog from "../components/common/ItemCatalog/ItemCatalog"
import ProductCard from "../components/common/ProductCard/ProductCard"


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
        <ProductCard
          img="/image/productImage/item.jpg"
          title="PADOVAN OVOMIX GOLD ROSSO"
          description="Корм для птиц"
          price="1000"
        />
        <ProductCard
          img="/image/productImage/item.jpg"
          title="PADOVAN OVOMIX GOLD ROSSO"
          description="Корм для птиц"
          price="1000"
        />
        <ProductCard
          img="/image/productImage/item.jpg"
          title="PADOVAN OVOMIX GOLD ROSSO"
          description="Корм для птиц"
          price="1000"
        />
        <ProductCard
          img="/image/productImage/item.jpg"
          title="PADOVAN OVOMIX GOLD ROSSO"
          description="Корм для птиц"
          price="1000"
        />
      </Cards>

      <Cards title="Виды птиц">
        <ItemCatalog
          title="Домовый воробей"
          text="68"
          image="/image/productImage/item2.jpg"
        />
        <ItemCatalog
          title="Домовый воробей"
          text="68"
          image="/image/productImage/item2.jpg"
        />
        <ItemCatalog
          title="Домовый воробей"
          text="68"
          image="/image/productImage/item2.jpg"
        />
        <ItemCatalog
          title="Домовый воробей"
          text="68"
          image="/image/productImage/item2.jpg"
        />
      </Cards>

      <Cards title="Зёрна">
        <ProductCard
          img="/image/productImage/item3.jpg"
          title="Корм для птиц RIO Линька"
          description="для волнистых попугайчиков"
          price="1000"
        />
        <ProductCard
          img="/image/productImage/item3.jpg"
          title="Корм для птиц RIO Линька"
          description="для волнистых попугайчиков"
          price="1000"
        />
        <ProductCard
          img="/image/productImage/item3.jpg"
          title="Корм для птиц RIO Линька"
          description="для волнистых попугайчиков"
          price="1000"
        />
        <ProductCard
          img="/image/productImage/item3.jpg"
          title="Корм для птиц RIO Линька"
          description="для волнистых попугайчиков"
          price="1000"
        />
      </Cards>

      <Cards title="Кормушки">
        <ProductCard
          img="/image/productImage/item4.jpg"
          title='Комплект-агро "Избушка на курьих ножках"'
          description="кормушка малая"
          price="1000"
        />
        <ProductCard
          img="/image/productImage/item4.jpg"
          title='Комплект-агро "Избушка на курьих ножках"'
          description="кормушка малая"
          price="1000"
        />
        <ProductCard
          img="/image/productImage/item4.jpg"
          title='Комплект-агро "Избушка на курьих ножках"'
          description="кормушка малая"
          price="1000"
        />
        <ProductCard
          img="/image/productImage/item4.jpg"
          title='Комплект-агро "Избушка на курьих ножках"'
          description="кормушка малая"
          price="1000"
        />
      </Cards>

    </Page>
  )
}

export default Home
