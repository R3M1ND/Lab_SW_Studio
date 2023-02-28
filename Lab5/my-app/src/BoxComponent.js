import './BoxComponent.css'
import BtnVote from './BtnComponent'
import React from 'react';

class BoxComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vote: "MIN",
        };
    }
    handleCallback = (child) => {
        if (this.state.vote === 0) {
            this.setState({ vote: "MIN" });
        }
        else if (this.state.vote === 9 && child === 1) {
            this.setState({ vote: "MAX" });
        }
        else if (this.state.vote === "MIN" && child === -1) {
            alert("You can't unvote anymore");
        }
        else if (this.state.vote === "MAX" && child === 1) {
            return alert("You can't vote anymore");
        }
        else if (this.state.vote === "MIN" && child === 1) {
            this.setState({ vote: 1 });
        }
        else if (this.state.vote === "MAX" && child === -1) {
            this.setState({ vote: 9 });
        }
        else if (this.state.vote === 1 && child === -1) {
            this.setState({ vote: "MIN" });
        }
        else{
            this.setState({ vote: this.state.vote + child });
        }
    }

    render () {
        return (
            <div className="Box">
            <div className="top-box">
                <div className="left-box">
                    <div className="font-type">{this.props.type}</div>
                    <div className="font-menu">{this.props.menu}</div>
                    <div className="font-descrip">{this.props.descrip}</div>
                </div>
                <div className="right-box">
                    <img src={this.props.img}
                        className="img-box" alt="img" />
                </div>
            </div>
            <div className="bottom-box">
                <BtnVote 
                    name="Click to Vote" 
                    parentCallback={this.handleCallback}
                    value = {1}
                />
                <div className="show-box">{this.state.vote}</div>
                <BtnVote 
                    name="Click to Unvote" 
                    parentCallback={this.handleCallback}
                    value={-1}
                    
                />
            </div>
        </div>
        )
        
    } 
}

export default BoxComponent;