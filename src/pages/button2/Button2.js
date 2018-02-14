import React from 'react';

class Button2 extends React.Component {

 
  render() {
    return (<button onClick={this.props.onClickFunction}>
      +1 value in div
    </button>
    );
  }

}

export default Button2;
