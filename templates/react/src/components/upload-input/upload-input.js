import React from "react";

class UploadInput extends React.Component {
  constructor(props) {
    super(props);

    const { fileTypes, label } = this.props;

    this.state = {
      label: label == null ? "Label" : label,
      fileTypes: fileTypes == null ? "image/*" : fileTypes
    };
  }

  render() {
    console.log(this.state);
    
    return (
      <label>
        {this.state.label}
        <input type="file" accept={this.state.fileTypes}></input>
      </label>
    );
  }
}

export default UploadInput;
