import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = props=>{
    const cartItems = <ul className={classes['cart-items']} >{[{id:'s1',name:'sushi',price:12}].map(
        item=>{
            return <li key={item.id}>{item.name}</li>
        }
    )}</ul>;

    return (
        <Modal closeModal={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}
export default Cart;