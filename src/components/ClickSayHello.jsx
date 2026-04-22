import React, { useEffect, useState } from 'react'
import useUpdateDocTitle from '../hooks/useUpdateDocTitle'


function ClickSayHello() {

    const [text, setText] = useState('');
    const [isTrue, setIsTrue] = useState(true)

    useUpdateDocTitle(text);
    useEffect(()=>{
        if (isTrue){
            setText("test")
        }else{
            setText("test 2")
        }
    }, [isTrue])

    return (
        <div>
        <button onClick={() => setIsTrue(!isTrue)}>Cliquez</button>
        </div>
    )
}

export default ClickSayHello
