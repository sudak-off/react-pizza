import { useState, useEffect } from "react";


function Effect() {
    const [type, setType] = useState('users');
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({
        x: 0, y: 0
    });

    useEffect(() => {
        // if we want to track every render of a component
        // console.log("render");
    })

    // useEffect(() =>{
    //     console.log("Type: ", type);
    // },[type]) // useEffect will follow the changes 

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))

        return () => { 
            console.log("clear type");
        }
    }, [type]) // useEffect will follow the changes 

    useEffect(() => {
        console.log('ComponentDidMount...');
        window.addEventListener('mousemove', mouseMoveHandler)
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    }

    return <div>
        <h1>Result: {type}</h1>

        <button onClick={() => setType("users")}>User</button>
        <button onClick={() => setType("todos")}>Todos</button>
        <button onClick={() => setType("post")}>Post</button>

        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>;
}

export default Effect;
