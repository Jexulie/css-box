import React from 'react';

export default props => {
    //TODO: add gradient | fix ugly range inputsS
    let red;
    let green;
    let blue;
    let alpha;

    let handleChange = e => {
        props.colorChange({R: red.value, G: green.value, B:blue.value , A: alpha.value})
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
                    value={props.style.backgroundColor.R}
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
                    value={props.style.backgroundColor.G}
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
                    value={props.style.backgroundColor.B}
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
                    value={props.style.backgroundColor.A}
                    ref={i => alpha = i}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}