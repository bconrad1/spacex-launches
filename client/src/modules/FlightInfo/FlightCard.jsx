
import React, { Component } from "react";
import { Card, Image, Icon, Segment,Grid} from 'semantic-ui-react';
import styles from './styles/CardStyle';
import './styles/CardStyle.css';
import FlightInfo from './FlightInfo.jsx'

class FlightCard extends Component {
  constructor(props) {

    super(props);
    this.state = {
        launches : this.props.data,
    }
   
  }

formatDate(date){

    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var formattedDate = new Date(date)

    var year = formattedDate.getFullYear();
    var month = formattedDate.getMonth()+1;
    var dt = formattedDate.getDate();
    
    if (dt < 10) {
        dt = '0' + dt;
    }

    var finalDate = monthNames[month-1].toLocaleUpperCase() + "-"+ dt + "-" + year;
    return finalDate;
}


render() {

    const displayLaunches =  this.props.data.map((launch)=>

        

        
        <div style= {styles.cardContainer} className = {'flight-element-'+ launch.flight}>       
            <Grid style={styles.grid}>
                <Grid.Column width={7} verticalAlign={'middle'}>
                    <FlightInfo data={launch}/>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Image style = {styles.missionPatch} src={launch.missionPatch}/>                     
                </Grid.Column>
                <Grid.Column width={7} verticalAlign={'middle'}>
                    <span className='timeline-date'>{this.formatDate(launch.date)}</span>                          
                </Grid.Column>
            </Grid>
            <div  className='vertical-timeline'/>
        </div>
        
       
       
    ); 


    return (
        <div>
            {displayLaunches}
        </div>
      );
  }
}

export default FlightCard;