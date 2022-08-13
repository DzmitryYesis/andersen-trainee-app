import React from "react";
import style from './Input.module.css'

class Input extends React.Component {

    render() {
        return (
            <div className={style.wrapper}>
                <label className={style.label}>
                    {this.props.label}:
                </label>
                <input className={style.input} type={this.props.type}
                       placeholder={this.props.placeholder} ref={this.props.name}
                       onChange={this.props.onChange} value={this.props.value}/>
                <span>{this.props.error}</span>
            </div>
        )
    }
}

export default Input