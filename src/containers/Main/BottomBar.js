import React from 'react';

export default props => {
    console.log(props)
    return (
        <div className="BottomBar">
            <button className={props.style.sliders.size ? "btn opened" : "btn closed"} onClick={() => props.buttons('size')}>Size</button>
            <button className={props.style.sliders.color ? "btn opened" : "btn closed"} onClick={() => props.buttons('color')}>Color</button>
            <button className={props.style.sliders.boxshadow ? "btn opened" : "btn closed"} onClick={() => props.buttons('boxshadow')}>Box-Shadow</button>
        </div>
    )
}