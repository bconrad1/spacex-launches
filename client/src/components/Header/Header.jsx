import React, {Component} from 'react';
import logo from '../../static/images/spacex2.png';
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
        <div className={'header-container'}>
          <div className={'header-links'}>
            <span><Link to={'/'}>{'LATEST'}</Link></span>
            <span><Link to={'/launches'}>{'LAUNCHES'}</Link></span>
          </div>
          <div className={'logo-container'}>
            <img src={logo} className={'logo-img'}/>
          </div>
          <div className={'placeholder'}/>

        </div>
    );
  }
}
