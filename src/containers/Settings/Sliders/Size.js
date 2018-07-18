import React from 'react';

export default props => {

    let width;
    let height;

    let handleChange = e => {
        props.sizeChange({width: width.value, height: height.value})
    }

    return (
        <div className="size">
            <div className="Width">
                <label>Width</label>
                <input
                    className="slider"
                    id="Width"
                    type="range" 
                    min="0" 
                    max="500" 
                    value={props.style.size.width}
                    ref={i => width = i}
                    onChange={handleChange}
                />
            </div>
            <div className="height">
                <label>height</label>
                <input
                    className="slider"
                    id="height"
                    type="range" 
                    min="0" 
                    max="500" 
                    value={props.style.size.height}
                    ref={i => height = i}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}