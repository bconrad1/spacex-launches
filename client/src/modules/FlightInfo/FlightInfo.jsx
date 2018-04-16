import React, { Component } from "react";
import { Card, Icon } from 'semantic-ui-react'
import ImmutablePropTypes from 'react-immutable-proptypes';


import './styles/CardStyle.css'



class FlightInfo extends Component {
    constructor(props) {

        super(props);
        this.state = {
            launches : this.props.data,
            visible: true
        }
    }

    render() {
        let launchInfo = this.props.data;
        return (
            <div>             
                <Card data-aos="zoom-in" fluid color='blue' raised className={`card-outer ${this.state.visible ? 'bounce' :'is-hidden'}`}>
                    <Card.Content>
                        <Card.Header>
                            <h3 className='header-flight-number'>{'Flight Number ' + launchInfo.get('flight')}</h3>
                            <h4 className='header-flight-name'>{launchInfo.get('rocket').get('rocket_name').toUpperCase()}</h4>
                            <a href={launchInfo.get('video')} target="_blank" className='youtube-link'><Icon name = "youtube" className='hvr-grow'/></a>
                        </Card.Header>
                        <Card.Meta>
                        </Card.Meta>
                        <Card.Description>
                            <div>
                                <b>Mission Success: </b>{launchInfo.get('success') ? (<Icon name='checkmark' color="green" style={{fontSize:'16px'}}/>):<Icon name='remove' color="red" style={{fontSize:'16px'}}/>}
                            </div>
                            <div>
                                <b>Details: </b>{launchInfo.get('details')}
                            </div>
                        </Card.Description>                   
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name="world"/>{launchInfo.get('launchSite')}
                    </Card.Content>
                    <div className='card-pointer'/> 
                </Card>              
            </div>
        )
    }
}   

FlightInfo.proptypes = {
    data: ImmutablePropTypes.list
}

export default FlightInfo;