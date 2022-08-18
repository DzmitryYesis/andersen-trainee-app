import style from "./Input.module.css";
import React from "react";

export const InputFunc = ({label, placeholder, type, onChange, name, value}) => {

    const onChangeState = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    }

    return (
        <div className={style.wrapper}>
            <label className={style.label}>
                {label}:
            </label>
            <input className={style.input} type={type}
                   placeholder={placeholder} name={name} value={value}
                   onChange={onChangeState}/>
        </div>
    )
}