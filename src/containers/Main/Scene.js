import React from 'react';

export default props => {
    console.log(props)
    //TODO: add blur | upload image and play on that | filters...

    let sandbox_shadow = {
        // filter: `blur${style.filter}`,
        width: `${props.style.size.width}px`,
        height: `${props.style.size.height}px`,
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

    let sandbox_clip = {
        width: `${props.style.size.width}px`,
        height: `${props.style.size.height}px`,
        backgroundColor: `rgba(
            ${props.style.backgroundColor.R},
            ${props.style.backgroundColor.G},
            ${props.style.backgroundColor.B},
            ${props.style.backgroundColor.A}
        )`,
        clipPath: `
            polygon(
                ${props.style.clipPath.x1}% ${props.style.clipPath.y1}%,
                ${props.style.clipPath.x2}% ${props.style.clipPath.y2}%,
                ${props.style.clipPath.x3}% ${props.style.clipPath.y3}%,
                ${props.style.clipPath.x4}% ${props.style.clipPath.y4}%
            )`
    }

    return (
        <div className="Scene">
            <div style={props.style.sliders.clippath ? sandbox_clip : sandbox_shadow}></div>
        </div>
    )
}