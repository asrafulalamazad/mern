import React, {useState} from 'react';

const HomeBanner = (props) => {
    const [color, setColor]=useState("white")
    const newColor = ()=>{
        setColor("Black")
    }


    return (
        <div>
            <h1>{color}</h1>
            <button onClick= {newColor}>Change</button>
        </div>
    );
};

export default HomeBanner;