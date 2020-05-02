import React from "react";
import print from "print-js";

import {get_html_credential} from "@services/credentials";
import "./print-button.scss";

class PrintButton extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            disabled: !this.props.disabled ? true : this.props.disabled 
        }
    }

    printCredential = () => {
        get_html_credential(this.props.credential_id).then(({data}) => {
            const html = data.data;

            print({printable: html, type: 'raw-html', documentTitle: "Credencial"})
        })
    }

    render(){
        return(
            <button onClick={this.printCredential} disabled={!this.props.disabled}>{this.props.value}</button>
        )
    }
}

export default PrintButton;