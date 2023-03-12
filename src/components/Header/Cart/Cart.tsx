import styles from './Cart.module.scss';
import classNames from 'classnames';

const Cart = () => {
  function processClick() {
    console.log('cart click');
    
  }

  return(
    <div className={styles.cart_container}>
      <svg aria-hidden="true" focusable="false" width="31" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m30.3 7-3.5.2-3.2-4.9c-.1-.2-.4-.3-.6-.3-.2 0-.5.1-.6.3l-3.2 4.9h-3.5c-.4 0-.7.3-.7.7v.2l1.9 6.8c.2.7.7 1.1 1.4 1.1h9.4c.7 0 1.2-.4 1.4-1.1L31 8v-.2c0-.4-.3-.8-.7-.8ZM23 3.9l2.2 3.2h-4.3L23 3.9Z" fill="#000"/><circle cx="10.5" cy="10.5" r="10.5" fill="#fff"/></svg>
      <span className={styles.cart_itemNumber}>2</span>
      <button className={classNames(styles.cart_button, styles.navigation_firstFontStyle)} onClick={processClick}>Корзина</button>
    </div>
  )
}

export default Cart;