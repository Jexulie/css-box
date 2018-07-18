const initialState = {
    sliders: {
        clippath: false,
        size: false,
        boxshadow: false,
        border: false,
        color: false,
        filter: false,
        transform: false,
        transition: false,
        animation: false
    },
    clipPath: {
        type: 'polygon',
        x1: 0,
        y1: 100,
        x2: 100,
        y2: 100,
        x3: 100,
        y3: 0,
        x4: 0,
        y4: 0
    },
    size: {
        width: 250,
        height: 250
    },
    backgroundColor: {
        R: 0,
        G: 60,
        B: 90,
        A: 1
    },
    boxshadowProps: {
        offsetX: 0,
        offsetY: 0,
        blur: 0,
        boxshadowColor: {
            R: 0,
            G: 0,
            B: 0,
            A: 1
        }
    }
    
}

export default (state=initialState, action) => {
    switch(action.type){
        /* Slider Changes */
        case 'CHANGE_BACKGROUND_COLOR':
            return {
                ...state,
                backgroundColor: {
                    ...state.backgroundColor,
                    R: action.values.R,
                    G: action.values.G,
                    B: action.values.B,
                    A: action.values.A
                }
            }
        case 'CHANGE_BOX_SHADOW':
            return {
                ...state,
                boxshadowProps: {
                    offsetX: action.values.offsetX,
                    offsetY: action.values.offsetY,
                    blur: action.values.blur,
                    boxshadowColor: {
                        R: action.values.boxshadowColor.R,
                        G: action.values.boxshadowColor.G,
                        B: action.values.boxshadowColor.B,
                        A: action.values.boxshadowColor.A
                    }
                }
            }
        case 'CHANGE_SIZE':
            return {
                ...state,
                size: {
                    ...state.size,
                    width: action.values.width,
                    height: action.values.height
                }
            }
        case 'CHANGE_CLIP_PATH':
            return {
                ...state,
                clipPath: {
                    ...state.clipPath,
                    x1: action.values.x1,
                    y1: action.values.y1,
                    x2: action.values.x2,
                    y2: action.values.y2,
                    x3: action.values.x3,
                    y3: action.values.y3,
                    x4: action.values.x4,
                    y4: action.values.y4
                }
            }
        /* Buttons */
        case 'TOGGLE_SIZE':
            return {
                ...state,
                sliders: {
                    ...state.sliders,
                    size: !state.sliders.size
                }
            }
        case 'TOGGLE_COLOR':
            return {
                ...state,
                sliders: {
                    ...state.sliders,
                    color: !state.sliders.color
                }
            }
        case 'TOGGLE_BOXSHADOW':
        if(state.sliders.clippath === true && state.sliders.boxshadow === false){
            return {
                ...state,
                sliders: {
                    ...state.sliders,
                    boxshadow: true,
                    clippath: false
                }
            }
        }else{
            return {
                ...state,
                sliders: {
                    ...state.sliders,
                    boxshadow: !state.sliders.boxshadow
                }
            }
        }
        case 'TOGGLE_CLIPPATH':
        if(state.sliders.clippath === false && state.sliders.boxshadow === true){
            return {
                ...state,
                sliders: {
                    ...state.sliders,
                    boxshadow: false,
                    clippath: true
                }
            }
        }else{
            return {
                ...state,
                sliders: {
                    ...state.sliders,
                    clippath: !state.sliders.clippath
                }
            }
        }
        default:
            return state
    }
}