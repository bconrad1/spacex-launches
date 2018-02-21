import React, { Component } from "react";
import { Card, Image, Icon, Segment,Grid} from 'semantic-ui-react'
import styles from './styles/CardStyle'
import './styles/CardStyle.css'

class FlightInfo extends Component {
    constructor(props) {

        super(props);
        this.state = {
            launches : this.props.data,
        }
    }

    render() {
        return (
            <Card fluid color='blue' raised style={styles.infoCard}>
                <Card.Content>
                    <Card.Header>
                        <h3 style = {styles.headFlightNum}>{'Flight Number ' + this.props.data.flight}</h3>
                        <h4 style = {styles.headFlightName}>{this.props.data.rocket['rocket_name'].toUpperCase()}</h4>
                    </Card.Header>
                    <Card.Meta>
                    </Card.Meta>
                    <Card.Description>
                        {this.props.data.details}
                    </Card.Description>                   
                </Card.Content>
                <Card.Content extra>
                    <Icon name="world"/>{this.props.data.launchSite}
                </Card.Content>
            </Card>
        )


    }
}   

export default FlightInfo;