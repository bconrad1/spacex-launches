import React, {Component} from 'react';

export class PaginationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTile: 1,
    };
  }

  getTiles = (tileCount) => {
    let tileArray = [];
    for (let i = 1; i <= tileCount; i++) {
      tileArray.push(
          <div className={`${this.state.activeTile === i
              ? 'pagination-tile-active'
              : ''} pagination-tile`}
               value={i}
               onClick={() => {
                 this.setState({
                   activeTile: i,
                 });
                 this.props.handleClick(i);
               }} key={i}>{i}</div>);
    }
    return tileArray;
  };
  handleOnClick = (value) => {
    this.setState({
      activeTile: value,
    });
    this.props.handleClick(value);
  };

  render() {
    let {launchLength, incrementValue} = this.props;
    let {activeTile} = this.state;
    let tileCount = Math.ceil(launchLength / incrementValue);
    let canGoForward = activeTile < tileCount;
    let canGoBack = activeTile > 1;
    return (
        <div className={'pagination-outer'}>
          <div className={'pagination-container'}>
            <div className={`${!canGoBack ? 'disabled' : ''} pagination-tile`}
                 onClick={() => {
                   canGoBack ? this.handleOnClick(activeTile - 1) : null;
                 }}
            >{'<'}</div>
            {
              this.getTiles(tileCount)
            }
            <div
                className={`${!canGoForward ? 'disabled' : ''} pagination-tile`}
                onClick={
                  () => {
                    canGoForward ? this.handleOnClick(activeTile + 1) : null;
                  }
                }
            >{'>'}</div>
          </div>
        </div>
    );
  }
}

export default PaginationComponent;