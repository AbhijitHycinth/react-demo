import React from 'react';

const Greetings = (props)=>{
    return(<>
        <h1>Welcome {props.name}</h1>
        <h1>Welcome {props.children}</h1>
    </>);
};

export default Greetings;