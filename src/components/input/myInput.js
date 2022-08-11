import React from "react";
import style from './myInput.module.css'

class MyInput extends React.Component {

    render() {
        return (
            <div className={style.wrapper}>
                <label className={style.label}>
                    {this.props.label}:
                </label>
                <input className={style.input} type={this.props.type} placeholder={this.props.placeholder}/>
            </div>
        )
    }
}

export default MyInput