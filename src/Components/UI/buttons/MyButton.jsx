import React from "react";
import classes from "./MyButton.module.css";

export default function MyButton({children, addClass, ...props}) {
    const buttonClasses = [classes.myBtn]
    if (addClass) {
        buttonClasses.push(addClass)
    }
    return (
        <button {...props} className={buttonClasses.join(' ')}>
            {children}
        </button>
    )
}
