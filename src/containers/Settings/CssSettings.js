import React from 'react';
import { connect } from 'react-redux';
import { changeBackgroundColor, changeBoxshadow, changeSize, changeClipPath } from '../../actions';


import BoxShadow from './Sliders/BoxShadow';
import Color from './Sliders/Color';
import Size from './Sliders/Size';
import ClipPath from './Sliders/ClipPath';

const Css_Settings = props => {

    let handleColorChange = colors => {
        props.dispatch(changeBackgroundColor(colors));
    }

    let handleBoxShadowChange = values => {
        props.dispatch(changeBoxshadow(values));
    }

    let handleSizeChange = values => {
        props.dispatch(changeSize(values));
    }

    let handleClipPath = values => {
        props.dispatch(changeClipPath(values));
    }

    let color = (<Color colorChange={handleColorChange} style={props.state}/>);
    let boxShadow = (<BoxShadow boxshadowChange={handleBoxShadowChange} style={props.state}/>);
    let size = (<Size sizeChange={handleSizeChange} style={props.state}/>);
    let clippath = (<ClipPath clipAttr={handleClipPath} style={props.state}/>)
    
    return (
        <div className="CssSettings">
            {props.state.sliders.color ? color : null}
            {props.state.sliders.boxshadow ? boxShadow : null} 
            {props.state.sliders.size ? size : null}
            {props.state.sliders.clippath ? clippath : null}
        </div>
    )
}

const mapStateToProps = state => ({
    state
});
  
export default connect(mapStateToProps)(Css_Settings);
  