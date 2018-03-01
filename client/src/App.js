import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './modules/Main/Main.jsx';

class App extends Component {

  state={
    response: ''
  }

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
    }
  
  callApi = async () => {
    const response = await fetch ('/api');
    const body = await response.json();

    if(response.status !== 200) {
      throw Error (body.message);
    }

    return body;

  }

  render() {
    return (
      <div style={ { height: '100%', width: '100%', margin: '0px', position: 'absolute' } }>
        <Main/>
      </div>
      );
  }
}

export default App;
