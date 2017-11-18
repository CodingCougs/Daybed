import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { createConnect } from 'react-redux/lib/connect/connect';


export default class Counter extends Component {

    constructor(props){
        super(props)

        this.state = { 
            count: 0,
            buttonArray: []

        };

    }

    handleClick(){
        let newCount = this.state.count + 1;
        let bArray = this.state.buttonArray;
        bArray.push(this.createButtons(newCount))
        this.setState({
            count: newCount,
            buttonArray: bArray
        })
        console.log(this.state)
    }

    handleSecondaryButton(event){
        console.log("Hello You clicked me", event);
        let bArray = this.state.buttonArray;
        console.log(bArray.length)
         bArray.splice(event,1);
        let newCount = this.state.count
           this.setState({
                count: newCount-1,
                buttonArray: bArray
        })
    }

    createButtons(index){
        return <Button key={`Button: ${index}`} onClick={this.handleSecondaryButton.bind(this,index)} size='massive' color='red'> {index} </Button>
    //    return Array(this.state.count).fill(0).map( (item, index) => {
    //         return <Button key={`Button: ${index}`}size='massive' color='red'> hi </Button>
    //     } )
    }



    render(){

        return (
            <div className='full'>
               <Grid className='full' container={true} textAlign='center' verticalAlign='middle'>
                <Grid.Column>
                    <Button size='massive' onClick={this.handleClick.bind(this)} color='blue'>{this.state.count}</Button>
                    {this.state.buttonArray}
                </Grid.Column>
               </Grid>
            </div>
        )

    }






}