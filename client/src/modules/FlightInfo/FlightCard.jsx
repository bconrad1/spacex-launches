
import React, { Component } from "react";
import { Image, Grid} from 'semantic-ui-react';
import FlightInfo from './FlightInfo.jsx'


import './styles/CardStyle.css';

class FlightCard extends Component {
  constructor(props) {

    super(props);
    this.state = {
        launches : this.props.data,
    }

    window.addEventListener('resize', this.handleResize);
   
  }


formatDate(date){

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let formattedDate = new Date(date)

    let year = formattedDate.getFullYear();
    let month = formattedDate.getMonth()+1;
    let dt = formattedDate.getDate();
    
    if (dt < 10) {
        dt = '0' + dt;
    }

    let finalDate = `${monthNames[month-1].toLocaleUpperCase()}-${dt}-${year}`;
    return finalDate;
}

render() {
    const displayLaunches =  this.props.data.map((launch)=>
        <div className = {'flight-element-'+ launch.flight + ' card-container'} key={launch.flight}>             
            <Grid className='grid-outer'>
                <Grid.Column width={7} verticalAlign={'middle'} className='info-container'>
                    <FlightInfo data={launch}/>
                </Grid.Column>
                <Grid.Column width={2} className='patch-image'>
                    <Image className='mission-patch' src={launch.missionPatch}/>                     
                </Grid.Column>
                <Grid.Column width={7} verticalAlign={'middle'}>
                    <span className='timeline-date'>{this.formatDate(launch.date)}</span>                   
                </Grid.Column>
            </Grid>
            <div className='vertical-timeline'/>            
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