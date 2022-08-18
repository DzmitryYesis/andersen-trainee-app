import style from "src/components/button/Button.module.css";
import React from "react";


export const ButtonFunc = ({name, onClick}) => {
    return (
        <div className={style.wrapper}>
            <button className={style.button} onClick={onClick}>
                {name}
            </button>
        </div>
    )
}