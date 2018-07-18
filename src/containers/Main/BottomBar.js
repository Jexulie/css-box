import React from 'react';

export default props => {
    return (
        <div className="BottomBar">
            <button onClick={() => props.buttons('size')}>Size</button>
            <button onClick={() => props.buttons('color')}>Color</button>
            <button onClick={() => props.buttons('boxshadow')}>Box-Shadow</button>
        </div>
    )
}