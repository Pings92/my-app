import { useEffect, useState } from "react"

function FunctionCount() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(()=>{
        console.log("je tente autre chose")
        // setTimeout(() => {
            document.title = `Vous avez cliqué ${count} fois`
        // }, 5000);
    }, [])

    return (
        <div>
            <h1>{count}</h1>
            <input type="text" value={name} onChange={e=> setName(e.target.value)} />
            <button onClick={() => setCount(count +1)}>FunctionCount avec hook</button>
        </div>
    )
}
export default FunctionCount