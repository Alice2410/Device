import { NavItem } from "../../../interfaces/UserNavItem";
import SVGIcon from "../SVGIcon/SVGIcon";
import styles from "./NavItem.module.scss"

const Navitem = (item: NavItem) => {
  return (
    <li>
      { item.svg && <div className={styles.navSvg_container}>
                      <SVGIcon svg={item.svg}></SVGIcon>
                    </div>}
      <a className={styles.navigationLink} href={item.href}>{item.title}</a>
    </li>
  )
}

export default Navitem;