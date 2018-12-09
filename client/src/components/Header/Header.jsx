import React, {Component} from 'react';
import logo from '../../static/images/spacex2.png';
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
        <div className={'header-container'}>
          <div className={'header-links'}>
            <span><Link to={'/'}  className={'route-link first-link'}>{'LATEST'}</Link></span>
            <span className={'divider'}/>
            <span><Link to={'/launches'}  className={'route-link'}>{'LAUNCHES'}</Link></span>
          </div>
          <div className={'logo-container'}>
            <img src={logo} className={'logo-img'}/>
          </div>
          <div className={'placeholder'}/>
        </div>
    );
  }
}

export default Header;