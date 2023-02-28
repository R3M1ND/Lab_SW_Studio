import './BtnComponent.css'
import React from 'react';

class BtnComponent extends React.Component {
    constructor(props) {
        super(props);
        this.value = this.props.value
    }
    onTrigger = () => {
        this.props.parentCallback(this.value)
    }

    render() {
        return (
            <button className="btn-box" onClick={this.onTrigger} >{this.props.name}</button>
        )
    }
}

export default BtnComponent;