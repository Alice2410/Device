import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { NavItem } from "../../../interfaces/UserNavItem"
import Navitem from "../NavItem/NavItem"
import styles from "./CatalogNavigation.module.scss"
import classNames from 'classnames';


const CatalogNavigation = () => {
  const catalogNavOpen = useRef(false);
  const [catalogNavState, setCatalogNavState] = useState(catalogNavOpen.current);
  

  function handleCatalogButton () { 
    catalogNavOpen.current = !catalogNavOpen.current;
    setCatalogNavState(catalogNavOpen.current);
  }

  const catalogItems: NavItem[] = [
    {
      title: 'Виртуальная реальность',
      key: 'VR',
      href: '#',
    },
    {
      title: 'Моноподы для селыи',
      key: 'Monopods',
      href: '#',
    },
    {
      title: 'Экшн-камеры',
      key: 'Cameras',
      href: '#',
    },
    {
      title: 'Фитнес-браслеты',
      key: 'Bracelets',
      href: '#',
    },
    {
      title: 'Умные часы',
      key: 'Clocks',
      href: '#',
    },
    {
      title: 'Квадракоптеры',
      key: 'Drons',
      href: '#',
    },
  ] 

  return(
    <div className={styles.catalog}>
      <Link className={classNames(styles.catalog_link, styles.navigation_secondFontStyle)} to="catalog">Катлог товаров</Link>
      <button className={classNames(styles.catalog_button, {[styles.catalog_button__open]: catalogNavState})} onClick={handleCatalogButton}>
        <span className={styles.visuallyHidden}>Открыть каталог товаров</span>
      </button>
      <div className={classNames({[styles.visuallyHidden]: !catalogNavOpen.current, [styles.catalog_list__container]: catalogNavOpen.current})}>
        <ul className={classNames(styles.noBulletsList, styles.catalog_list)}>
          {
            catalogItems.map((item) => <Navitem key={item.key} title={item.title} href={item.href}></Navitem>)
          }
        </ul>
      </div>
    </div>
  )
}

export default CatalogNavigation;