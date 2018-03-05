import React, { Component } from "react";
import { Card, Image, Icon, Segment,Grid} from 'semantic-ui-react'
import VisibilitySensor from 'react-visibility-sensor';

import './styles/CardStyle.css'



class FlightInfo extends Component {
    constructor(props) {

        super(props);
        this.state = {
            launches : this.props.data,
            visible: false,
        }
    }


    onVisibilitySensorChange = (isVisible)  =>{
        if (isVisible) {
          this.setState({ visible: true });
        }

    }


    render() {
        return (
            <div> 
            <VisibilitySensor onChange={this.onVisibilitySensorChange}>   
                <Card fluid color='blue' raised className={`card-outer ${this.state.visible ? 'bounce' :'is-hidden'}`}>
                    <Card.Content>
                        <Card.Header>
                            <h3 className='header-flight-number'>{'Flight Number ' + this.props.data.flight}</h3>
                            <h4 className='header-flight-name'>{this.props.data.rocket['rocket_name'].toUpperCase()}</h4>
                            <a href={this.props.data.video} target="_blank" className='youtube-link'><Icon name = "youtube" className='hvr-grow'/></a>
                        </Card.Header>
                        <Card.Meta>
                        </Card.Meta>
                        <Card.Description>
                            <div>
                                <b>Mission Success: </b>{this.props.data.success ? (<Icon name='checkmark' color="green" style={{fontSize:'16px'}}/>):<Icon name='remove' color="red" style={{fontSize:'16px'}}/>}
                            </div>
                            <div>
                                <b>Details: </b>{this.props.data.details}
                            </div>
                        </Card.Description>                   
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name="world"/>{this.props.data.launchSite}
                    </Card.Content>
                    <div className='card-pointer'/> 
                </Card>
                </VisibilitySensor>
            </div>
        )
    }
}   

export default FlightInfo;