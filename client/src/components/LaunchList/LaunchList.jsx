import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PaginationComponent from './PaginationComponent/PaginationComponent';
import LaunchRow from './LaunchRow/LaunchRow';

export class LaunchList extends Component {
  constructor(props) {
    super(props);
    let incrementValue = 10;
    let startValue = 0;
    this.state = {
      startValue,
      incrementValue,
      fullLaunches: this.props.launches,
      endValue: incrementValue,
      launches: this.props.launches.slice(startValue, incrementValue),
    };
  }

  handleTileClick = (value) => {
    let {incrementValue, fullLaunches} = this.state;
    let newEndValue = value * incrementValue;
    let newStartValue = newEndValue - incrementValue;
    this.setState({
      startValue: newStartValue,
      endValue: newEndValue,
      launches: fullLaunches.slice(newStartValue, newEndValue),
    });
  };

  render() {

    let launchLength = this.props.launches.length;
    let {launches, incrementValue} = this.state;
    return (
        <Fragment>
          <div className={'spacex-container'}>
            <div className={'flight-container-header'}>
              <div>{'Launches'}</div>
            </div>
            <div className={'flights-container'}>
              <table className={'flight-container-table-container'}>
                <thead className={'table-container-header'}>
                <tr>
                  <th>{''}</th>
                  <th>{''}</th>
                  <th>{'Flight'}</th>
                  <th>{'Date'}</th>
                  <th>{'Rocket'}</th>
                  <th id={'th-site'}>{'Site'}</th>
                  <th>{'Links'}</th>
                  <th>{'Success'}</th>
                </tr>
                </thead>
                <tbody>
                {_.map(launches, (launch, index) => {
                  return <LaunchRow launch={launch} key={index} index={index}/>;
                })
                }
                </tbody>
              </table>
              <PaginationComponent launchLength={launchLength}
                                   handleClick={this.handleTileClick}
                                   incrementValue={incrementValue}/>
            </div>
          </div>
        </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    launches: state.launchInfo,
  };
}

export default connect(mapStateToProps)(LaunchList);