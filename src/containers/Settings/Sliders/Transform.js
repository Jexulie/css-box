import React from 'react';
import { connect } from 'react-redux';
import {  } from '../../actions';

const Color = props => {
    

    let handleChange = e => {
        props.dispatch(changeBackgroundColor({R: red.value, G: green.value, B:blue.value , A: alpha.value}))
    }

    return (
        <div className="color">
            <div className="Red">
                <label>RED</label>
                <input
                    className="slider"
                    id="Red"
                    type="range" 
                    min="0" 
                    max="255" 
                    value={props.state.backgroundColor.R}
                    ref={i => red = i}
                    onChange={handleChange}
                />
            </div>
            <div className="Green">
                <label>GREEN</label>
                <input
                    className="slider"
                    id="Green"
                    type="range" 
                    min="0" 
                    max="255" 
                    value={props.state.backgroundColor.G}
                    ref={i => green = i}
                    onChange={handleChange}
                />
            </div>
            <div className="Blue">
                <label>BLUE</label>
                <input
                    className="slider"
                    id="Blue"
                    type="range" 
                    min="0" 
                    max="255" 
                    value={props.state.backgroundColor.B}
                    ref={i => blue = i}
                    onChange={handleChange}
                />
            </div>
            <div className="Alpha">
                <label>ALPHA</label>
                <input
                    className="slider"
                    id="Alpha"
                    type="range" 
                    min="0" 
                    max="1"
                    step="0.01"
                    value={props.state.backgroundColor.A}
                    ref={i => alpha = i}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(Color);