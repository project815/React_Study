import { useState } from 'react';



function Test(){
    const [names, setName] = useState(['홍길동', '김민수']);
    const [name, input] =useState('');

    /*이름 값 받기*/
    const handleInputChange = (e) => {
        input(e.target.value)
    }
    /*이름 추가*/
    const addName = (e) =>{
        e.preventDefault();
        setName((prev) =>{
            return [...prev, name];
        })
    }
    
return <div>
        <form onSubmit={addName}>
            <input type='text'onChange={handleInputChange} value={name}></input>
            <button>UPLOAD</button>
        </form>
                {names.map((n, inx)=>{
            return <p key={inx}>{n}</p>
        })}
    </div>

}
export default Test;