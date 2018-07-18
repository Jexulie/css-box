export const changeBackgroundColor = values => ({
    type: 'CHANGE_BACKGROUND_COLOR',
    values
});

export const changeBoxshadow = values => ({
    type: 'CHANGE_BOX_SHADOW',
    values
});

export const changeSize = values => ({
    type: 'CHANGE_SIZE',
    values
});

export const changeClipPath = values => ({
    type: 'CHANGE_CLIP_PATH',
    values
});

export const buttonChange = stylename => {
    switch(stylename){
        case 'size':
            return {
                type: 'TOGGLE_SIZE'
            }
        case 'color':
            return {
                type: 'TOGGLE_COLOR'
            }
        case 'boxshadow':
            return {
                type: 'TOGGLE_BOXSHADOW'
            }
        case 'clippath':
            return {
                type: 'TOGGLE_CLIPPATH'
            }
        default: 
            return null
    }
}