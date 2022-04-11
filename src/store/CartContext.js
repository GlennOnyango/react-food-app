import React, { useReducer } from 'react';
import MyContext from './cart-context';


const defaultCartState = {
    items:[],
    totalAmount:0
};
const cartReduce = (state,action)=>{
    if(action.type === "ADD" ){
        const updatedItems = state.items.concat(action.item);
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
  
        return {
            items:updatedItems,
            totalAmount:updatedAmount
        };
    }
    else if(action.type === "REMOVE"){}
    return defaultCartState;
}

const CartContext = props => {

    const [cartState,dispatchAction] = useReducer(cartReduce,defaultCartState);

    const addItemContext = item => {
        dispatchAction({type:"ADD",item:item});
    }
    const removeItemContext = id => {
        dispatchAction({type:"REMOVE",id:id});
    }

    const cartcontext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemContext,
        removeItem: removeItemContext
    }

    return <MyContext.Provider value={cartcontext}>
        {props.children}
    </MyContext.Provider>;
}

export default CartContext;