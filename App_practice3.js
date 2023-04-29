import React, {useEffect, useRef} from 'react';

const App = ()=>{
    const inputRef = useRef('hi');

    useEffect(()=>{
        inputRef.current.focus();
        console.log(inputRef);
    }, [])

    const login = ()=>{
        alert(`환영합니다. ${inputRef.current.value}`);
    }
    return <div>
        <input ref={inputRef}type='text' placeholder='username'></input>
        <button onClick={login}>로그인</button>
    </div>
}

export default App;