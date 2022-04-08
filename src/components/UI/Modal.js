import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props=>{
    return <div className={classes.backdrop} onClick={props.closeModal}/>
}

const ModalOverlay = props=>{
    return <div className={classes.modal}>
        {props.children}
    </div>
}

const portaloverlays = document.getElementById("overlays");
const Modal = props=>{
    return <Fragment>
    {ReactDom.createPortal(<Backdrop closeModal={props.closeModal}/>,portaloverlays)}
    {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portaloverlays)}
    </Fragment>
}
export default Modal;