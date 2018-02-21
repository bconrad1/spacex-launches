import React, { Component } from "react";
import { Menu, Icon, Button, Segment} from 'semantic-ui-react';
import styles from './styles/MenuStyle';
import { withRouter, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';

class MenuHeader extends Component {

  state = {
    activeItem: 'home'
  };

  handleItemClick = (e, {name}) => {
    
    this.setState({
      activeItem: name    
    });

    
    
  }

  render() {

    const {activeItem} = this.state

    return (
   
      <Menu inverted style={{borderRadius:'0px'}}>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='launches' active={activeItem === 'launches'} onClick={this.handleItemClick} />
      </Menu>
 

      );
  }

}
export default MenuHeader;