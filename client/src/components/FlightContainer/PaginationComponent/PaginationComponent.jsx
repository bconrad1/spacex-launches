import React, {Component} from 'react';

export class PaginationComponent extends Component {
  constructor(props){
    super(props);

    this.state={
      activeTile: 1
    }
  }

  getTiles = (tileCount) => {
    let tileArray = [];
    for (let i = 1; i <= tileCount; i++) {
      tileArray.push(
      <div className={`${this.state.activeTile === i ? 'pagination-tile-active':''} pagination-tile`} 
          value={i}
          onClick={() => {
            this.setState({
              activeTile: i
            });
            this.props.handleClick(i)}
          }>{i}</div>)
    }
    return tileArray;
  };

  render() {
    let {launchLength, incrementValue} = this.props;
    let tileCount = Math.ceil(launchLength / incrementValue);
    return (
        <div className={'pagination-outer'}>
          <div className={'pagination-container'}>
            <div className={'pagination-tile'}>{'<'}</div>
            {
              this.getTiles(tileCount)
            }
            <div className={'pagination-tile'}>{'>'}</div>
          </div>
        </div>
    );
  }
}

export default PaginationComponent;