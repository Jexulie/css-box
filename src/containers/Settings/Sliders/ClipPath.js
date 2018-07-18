import React from 'react';

export default props => {

    let x1;
    let y1;
    let x2;
    let y2;
    let x3;
    let y3;
    let x4;
    let y4;

    let handleChange = e => {
        props.clipAttr({
            x1: x1.value,
            y1: y1.value,
            x2: x2.value,
            y2: y2.value,
            x3: x3.value,
            y3: y3.value,
            x4: x4.value,
            y4: y4.value
        });
    }

    return (
        <div className="slider-main clip-path">
            <label className="slider-header">Clip-Path</label>
            <div className="wrapper">
                <div className="slider-item x1">
                    <label className="label">x1</label>
                    <input
                        className="slider"
                        id="x1"
                        type="range" 
                        min="0" 
                        max="100" 
                        value={props.style.clipPath.x1}
                        ref={i => x1 = i}
                        onChange={handleChange}
                    />
                </div>
                <div className="slider-item y1">
                    <label className="label">y1</label>
                    <input
                        className="slider"
                        id="y1"
                        type="range" 
                        min="0" 
                        max="100" 
                        value={props.style.clipPath.y1}
                        ref={i => y1 = i}
                        onChange={handleChange}
                    />
                </div>
                <div className="slider-item x2">
                    <label className="label">x2</label>
                    <input
                        className="slider"
                        id="x2"
                        type="range" 
                        min="0" 
                        max="100" 
                        value={props.style.clipPath.x2}
                        ref={i => x2 = i}
                        onChange={handleChange}
                    />
                </div>
                <div className="slider-item y2">
                    <label className="label">y2</label>
                    <input
                        className="slider"
                        id="y2"
                        type="range" 
                        min="0" 
                        max="100" 
                        value={props.style.clipPath.y2}
                        ref={i => y2 = i}
                        onChange={handleChange}
                    />
                </div>
                <div className="slider-item x3">
                    <label className="label">x3</label>
                    <input
                        className="slider"
                        id="x3"
                        type="range" 
                        min="0" 
                        max="100" 
                        value={props.style.clipPath.x3}
                        ref={i => x3 = i}
                        onChange={handleChange}
                    />
                </div>
                <div className="slider-item y3">
                    <label className="label">y3</label>
                    <input
                        className="slider"
                        id="y3"
                        type="range" 
                        min="0" 
                        max="100" 
                        value={props.style.clipPath.y3}
                        ref={i => y3 = i}
                        onChange={handleChange}
                    />
                </div>
                <div className="slider-item x4">
                    <label className="label">x4</label>
                    <input
                        className="slider"
                        id="x4"
                        type="range" 
                        min="0" 
                        max="100" 
                        value={props.style.clipPath.x4}
                        ref={i => x4 = i}
                        onChange={handleChange}
                    />
                </div>
                <div className="slider-item y4">
                    <label className="label">y4</label>
                    <input
                        className="slider"
                        id="y4"
                        type="range" 
                        min="0" 
                        max="100" 
                        value={props.style.clipPath.y4}
                        ref={i => y4 = i}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    )
}