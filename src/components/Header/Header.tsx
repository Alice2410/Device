import React from "react"
import styles from "./Header.module.scss"
import CatalogNavigation from "./CatalogNavigation/CatalogNavigation";
import Logo from "./Logo/Logo";
import MainNavigation from "./MainNavigation.tsx/MainNavigation";
import Search from "./Search/Search";
import UserNavigation from "./UserNavigation/UserNavigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={`${styles.header} ${styles.container}`}>
      <div className={styles.headerBody}>
        <Link to="/">
          <Logo></Logo>
        </Link>
        
        <div className={styles.header__navWrapper}>
          <Search></Search>
          <UserNavigation></UserNavigation>
        </div>
        <div className={`${styles.header__navWrapper}`}>
          <CatalogNavigation></CatalogNavigation>
          <MainNavigation></MainNavigation>
        </div>
      </div>
    </header>
  )
}

export default Header;