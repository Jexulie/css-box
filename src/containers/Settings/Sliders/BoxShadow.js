import React from 'react';

export default props => {
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
        props.boxshadowChange({
            offsetX: offsetX.value,
            offsetY: offsetY.value,
            blur: blur.value,
            boxshadowColor : {
                R: boxshadowColor.R.value,
                G: boxshadowColor.G.value,
                B: boxshadowColor.B.value,
                A:boxshadowColor.A.value
            }
        })
    }

    return (
        <div className="slider-main shadow">
            <label className="slider-header">Box-Shadow</label>
            <div className="wrapper">
                <div className="ops1">
                    <div className="slider-item offsetX">
                        <label className="label">Offset-X</label>
                        <input
                            className="slider"
                            id="offsetX"
                            type="range" 
                            min="-100" 
                            max="100" 
                            value={props.style.boxshadowProps.offsetX}
                            ref={i => offsetX = i}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="slider-item offsetY">
                        <label className="label">Offset-Y</label>
                        <input
                            className="slider"
                            id="offsetY"
                            type="range" 
                            min="-100" 
                            max="100" 
                            value={props.style.boxshadowProps.offsetY}
                            ref={i => offsetY = i}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="slider-item blur">
                        <label className="label">Blur</label>
                        <input
                            className="slider"
                            id="blur"
                            type="range" 
                            min="0" 
                            max="100" 
                            value={props.style.boxshadowProps.blur}
                            ref={i => blur = i}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="ops2">
                    <div className="slider-item Red">
                        <label className="label">Red</label>
                        <input
                            className="slider"
                            id="Red"
                            type="range" 
                            min="0" 
                            max="255" 
                            value={props.style.boxshadowProps.boxshadowColor.R}
                            ref={i => boxshadowColor.R = i}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="slider-item Green">
                        <label className="label">Green</label>
                        <input
                            className="slider"
                            id="Green"
                            type="range" 
                            min="0" 
                            max="255" 
                            value={props.style.boxshadowProps.boxshadowColor.G}
                            ref={i => boxshadowColor.G = i}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="slider-item Blue">
                        <label className="label">Blue</label>
                        <input
                            className="slider"
                            id="Blue"
                            type="range" 
                            min="0" 
                            max="255" 
                            value={props.style.boxshadowProps.boxshadowColor.B}
                            ref={i => boxshadowColor.B = i}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="slider-item Alpha">
                        <label className="label">Alpha</label>
                        <input
                            className="slider"
                            id="Alpha"
                            type="range" 
                            min="0" 
                            max="1"
                            step="0.01"
                            value={props.style.boxshadowProps.boxshadowColor.A}
                            ref={i => boxshadowColor.A = i}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}