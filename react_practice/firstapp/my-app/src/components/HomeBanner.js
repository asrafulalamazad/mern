import React from 'react';

const HomeBanner = (props) => {
    return (
        <div>
            <h1>Welcome</h1>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <h3>{props.info.name}</h3>
            <h3>{props.info.city}</h3>
        </div>
    );
};

export default HomeBanner;