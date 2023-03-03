import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { SwiperSlide } from "swiper/react"
import { SliderItem } from "../../../../interfaces/SliderItem";
import styles from "./Slide.module.scss"


const Slide = (sliderItem: SliderItem) => {
  return(
    <div className={styles.slide_container}>
      <header className={styles.slide_header}>
        <div className={styles.slide_number}>
          {sliderItem.number}
        </div>
      </header>
      <div className={styles.slide_body}>
        <div className={styles.image_container}>
          <img src={sliderItem.image} alt={sliderItem.name} />
        </div>
        <div className={styles.description_container}>
          <p className={styles.description_title}>
            {sliderItem.title}
          </p>
          <p className={styles.description_text}>
            {sliderItem.description}
          </p>
          <table>
            <tbody>
              <tr className={styles.parameter_value}>
                {sliderItem.paramValues.map((value) => <td key={value}>{value}</td>)}
              </tr>
              <tr className={styles.parameter_name}>
              {sliderItem.paramNames.map((name) => <td key={name}>{name}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Slide;