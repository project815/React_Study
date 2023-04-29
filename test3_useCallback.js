import React, { useCallback, useEffect, useRef, useState } from 'react';

const App = () =>{
    const [number, setNember] = useState(0);
    const [toggle, setToggle] = useState(true);

    const SomeFunction = useCallback(()=>{
        console.log(`someFuc : number : ${number}`)
    }, [number])

    useEffect(()=>{
        console.log(`someFunction이 변경되었습니다.`);
    }, [SomeFunction]);

    return <div>
        <input type='text' value={number} onChange={(e)=>{
            setNember(e.target.value);
        }}></input>
        <button onClick={()=>setToggle(!toggle)}>{`${toggle}`}</button>
        <button onClick={SomeFunction}>Click</button>

        
    </div>

}

export default App;