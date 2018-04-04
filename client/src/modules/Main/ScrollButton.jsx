import React, { Component } from 'react';
import {Button,Icon} from 'semantic-ui-react';
import './styles/ScrollBtn.css';

class ScrollButton extends Component{

    constructor(props) {
        super(props);

        this.state={
            classes : ['scroll-btn-pop'],
        }
    }

    componentWillReceiveProps(nextProps){

        let componentClasses = this.state.classes

        if(nextProps.show === true){
            componentClasses.push('show');
        }else{
            componentClasses = ['scroll-btn-pop'];
        }

        this.setState({
            classes: componentClasses,
        });   
       
    }

    scrollToTop = () =>{
        window.scrollTo(0,0)
    }
 
    render() {
        return(
         <div className={this.state.classes.join(' ')}> 
          <Button className={'scroll-btn'} onClick={this.scrollToTop}><Icon name="arrow up"/>To Top</Button>
        </div>
      );
    };
    
  
}
export default ScrollButton;