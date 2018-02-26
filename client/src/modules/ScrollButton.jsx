import React, { Component } from 'react';
import {Button,Icon} from 'semantic-ui-react';
import './styles/ScrollBtn.css';
import styles from './styles/LandingStyle';

class ScrollButton extends Component{

    constructor(props) {
        super(props);


        this.state={
            classes : ['example-component'],
        }

        

    }

    componentWillReceiveProps(nextProps){


        var componentClasses = this.state.classes

        if(nextProps.show === true){
            componentClasses.push('show');
        }else{
            componentClasses = ['example-component'];
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
          <Button big style={styles.scrollBtn} onClick={this.scrollToTop}><Icon big name="arrow up"/>To Top</Button>
        </div>
      );
    };
    
  
}
export default ScrollButton;