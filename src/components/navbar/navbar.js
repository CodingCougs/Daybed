import React, { Component } from 'react';
import { Menu, Button, Sidebar, Segment, Icon, Header, Image } from 'semantic-ui-react';

export default class navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })  

  returnHome() {
    console.log("hello world")
  }

  render() {
    let { visible } = this.state;

    return (
      <div className='navbar'>
        <Sidebar.Pushable as={Segment} className={'navbar-menu'}>
          <Button onClick={this.toggleVisibility} className='menu-button push-right' icon><Icon name='content' /></Button>
            <Sidebar as={Menu} animation='overlay' width='thin' direction='right' visible={visible} icon='labeled'>
            <Menu.Item name='Projects'>
              <Button className='nav-button'>Projects</Button>
            </Menu.Item>
            <Menu.Item name='Gallery'>
              <Button className='nav-button'>Gallery</Button>
            </Menu.Item>
            <Menu.Item name='Schedule'>
              <Button className='nav-button'>Schedule</Button>
            </Menu.Item>
            <Menu.Item name='About'>
              <Button className='nav-button'>About</Button>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <img src='/images/CodingCougsLogo.svg' className='logo-button' style={{display:'inline-block'}} onClick={this.returnHome}/>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }

}