import React from "react";
import style from "./Textarea.module.css";

class Textarea extends React.Component {

    render() {
        return (
            <div className={style.wrapper}>
                <label className={style.label}>
                    {this.props.label}:
                </label>
                <textarea className={style.textarea}
                          placeholder={this.props.placeholder}
                          rows={7}/>
            </div>
        );
    }
}

export default Textarea