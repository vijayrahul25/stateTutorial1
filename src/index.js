import React from 'react';
import ReactDOM from 'react-dom';

import Button1 from './pages/button1/Button1';
import Button2 from './pages/button2/Button2';
import Result1 from './pages/button2/Result1';
  
class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      Appcounter: 0
    };
  }
  incrementCounter = () => {
    console.log('test');
    this.setState({
      Appcounter: this.state.Appcounter + 1
    });
  };
  render() {
    return (
      <div> 
        <h3>Simple Button counter</h3> (increment in button)
        <Button1 />
        <h3>Button counter in div</h3> 
        <Button2 onClickFunction={this.incrementCounter}/>
        <Result1 AppCounterAsProp={this.state.Appcounter}/>
      </div>
    );
  }
}
// render app component
ReactDOM.render(  
    <App/>,
  document.getElementById('root')
);

