import React from 'react';

export default props => {
    //TODO: add blur
    let sandbox = {
        // filter: `blur${style.filter}`,
        width: props.style.size.width,
        height: props.style.size.height,
        backgroundColor: `rgba(
            ${props.style.backgroundColor.R},
            ${props.style.backgroundColor.G},
            ${props.style.backgroundColor.B},
            ${props.style.backgroundColor.A}
        )`,
        boxShadow: `
            ${props.style.boxshadowProps.offsetX}px 
            ${props.style.boxshadowProps.offsetY}px 
            ${props.style.boxshadowProps.blur}px 
        rgba(
            ${props.style.boxshadowProps.boxshadowColor.R},
            ${props.style.boxshadowProps.boxshadowColor.G},
            ${props.style.boxshadowProps.boxshadowColor.B},
            ${props.style.boxshadowProps.boxshadowColor.A}
        )`        
    }

    return (
        <div className="Scene">
            <div style={sandbox}></div>
        </div>
    )
}