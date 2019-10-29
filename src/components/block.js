import React from 'react';


function Block(props) {

    const styling = {
            height:"100px",
            width:"100px",
            border:"solid 2px",
            borderColor: props.borderColor,
            backgroundColor: props.backColor,
            display: "flex",
    };

    return (
            <div style={styling}></div>
    );
}

export default Block;