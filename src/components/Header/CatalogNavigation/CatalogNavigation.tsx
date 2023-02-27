import { useRef, useState } from "react"
import { NavItem } from "../../../interfaces/UserNavItem"
import Navitem from "../NavItem/NavItem"
import styles from "./CatalogNavigation.module.scss"


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
      <a className={`${styles.catalog_link} ${styles.navigation_secondFontStyle}`} href="#">Катлог товаров</a>
      <button className={catalogNavState ? `${styles.catalog_button__open} ${styles.catalog_button}` : `${styles.catalog_button__close} ${styles.catalog_button}`} onClick={handleCatalogButton}>
        <span className={styles.visuallyHidden}>Открыть каталог товаров</span>
      </button>
      <div className={ catalogNavOpen.current ? `${styles.catalog_list__container}` : `${styles.visuallyHidden}`}>
        <ul className={`${styles.noBulletsList} ${styles.catalog_list}`}>
          {
            catalogItems.map((item) => <Navitem key={item.key} title={item.title} href={item.href}></Navitem>)
          }
        </ul>
      </div>
    </div>
  )
}

export default CatalogNavigation;