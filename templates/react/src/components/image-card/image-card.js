import React from "react";

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return(
            <h1>{this.props.name}</h1>
        )
    }
}

export default ImageCard;