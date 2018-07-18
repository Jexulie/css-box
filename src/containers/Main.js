import React from 'react';
import { connect } from 'react-redux';
import { buttonChange } from '../actions'

import TopBar from './Main/TopBar';
import Scene from './Main/Scene';
import BottomBar from './Main/BottomBar';

const Main = props => {

    let handleButtons = styleName => {
        props.dispatch(buttonChange(styleName))
    }

    return (
        <div className="Main">
            <TopBar/>
            <Scene style={props.state}/>
            <BottomBar buttons={handleButtons} style={props.state}/>
        </div>
    )
}

const mapStateToProps = state => ({
    state
});
  
export default connect(mapStateToProps)(Main);