import React, { Component } from 'react';   
 import { Grid, Panel, Message, Accordion, Container, Icon, Menu } from 'semantic-ui-react'

export default class Home extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            message:{
                visible: true,
                color: 'green'
            }
        };
    }

    handleDismiss(event) {
        this.setState({
            message:{
                visible: false,
                color:'green'
            }
        })
    }
    
    createMenu(){
       return <Menu className="menu" size='massive'>
                <Menu.Item className="menu_logo" >
                    <img src='/images/CodingCougsLogo.svg'/>
                </Menu.Item>
             </Menu>
    }

    welcomeMessage(){
      return  this.state.message.visible ?
            <Message
                style={{width:'100%', paddingRight:"1em"}}
                visible={this.state.message.visible}
                onDismiss={this.handleDismiss.bind(this)}
                color={this.state.message.color}
                compact={false}>
                <Message.Header >
                    Welcome!
                </Message.Header>
                <Message.Content>
                    This page is currently in development to get you up and running.
                </Message.Content>
            </Message> : null;
    }

    handleAccordionClick(value, event){
        this.props.help.activeAccordion != value ?
                this.props.setActiveAccordion(value) :
                this.props.setActiveAccordion( -1 );
    }

    createAccordion(){
        return this.props.help.data.basics.map( (item, index) => {
            let { activeAccordion } = this.props.help;
            return( 
                <Accordion key={'A-'+index} fluid styled>
                    <Accordion.Title active={activeAccordion == index} index={index} onClick={this.handleAccordionClick.bind(this,index)}>
                        <Icon name='dropdown'/>
                        {item.header}
                    </Accordion.Title >
                    <Accordion.Content active={activeAccordion === index}>
                    { item.content.map( (content, i) => {
                            return <p key={"C"+i+i}>{content}</p>
                        })}
                    </Accordion.Content>
                </Accordion>
            )
        })
    }


    render(){
        console.log("Homepage Render Props:", this.props)
        return(
            <div>
                {this.createMenu()}
                <Container text>
                    <Grid container={true} padded='horizontally'>
                        <Grid.Row>
                            {this.welcomeMessage()}
                        </Grid.Row>
                        <Grid.Row>
                            {this.createAccordion()}
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )
    };
}
