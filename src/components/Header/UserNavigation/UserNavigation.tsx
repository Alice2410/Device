import { NavItem } from "../../../interfaces/UserNavItem"
import Cart from "../Cart/Cart"
import Navitem from "../NavItem/NavItem"
import styles from "./UserNavigation.module.scss"
import classNames from 'classnames';


const UserNavigation = () => {
  const userNavigationItems: NavItem[] = [
    {
      title: 'Войти',
      key: 'login',
      href: '#',
      svg: '<svg className="user-icon" aria-hidden="true" focusable="false" width="13" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12h13c-.2-2.6-2.1-4.8-4.7-5.5 1-.6 1.7-1.7 1.7-3C10 1.6 8.4 0 6.5 0S3 1.6 3 3.5c0 1.3.7 2.4 1.7 3C2.1 7.2.2 9.4 0 12Z" fill="#000"/></svg>'
    },
    {
      title: 'Сравнить',
      key: 'compare',
      href: '#',
      svg: '<svg className="compare-icon" aria-hidden="true" focusable="false" width="10" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0H4v12h2V0ZM2 4H0v8h2V4ZM10 3H8v9h2V3Z" fill="#000"/></svg>'
    },
  ]
  return (
    <nav>
      <ul className={classNames(styles.noBulletsList, styles.userNavigation, styles.navigation_firstFontStyle)}>
        { userNavigationItems.map ((item) => {
          return (   
            <Navitem title={item.title} key={item.key} href={item.href} svg={item.svg}></Navitem>
          )}
        )}
        <li>
          <Cart></Cart>
        </li>
      </ul>
    </nav>
    
  )
}

export default UserNavigation;