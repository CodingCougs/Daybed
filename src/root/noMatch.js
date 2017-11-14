import React, {Component} from 'react';
import {Card, Grid, Container} from 'semantic-ui-react';
import {Link} from 'react-router';

export default class noMatch extends Component {

    constructor(props){
        super(props)
    
        this.state={ }
    }


    render(){
        return(
            <div>
                <Container text>
                        <img src='/images/CodingCougsLogo.svg'/> <br/>
                        <h1 className='center header'>404</h1><br/>
                        <p  ClassName='center' style={{ fontSize:"4em" }}> 
                            Need help? Try <Link to='/help'>Here</Link>.
                        </p>
                </Container>
            </div>

        )
    }

}