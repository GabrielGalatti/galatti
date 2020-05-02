import React from "react";

import ImageCard from "@components/image-card/image-card";

class Example extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Gabriel Galatti',entity_code: 'ABCDE'},
                {name: 'Gabriel Galatti',entity_code: 'FGHIJ'}
            ]
        }
    }

    componentDidMount(){}

    render(){
        return(
            this.state.data.length == 0 ? (<h1>Carregando</h1>) : (
                    this.state.data.map(ev => (
                        <ImageCard name={ev.name} key={ev.entity_code}/>
                ))
            )
        )
    }
}

export default Example;