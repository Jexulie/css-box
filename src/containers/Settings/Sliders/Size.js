import React from 'react';

export default props => {

    let width;
    let height;

    let handleChange = e => {
        props.sizeChange({width: width.value, height: height.value})
    }
    
    return (
        <div className="slider-main size">
            <label className="slider-header">Size</label>
            <div className="wrapper">
                <div className="slider-item width">
                    <label className="label">Width</label>
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
                <div className="slider-item height">
                    <label className="label">Height</label>
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
        </div>
    )
}