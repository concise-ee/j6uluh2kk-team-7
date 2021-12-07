import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './Header'
import {Christmas} from './Christmas'
import {getChristmas} from '../services/ChristmasService'
import {strobo} from "../services/StroboService";
import {HolidayGrid} from './HolidayGrid';

class App extends Component {

  state = {
    christmas: {}
  }

  async componentDidMount() {
    let christmas = await getChristmas()
    console.log(christmas);
    this.setState({christmas: christmas})
    strobo()
  }

  render() {

    return (
      <div className="App" style={{ backgroundImage: `url(/texture-3739393.jpg)`, backgroundRepeat: 'round' }}>
        {/*<Header></Header>*/}
        <div className="row mrgnbtm">
          <Christmas christmas={this.state.christmas}></Christmas>
        </div>
        <HolidayGrid />
      </div>
    );
  }
}

export default App;