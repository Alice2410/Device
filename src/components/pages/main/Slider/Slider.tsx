import styles from './Slider.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination';
import Slide from '../Slide/Slide'
 
const Slider = () => {
  const sliderItems = [{
    number: '01',
    name: 'Квадрокоптер',
    image: '/assets/img/slider-1.png',
    title: 'Порхает как бабочка, жалит как пчела!',
    description: 'Этот обычный, на первый взгляд, квадрокоптер оснащен мощным лазером, замаскированным под стандартную камеру.',
    paramNames: ['Дальность полета', 'Радиус поражения'],
    paramValues: ['800 м', '50 м']
  },
  {
    number: '02',
    name: 'Фитнес-браслет',
    image: '/assets/img/slider-2.png',
    title: 'Худеем правильно!',
    description: 'Мотивирующие фитнес-браслеты помогут найти в себе силы не пропускать занятия и соблюдать диету.',
    paramNames: ['Без подзарядки'],
    paramValues: ['48 часов']
  },
  {
    number: '03',
    name: 'Селфи-палка',
    image: '/assets/img/slider-3.png',
    title: 'Делай селфи, как Бен Стиллер!',
    description: 'Самая длинная палка для селфи доступна в нашем магазине. Восемь (Восемь, Карл!) метров длиной и весом всего 5 кг.',
    paramNames: ['Длина палки', 'Вес палки', 'Материал'],
    paramValues: ['8,5 м', '5 кг', 'Карбон']
  },
];
  return (
    <>
     <Swiper
      modules={[Navigation, Pagination]}
      navigation={{enabled: true}}
      pagination={{clickable: true}}
      effect='slide'
      speed={800}
      slidesPerView={1}
      loop

      className={styles.swiper}
     >
        {sliderItems.map((item) => {
          return (
            <SwiperSlide key={item.number}>
              <Slide {...item}></Slide>
            </SwiperSlide>
          )
        })}
     </Swiper>
    </>
  )

}

export default Slider;