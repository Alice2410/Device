import { Link } from 'react-router-dom';
import { CategoryItem } from '../../../../interfaces/CategoryItem';
import SVGIcon from '../../../Common/SVGIcon/SVGIcon';
import styles from './CategoryLink.module.scss';

const CategoryLink = (categorieItem: CategoryItem) => {
  return(
    <Link className={styles.link} to={`catalog?category=${categorieItem.link}`}>
      <div className={styles.image}>
        <SVGIcon svg={categorieItem.icon}></SVGIcon>
      </div>
      <p className={styles.title}>{categorieItem.title}</p>
    </Link>
  )
}

export default CategoryLink;