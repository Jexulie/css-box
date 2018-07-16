import React from 'react';
import Color from './Settings/Color'
import BoxShadow from './Settings/BoxShadow';

const Settings = props => {
    return (
        <div className="Settings">
            <Color/>
            <hr/>
            <BoxShadow/>
        </div>
    )
}

export default Settings;