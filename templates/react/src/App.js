import React from "react";
import {render} from 'react-dom';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Example from "@views/example/example";

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    
    componentDidMount() {}

    render() {
        return (        
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Example}/>
                    <Redirect from='*' to='/' />
                </Switch>
            </BrowserRouter>
        )
    }
}

render(<App /> , document.getElementById('root'))