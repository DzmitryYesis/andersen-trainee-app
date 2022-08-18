import React from "react";
import style from './Input.module.css'

class InputClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.error)
    }

    render() {
        const {error} = this.props
        return (
            <div className={style.wrapper}>
                <label className={style.label}>
                    {this.props.label}:
                </label>
                <input className={style.input} type={this.props.type}
                       placeholder={this.props.placeholder} name={this.props.name}
                       onChange={this.props.onChange} value={this.props.value}/>
                {
                    error && <span>{this.props.error}</span>
                }
            </div>
        )
    }
}

export default InputClass