import React from "react";
import useFormField from "../../../hooks/useFormField";
import styles from './Search.module.scss'

const Search = () => {
  const productNameField = useFormField('');

  function processSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    console.log('click');
    console.log(e);
    
    
  }

  return(
    <form className={styles.searchForm}>
      <div>
        <label htmlFor="productName">
          <span className={styles.visuallyHidden}>Поиск товара</span>
          <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m15.7 14.3-3.1-3.1C13.5 10 14 8.6 14 7c0-3.9-3.1-7-7-7S0 3.1 0 7s3.1 7 7 7c1.6 0 3-.5 4.2-1.4l3.1 3.1c.2.2.4.3.7.3.6 0 1-.4 1-1 0-.2-.1-.5-.3-.7ZM2 7c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5Z" fill="#000"/></svg>
        </label>
        <input className={`${styles.searchForm_input} ${styles.navigation_firstFontStyle}`} type='text' id="productName" {...productNameField} placeholder='Поиск по сайту'/>
      </div>
      <button className={ (productNameField.value) ? `${styles.show} ${styles.searchForm_button}` : `${styles.hide} ${styles.searchForm_button}`} onClick={processSubmit}>Найти</button>
    </form>
  )
}

export default Search;