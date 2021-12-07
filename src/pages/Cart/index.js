import React,{useContext} from 'react';
import MyContext from '../../context.manage'
import CartItem from '../../components/CartItem'
import styles from './Cart.module.css'
function Cart(props) {
  const {cart} = useContext(MyContext);

  return (
    <div className={styles.container}>
      { cart.line_items?
      (cart.line_items.map(item =>(
        <CartItem key={item.id} item={item}/>
      )))
      :<>loading....</>
      }
     
    </div>
  );
}

export default Cart;