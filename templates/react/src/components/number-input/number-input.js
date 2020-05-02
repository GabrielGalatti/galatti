import React from "react";
import "./number-input.scss";

class NumberInput extends React.Component {
    constructor(props) {
        super(props);

        const { label, placeholder, name } = this.props;

        this.state = {
            label: label == null ? "Label" : label,
            placeholder: placeholder == null ? "Label" : label,
            name: name == null ? "number" : name
        };
    }

    render() {
        return (
            <label>
                {this.state.label}
                <input
                    id={this.props.id}
                    name={this.state.name}
                    type="number"
                    onChange={this.props.action}
                    required={this.props.required}
                    placeholder={this.state.placeholder}></input>
            </label>
        );
    }
}

export default NumberInput;
