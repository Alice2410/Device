import { NavItem } from "../../../interfaces/UserNavItem"
import Navitem from "../NavItem/NavItem"
import styles from "./MainNavigation.module.scss";
import classNames from 'classnames';


const MainNavigation = () => {
  const mainNavItems: NavItem[] = [
    {
      title: 'Доставка',
      key: 'Delivery',
      href: '#',
    },
    {
      title: 'Гарантия',
      key: 'Warranty',
      href: '#',
    },
    {
      title: 'Контакты',
      key: 'Contacts',
      href: '#',
    },
  ]

  return (
    <nav>
      <ul className={classNames(styles.noBulletsList, styles.mainNavigation, styles.navigation_secondFontStyle)}>
        {
          mainNavItems.map((item) => {
            return (
              <Navitem title={item.title} key={item.key} href={item.href}></Navitem>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default MainNavigation;