import React from 'react';

class Result1 extends React.Component {

  render() {
  var style = {    
    fontSize: '16px',
    padding: '5px',
    border:'solid 1px',
    margin:'10px',
    width: 50
  };
  return (<div style={style}>
    {this.props.AppCounterAsProp}
    </div>
    );
  }

}

export default Result1;

