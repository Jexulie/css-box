import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../containers/Main';
import Settings from '../containers/Settings';

import '../css/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main style={this.props.state}/>
        <Settings/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps)(App);
