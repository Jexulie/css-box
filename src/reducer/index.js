const initialState = {
    boxshadow: true,
    border: false,
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
        default:
            return state
    }
}