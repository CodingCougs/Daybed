import React, { Component } from 'react';   
import { Grid, Panel, Message, Accordion, Container, Icon, Menu } from 'semantic-ui-react';

export default class Trending extends Component {

constructor(props){
    super(props)

    this.state = {};
}

componentWillMount(){
    this.props.getGifs();
}

render(){
    return(
        <div>
            <h1>Hello from the other side.</h1>
        </div>
    )
}

}