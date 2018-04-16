//Landing Page

import React, { Component, Fragment } from "react";
import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import FlightCard from '../FlightInfo/FlightCard';
import FlightPicker from '../Main/FlightPicker.jsx';
import ScrollButton from '../Main/ScrollButton.jsx';
import Immutable from 'immutable';

import './styles/LandingBlock.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: [],
      flightNums: [],
      scrollClass: '',
      scrollBtnVis: false,
      loadingStatus: true
    };
  }

  componentWillMount() {
    const url = "http://localhost:3001/api/launches";
    fetch(url)
      .then(function (response) {
        return response.json();
      }).then((json) => {

        let launches = [];
        let flightNums = [];

        for (let i = 0; i < json.length; i++) {
          let rocket = json[i].rocket;
          let flightNum = json[i].flight;
          let date = json[i].date;
          let launchSite = json[i].launchSite;
          let missionPatch = json[i].missionPatch;
          let article = json[i].article;
          let video = json[i].video;
          let details = json[i].details;
          let success = json[i].success;

          let resJson = new Object();
          resJson.id = i + 1;
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
          flightNums.push({
            text: 'Flight ' + (i + 1),
            value: i + 1
          });
        }

        this.setState({
          launches: launches,
          flightNums: flightNums,
          loadingStatus: false,
        })

      });
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 1000) {
      this.setState({
        scrollBtnVis: true,
      })
    } else {
      this.setState({
        scrollBtnVis: false,
      })
    }
  }

  render() {
    return (
      <div>
        <div className="loading-screen-temp" />
        {this.state.launches.length > 0 ? (
          <Fragment>
            <Grid className="grid-container">
              <Grid.Row>
                <Grid.Column width={3} />
                <Grid.Column width={10}>
                  <div className='header-container'>
                    <Image src='spacex.png' className='spacex-logo' centered/>
                    <span className='sub-header'><h1 style={{ textAlign: 'center' }}>Launches</h1></span>
                    <FlightPicker flights={this.state.flightNums} />
                  </div>
                </Grid.Column>
                <Grid.Column />
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={2} />
                <Grid.Column width={12}>
                  <div>
                    <FlightCard data={Immutable.fromJS(this.state.launches)} />
                  </div>
                </Grid.Column>
                <Grid.Column width={2} />
              </Grid.Row>
            </Grid>
            <ScrollButton show={this.state.scrollBtnVis} />
          </Fragment>) : <div />}
      </div>
    );
  }


}

export default LandingPage;