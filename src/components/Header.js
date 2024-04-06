import React, { useState } from 'react';

const Header = (props) => {
    const {add}=props
    const [text, setText] = useState("")
    const handle_add =()=>{
        add(text)
        setText('')
    }
    return (
        <div className='header'>
            <input type='text' placeholder='Enter your todo' value={text} onChange={(e)=>setText(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key==="Enter" && text){
                        handle_add()
                    }
                }}
            />
        </div>
    );
}

export default Header;
