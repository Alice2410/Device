import Categories from '../pages/main/Categories/Categories';
import Slider from '../pages/main/Slider/Slider';
import MainTabs from '../pages/main/Tabs/MainTabs';
import styles from './MainContainer.module.scss';

const MainContainer = () => {
  return(
    <>
        <Slider></Slider>
        <Categories></Categories>
        <MainTabs></MainTabs>
    </>
  )
}

export default MainContainer;