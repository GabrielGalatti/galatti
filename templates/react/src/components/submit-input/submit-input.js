import React from "react";
import "./submit-input.scss";

class SubmitInput extends React.Component {
    constructor(props) {
        super(props);
        const { value } = this.props;

        this.state = {
            value: value == null ? "Submit" : value
        };
    }

    render() {
        return <input type="submit" value={this.state.value}/>;
    }
}

export default SubmitInput;
