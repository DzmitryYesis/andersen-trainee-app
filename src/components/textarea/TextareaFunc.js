import style from "src/components/textarea/Textarea.module.css";
import React from "react";


export const TextareaFunc = ({label, placeholder}) => {
    return (
        <div className={style.wrapper}>
            <label className={style.label}>
                {label}:
            </label>
            <textarea className={style.textarea}
                      placeholder={placeholder}
                      rows={7}/>
        </div>
    )
}