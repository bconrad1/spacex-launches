//Landing Page

import React, { Component } from "react";
import { Grid, Message, Card} from 'semantic-ui-react'
import { Segment, Button, Divider, Icon, Form, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import FlightCard from '../FlightInfo/FlightCard'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import ScrollButton from '../Main/ScrollButton.jsx'

import './styles/LandingBlock.css';

class LandingPage extends Component {
  constructor(props) {

    super(props);

    this.state = {
      launches : [],
      scrollClass: '',
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
          var success = json[i].success;
          
          //var success = success==='true' ? true : false;
       

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
    
    var visible;

    if(window.pageYOffset > 1000){

        this.setState({
          scrollBtnVis : true,
        })   
        
    }else{
        this.setState({
          scrollBtnVis : false,
        })   
    }    
 
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
            <div className='header-container'>
              <Image src='spacex.png' className='spacex-logo' centered/>
              <span className='sub-header'><h1 style={{textAlign:'center'}}>Launches</h1></span>
            </div>
          </Grid.Column>
          <Grid.Column/>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={12}>
            <div>
              <FlightCard data={this.state.launches}/>            
            </div>
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row>
      </Grid> 
           <ScrollButton show={this.state.scrollBtnVis}/>
      </div>
      );
  }


}

export default LandingPage;