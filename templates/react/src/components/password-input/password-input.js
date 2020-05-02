import React from "react";
import "./password-input.scss";

class PasswordInput extends React.Component {
    constructor(props) {
        super(props);

        const { label, placeholder, name } = this.props;

        this.state = {
            label: label == null ? "Label" : label,
            placeholder: placeholder == null ? "Label" : label,
            name: name == null ? "password" : name
        };
    }

    render() {
        return (
            <label>
                {this.state.label}
                <input
                    id={this.props.id}
                    name={this.state.name}
                    type="password"
                    placeholder={this.state.placeholder}
                    required={this.props.required}
                    onChange={this.props.action}
                    ></input>
            </label>
        );
    }
}

export default PasswordInput;
