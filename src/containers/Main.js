import React from 'react';
import { connect } from 'react-redux';

import Top_Bar from './Main/Top-Bar';
import Scene from './Main/Scene';
import Bottom_Bar from './Main/Bottom-Bar';

const Main = props => {
    return (
        <div className="Main">
            <Scene style={props.state}/>
        </div>
    )
}

const mapStateToProps = state => ({
    state
});
  
export default connect(mapStateToProps)(Main);