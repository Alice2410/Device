import Categories from '../pages/main/Categories/Categories';
import Slider from '../pages/main/Slider/Slider';
import styles from './MainContainer.module.scss';

const MainContainer = () => {
  return(
    <>
        <Slider></Slider>
        <Categories></Categories>
    </>
  )
}

export default MainContainer;