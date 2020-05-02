import React from "react";
import "./email-input.scss";

class EmailInput extends React.Component {
    constructor(props) {
        super(props);

        const { label, placeholder, name} = this.props;
        this.state = {
            label: label == null ? "Label" : label,
            placeholder: placeholder == null ? "Label" : label,
            name: name == null ? "email" : name
        };
    }

    render() {
        return (
            <label>
                {this.state.label}
                <input
                    id={this.props.id}
                    name={this.state.name}
                    required={this.props.required}
                    type="email"
                    placeholder={this.state.placeholder}
                    onChange={this.props.action}
                    ></input>
            </label>
        );
    }
}

export default EmailInput;
