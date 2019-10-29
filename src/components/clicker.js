import React from 'react';

function Clicker() {
    const [number, changeNumber] = React.useState(1);

    let style ={
        height: "100px",
        width: "100px",
        border: "solid 2px",
        borderColor: "green",
        backgroundColor: "blue",
        display: "flex",
    };

    if(number===1){
        style= {
            height: "100px",
            width: "100px",
            border: "solid 2px",
            borderColor: "green",
            backgroundColor: "blue",
            display: "flex",
        }
    }else if(number===2){
            style={
                height: "100px",
                width: "100px",
                border: "solid 2px",
                borderColor: "blue",
                backgroundColor: "red",
                display: "flex",
            }
    }else if(number===3){
            style={
                height: "100px",
                width: "100px",
                border: "solid 2px",
                borderColor: "red",
                backgroundColor: "green",
                display: "flex",
            }
    }

    function onClick() {
        if(number===3){
            changeNumber(1);
        }else{
            changeNumber(number+1)
        }
    }

    return (
        <div>
            <div className="block" style={style} onClick={function(){onClick()}}> Click Me!!</div>
        </div>
    );
}

export default Clicker;