import React, {useRef, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import s from './product.module.scss'

import Page from '../../components/layouts/Page/Page'
import Breadcrumbs from "../../components/common/Breadcrumbs/Breadcrumbs"
import DropArrow from "../../components/icons/DropArrow"
import ProductVariation from "../../components/common/ProductVariation/ProductVariation"
import ProductionActions from "../../components/common/ProductionActions/ProductionActions"
import cn from "classnames"
import Cards from "../../components/common/Cards/Cards"
import ProductCard from "../../components/common/ProductCard/ProductCard"
import {Fade} from "react-awesome-reveal"


const variations = [
  {text: '200 г'},
  {text: '400 г'},
  {text: '800 г'},
  {text: '1 кг'},
]

const swiperParamFirst = {
  slidesPerView: 4,
  loop: true,
  navigation: {
    prevEl: `.slider-first-prev`,
    nextEl: `.slider-first-next`,
  },
}

const swiperParamSecond = {
  slidesPerView: 4,
  loop: true,
  navigation: {
    prevEl: `.slider-second-prev`,
    nextEl: `.slider-second-next`,
  },
}

const Product = () => {
  const [selectedVariation, setSelectedVariation] = useState(0)
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <Page>
      <Fade>
        <Breadcrumbs/>
      </Fade>

      <Fade>
        <Link href="/"><a className={s.product__back}><DropArrow/>Назад</a></Link>
      </Fade>

      <Fade>
        <div className={s.product__content}>
          <div className={s.product__top}>
            <div className={s.product__top_left}>
              <Image width={560} height={560} src="/image/productImage/item-main.jpg"/>
            </div>
            <div className={s.product__top_right}>
              <h1 className={s.product__name}>
                PADOVAN OVOMIX <br/> GOLD ROSSO
              </h1>
              <p className={s.product__descr}>
                Дополнительный пюреобразный пигментирующий корм, для птенцов с красным оперением.
                Отлично подходит для увеличения поступления питательных веществ на особенных этапах жизни зерноядных
                птиц
                (при линьке и размножении), а также в периоды, когда животное испытывает стресс.
              </p>
              <ProductVariation
                selectedVariation={selectedVariation}
                setSelectedVariation={setSelectedVariation}
                variations={variations}
              />
              <div className={s.product__price}>
                228 руб.
              </div>
              <ProductionActions/>
            </div>
          </div>

          <div className={s.product__bottom}>
            <div className={s.product__bottom_item}>
              <div className={s.product__bottom_title}>
                Виды птиц, для которых подойдет данный товар
              </div>

              <div className={s.product__bottom_slider_wrapper}>
                <button ref={prevRef} className={cn(s.prev, 'slider-first-prev')}><DropArrow/></button>
                <Swiper
                  {...swiperParamFirst}
                  className={s.product__bottom_slider}
                >
                  <SwiperSlide className={s.product__bottom_slide}>
                    <Image width={100} height={100} src="/image/productImage/small-img-1.jpg"/>
                    <span>Голубь</span>
                  </SwiperSlide>
                  <SwiperSlide className={s.product__bottom_slide}>
                    <Image width={100} height={100} src="/image/productImage/small-img-1.jpg"/>
                    <span>Голубь</span>
                  </SwiperSlide>
                  <SwiperSlide className={s.product__bottom_slide}>
                    <Image width={100} height={100} src="/image/productImage/small-img-1.jpg"/>
                    <span>Голубь</span>
                  </SwiperSlide>
                  <SwiperSlide className={s.product__bottom_slide}>
                    <Image width={100} height={100} src="/image/productImage/small-img-1.jpg"/>
                    <span>Голубь</span>
                  </SwiperSlide>
                  <SwiperSlide className={s.product__bottom_slide}>
                    <Image width={100} height={100} src="/image/productImage/small-img-1.jpg"/>
                    <span>Голубь</span>
                  </SwiperSlide>
                </Swiper>
                <button ref={nextRef} className={cn(s.next, 'slider-first-next')}><DropArrow/></button>
              </div>
            </div>

            <div className={s.product__bottom_item}>
              <div className={s.product__bottom_title}>
                Зерна из которых состоит данный товар
              </div>
              <div className={s.product__bottom_slider_wrapper}>
                <button ref={prevRef} className={cn(s.prev, 'slider-second-prev')}><DropArrow/></button>
                <Swiper
                  {...swiperParamSecond}
                  className={s.product__bottom_slider}
                >
                  <SwiperSlide className={s.product__bottom_slide}>
                    <Image width={100} height={100} src="/image/productImage/small-img-2.jpg"/>
                    <span>Пшено</span>
                  </SwiperSlide>
                  <SwiperSlide className={s.product__bottom_slide}>
                    <Image width={100} height={100} src="/image/productImage/small-img-2.jpg"/>
                    <span>Пшено</span>
                  </SwiperSlide>
                  <SwiperSlide className={s.product__bottom_slide}>
                    <Image width={100} height={100} src="/image/productImage/small-img-2.jpg"/>
                    <span>Пшено</span>
                  </SwiperSlide>
                  <SwiperSlide className={s.product__bottom_slide}>
                    <Image width={100} height={100} src="/image/productImage/small-img-2.jpg"/>
                    <span>Пшено</span>
                  </SwiperSlide>
                  <SwiperSlide className={s.product__bottom_slide}>
                    <Image width={100} height={100} src="/image/productImage/small-img-2.jpg"/>
                    <span>Пшено</span>
                  </SwiperSlide>
                </Swiper>
                <button ref={nextRef} className={cn(s.next, 'slider-second-next')}><DropArrow/></button>
              </div>
            </div>
          </div>

        </div>
      </Fade>

      <div className={s.other__products}>
        <Fade>
          <Cards noMore title="С этим товаром смотрят">
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
        </Fade>

        <Fade>
          <Cards noMore title="С этим товаром покупают">
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
              tag="Скидка"
            />
          </Cards>
        </Fade>
      </div>
    </Page>
  )
}

export default Product
