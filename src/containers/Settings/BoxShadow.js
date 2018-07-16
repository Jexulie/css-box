import React from 'react';
import { connect } from 'react-redux';
import { changeBoxshadow } from '../../actions';

const BoxShadow = props => {
    // TODO: add inset boolean
    let offsetX;
    let offsetY;
    let blur;
    let boxshadowColor = {
        R: 0,
        G: 0,
        B: 0,
        A: 0
    }

    let handleChange = e => {
        props.dispatch(changeBoxshadow({
            offsetX: offsetX.value,
            offsetY: offsetY.value,
            blur: blur.value,
            boxshadowColor : {
                R: boxshadowColor.R.value,
                G: boxshadowColor.G.value,
                B: boxshadowColor.B.value,
                A:boxshadowColor.A.value
            }
        }))
    }

    return (
        <div className="shadow">
            <div className="offsetX">
                <label>offsetX</label>
                <input
                    className="slider"
                    id="offsetX"
                    type="range" 
                    min="-100" 
                    max="100" 
                    value={props.state.boxshadowProps.offsetX}
                    ref={i => offsetX = i}
                    onChange={handleChange}
                />
            </div>
            <div className="offsetY">
                <label>offsetY</label>
                <input
                    className="slider"
                    id="offsetY"
                    type="range" 
                    min="-100" 
                    max="100" 
                    value={props.state.boxshadowProps.offsetY}
                    ref={i => offsetY = i}
                    onChange={handleChange}
                />
            </div>
            <div className="blur">
                <label>blur</label>
                <input
                    className="slider"
                    id="blur"
                    type="range" 
                    min="0" 
                    max="100" 
                    value={props.state.boxshadowProps.blur}
                    ref={i => blur = i}
                    onChange={handleChange}
                />
            </div>
            <div className="Red">
                <label>RED</label>
                <input
                    className="slider"
                    id="Red"
                    type="range" 
                    min="0" 
                    max="255" 
                    value={props.state.boxshadowProps.boxshadowColor.R}
                    ref={i => boxshadowColor.R = i}
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
                    value={props.state.boxshadowProps.boxshadowColor.G}
                    ref={i => boxshadowColor.G = i}
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
                    value={props.state.boxshadowProps.boxshadowColor.B}
                    ref={i => boxshadowColor.B = i}
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
                    value={props.state.boxshadowProps.boxshadowColor.A}
                    ref={i => boxshadowColor.A = i}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps)(BoxShadow);
