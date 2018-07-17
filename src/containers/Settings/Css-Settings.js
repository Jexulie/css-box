import React from 'react';
import { connect } from 'react-redux';
import { changeBackgroundColor, changeBoxshadow } from '../../actions';

import Border from './Sliders/Border';
import BoxShadow from './Sliders/BoxShadow';
import Color from './Sliders/Color';
import Size from './Sliders/Size';
import Transform from './Sliders/Transform';
import Transition from './Sliders/Transition';

const Css_Settings = props => {

    let handleColorChange = colors => {
        props.dispatch(changeBackgroundColor(colors))
    }

    let handleBoxShadowChange = values => {
        props.dispatch(changeBoxshadow(values))
    }



    return (
        <div className="Css-Settings">
            <Color colorChange={handleColorChange} style={props.state}/>
            <BoxShadow boxshadowChange={handleBoxShadowChange} style={props.state}/>
        </div>
    )
}

const mapStateToProps = state => ({
    state
});
  
export default connect(mapStateToProps)(Css_Settings);
  