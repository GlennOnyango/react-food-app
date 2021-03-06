import React from 'react';
import Input from './Input';
import classes from "./MealItemForm.module.css";

const MealItemForm = props=>{

    const addItem = event => {
        event.preventDefault();
    }

    return <div className={classes.form} onSubmit={addItem}>
        <Input label="Amount" input={{
            id:'amount_'+props.id,
            type:'number',
            min: '1',
            max:'5',
            step:'1',
            defaultValue:'1'
        
        }}/>
        <button>+ Add</button>
    </div>
}
export default MealItemForm;