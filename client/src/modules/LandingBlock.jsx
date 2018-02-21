//Landing Page

import React, { Component } from "react";
import { Grid, Message, Card} from 'semantic-ui-react'
import { Segment, Button, Divider, Icon, Form, Image} from 'semantic-ui-react'
import styles from './styles/LandingStyle'
import { Link } from 'react-router-dom';
import FlightCard from './FlightInfo/FlightCard'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import './styles/LandingBlock.css';

class LandingPage extends Component {
  constructor(props) {

    super(props);

    this.state = {
      launches : [],
      scrollClass: 'scroll-btn-hidden',
      scrollBtnVis: false,
    };

  }

  componentWillMount(){    
   
    
     const url = "http://localhost:3001/api/launches";

    fetch(url)
    .then(function(response) {
      return response.json();      
    }).then((json) => {           

       
       var launches = [];

       for(var i = 0; i < json.length; i++) {

          
        
          var rocket = json[i].rocket;
          var flightNum = json[i].flight;
          var date = json[i].date;
          var launchSite = json[i].launchSite;
          var missionPatch = json[i].missionPatch;
          var article = json[i].article;
          var video = json[i].video;
          var details = json[i].details;
          var success = json[i].details;

          var resJson = new Object();
          resJson.id = i+1;
          resJson.rocket = rocket;
          resJson.date = date;
          resJson.flight = flightNum;
          resJson.launchSite = launchSite;
          resJson.missionPatch = missionPatch;
          resJson.article = article;
          resJson.video = video;
          resJson.details = details;
          resJson.success = success;

          launches.push(resJson);
        }
        
        this.setState({
          launches: launches,
        })   
       
    });  
     
  window.addEventListener('scroll', this.handleScroll);

  }

  handleScroll = () =>{

    var winHeight = window.innerHeight;

    var body = document.body;
    var html = document.documentElement;
    var docHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                    html.clientHeight, html.scrollHeight, html.offsetHeight );    
    
    var className = 'scroll-btn-hidden'
    var visible = true;

    if(window.pageYOffset > 1000){
        className = 'scroll-btn'
        visible = true;
    }else{
        className = 'scroll-btn-away'
    }

    this.setState({
      scrollClass : className,
    })   
 
  }

  scrollToTop(){
    window.scrollTo(0,0)
  }
 


  render() {  

    const date = {
      
    }



    return (
      <div>
      <Grid style={{backgroundColor: '#fff',}}>
        <Grid.Row>
          <Grid.Column width={3}/>
          <Grid.Column width={10}center>      
            <div style={styles.headerContainer}>
              <Image src='spacex.png' style={styles.logo} centered/>
              <span style={styles.subHeader}><h1 style={{textAlign:'center'}}>Launches</h1></span>
            </div>
          </Grid.Column>
          <Grid.Column/>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={12}>
            <div style={styles.timelineContainer}>
              <FlightCard data={this.state.launches}/>            
            </div>
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row>
      </Grid> 
            <div className={this.state.scrollClass}> 
              <Button big  style={styles.scrollBtn}><Icon big name="arrow up"/></Button>
              <Button big  style={styles.scrollBtn}><Icon big name="arrow down"/></Button>
            </div>
      </div>
      );
  }


}

export default LandingPage;