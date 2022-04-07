import React from 'react';
import classes from './Cart.module.css';

const Cart = props=>{
    const cartItems = <ul>{[{id:'s1',name:'sushi',price:12}].map(
        item=>{
            <li>{item.name}</li>
        }
    )}</ul>;

    return (
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    );
}