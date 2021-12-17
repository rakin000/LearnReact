import React, {useState,useEffect} from 'react';


function ShowHide(){
    const [status,setStatus] = useState(false);

    return <>
        <button className='btn' onClick={() => setStatus(!status)} >Show/Hide</button>
        {status ? <Item/> : <></> }
    </>;
}

function Item(){
    const [windowSize,setWindowSize] = useState([window.innerWidth,window.innerHeight]);
    const resize = () => {
        setWindowSize([window.innerWidth,window.innerHeight]);
    }
    useEffect(()=>{
        window.addEventListener('resize',resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    },[]);

    return <><h4>Window Width: {windowSize[0]} </h4>
        <h4>Window Height: {windowSize[1]}</h4>    
    </>
}


export default ShowHide;