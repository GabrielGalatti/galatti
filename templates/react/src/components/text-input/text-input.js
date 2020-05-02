import React from "react";
import "./text-input.scss";

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        const {label, placeholder, name} = this.props;

        this.state = {
            label: label == null ? 'Label' : label,
            placeholder: placeholder == null ? 'Label' : label,
            name: name == null ? "text" : name
        };
    }

    render() {
        return (
            <label>{this.state.label}
                <input 
                 id={this.props.id}
                 name={this.state.name}
                 type="text"
                 placeholder={this.state.placeholder}
                 required={this.props.required}
                 onChange={this.props.action}
                 ></input>
            </label>
        )
    }

}

export default TextInput;