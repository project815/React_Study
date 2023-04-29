import React, { useCallback, useState } from 'react';
import Box from './Box';

const App = () =>{
    const[size, setSize] = useState(100);
    const[isDark, setIsDark] = useState(false);

    const createBoxStyle = useCallback(()=>{
        return {
            background: 'pink',
            width : `${size}px`,
            height : `${size}px`,
        }
    }, [size])
    return <div style={{
        background: isDark? 'black' : 'white'}}>
        <input tyep='number' value={size} onChange={(e)=>{setSize(e.target.value)}}></input>
        <button onClick={()=>setIsDark(!isDark)}>DARK</button>
        <Box createBoxStyle={createBoxStyle}/>    
    </div>
}

export default App;