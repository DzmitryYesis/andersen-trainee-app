import React from "react";

class MyButton extends React.Component{

    render() {
        return (
            <div>
                <button>
                    {this.props.name}
                </button>
            </div>
        )
    }
}

export default MyButton