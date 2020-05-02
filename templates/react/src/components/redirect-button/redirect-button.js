import React from "react";
import {Redirect} from "react-router-dom";

import "./redirect-button.scss";

class RedirectButton extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            disabled: !this.props.disabled ? true : this.props.disabled,
            redirect: false 
        }
    }

    redirect = () => {
        this.setState({redirect: true});
    }

    render(){
        return(
            this.state.redirect ? (
                <Redirect to={this.props.to}/>
            ) : (
                <button onClick={this.redirect} disabled={!this.props.disabled}>{this.props.value}</button>
            )
        )
    }
}

export default RedirectButton;