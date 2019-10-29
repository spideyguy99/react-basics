import React from 'react';
import Style from '../Style';


function rectangle() {
    return (
        <div>
            <div style={Style.box}></div>
            <div style={Style.box}></div>
            <div style={Style.box}></div>
        </div>
    );
}

export default rectangle;