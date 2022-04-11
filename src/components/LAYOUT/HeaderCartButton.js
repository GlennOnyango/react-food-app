import React,{ useContext } from 'react';
import CartIcon from '../CART/CartIcon';
import classes from './HeaderCartButton.module.css';
import MyContext from '../../store/cart-context';

const HeaderCartButton = props=>{

    const ctx = useContext(MyContext);

    const itemNumber = ctx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount;
    },0);

    return <button className={classes.button} onClick={props.Click}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{itemNumber}</span>

    </button>
}
export default HeaderCartButton;