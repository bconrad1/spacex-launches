import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingBlock from '../LandingPage/LandingBlock.jsx';
import './styles/Main.css';

class Main extends React.Component {
    render = () => {
        return (
            <div className="app-container" style={{ height: '100%', width: '100%', margin: '0px', position: 'absolute' }}>
                <Switch>
                    <Route exact path='/' component={LandingBlock} />
                </Switch>
            </div>
        )
    };
}

export default Main;