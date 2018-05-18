import React, { Component } from 'react';
import {Button,Icon} from 'semantic-ui-react';
import './styles/ScrollBtn.css';

class ScrollButton extends Component{

    scrollToTop = () =>{
        window.scrollTo(0,0)
    }

    render() {
        let {show} = this.props;
        return(
         <div className={show ? 'scroll-btn-container-show' : 'scroll-btn-container-hide'}>
          <Button className={'scroll-btn'} onClick={this.scrollToTop}><Icon name="arrow up"/>To Top</Button>
        </div>
      );
    };


}
export default ScrollButton;