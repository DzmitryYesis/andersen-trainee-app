import React from "react";
import style from './Button.module.css'

class Button extends React.Component {

    render() {
        return (
            <div className={style.wrapper}>
                <button className={style.button} onClick={this.props.onClick}>
                    {this.props.name}
                </button>
            </div>
        )
    }
}

export default Button