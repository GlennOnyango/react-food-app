import React,{ Fragment } from "react/cjs/react.development";
import classes from "./Header.module.css";
import imageMeals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = props=>{

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Glenn Meals</h1>
                <HeaderCartButton Click={props.onShowCart}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={imageMeals} alt="Table of food"/>
            </div>
        </Fragment>
    );
}
export default Header