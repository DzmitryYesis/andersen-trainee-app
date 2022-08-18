import style from "./Input.module.css";
import React from "react";

export const InputFunc = ({label, placeholder, type, name, onChange, value}) => {
    return (
        <div className={style.wrapper}>
            <label className={style.label}>
                {label}:
            </label>
            <input className={style.input} type={type}
                   placeholder={placeholder} name={name}
                   onChange={onChange} value={value}/>
        </div>
    )
}