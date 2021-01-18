import {useEffect, useState} from 'react';

const Clock = (props)=>{
    const [time, setTime] = useState(new Date()),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();

    const timerId = setInterval(()=>{
        setTime(new Date());
    }, 1000);

    useEffect(()=>{
        console.log("hello");
    },[seconds])

    return (
        <>
        Clock:
        <h1>{hours}:{minutes}:{seconds}</h1>
        </>
    );
}

export default Clock;