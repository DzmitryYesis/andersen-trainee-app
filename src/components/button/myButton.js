import React from "react";
import style from './myButton.module.css'

class MyButton extends React.Component{

    render() {
        return (
            <div className={style.wrapper}>
                <button className={style.button}>
                    {this.props.name}
                </button>
            </div>
        )
    }
}

export default MyButton