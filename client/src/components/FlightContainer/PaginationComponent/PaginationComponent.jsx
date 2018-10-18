import React, {Component} from 'react';

export class PaginationComponent extends Component {

  getTiles = (tileCount) => {
    let tileArray = [];
    for (let i = 1; i <= tileCount; i++) {
      tileArray.push(<div className={'pagination-tile'}>{i}</div>);
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