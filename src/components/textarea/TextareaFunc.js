import style from "./Textarea.module.css";
import React from "react";


export const TextareaFunc = ({label, placeholder, onChange, name, value, error}) => {

    const onChangeState = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    }

    return (
        <div className={style.wrapper}>
            <label className={style.label}>
                {label}:
            </label>
            <textarea className={style.textarea}
                      placeholder={placeholder}
                      onChange={onChangeState}
                      name={name}
                      value={value}
                      rows={7}/>
            {error ? <span className={style.span}>{error}</span> :
                <div className={style.errorDiv}/>}
        </div>
    )
}