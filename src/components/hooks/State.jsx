import React, { useState } from 'react';

function computeInitialCounter() {
    console.log('Some caclulation...')
    return Math.trunc(Math.random() * 20)
}

function State() {
    // const [number, setNumber] = useState(0)
    // const [number, setNumber] = useState(computeInitialCounter)
    const [number, setNumber] = useState(() => {
        return computeInitialCounter()
    })

    const [state, setState] = useState({
        title: 'Counter',
        date: Date.now()
    })

    function increment() {
        // +1 
        //setNumber( number + 1) 

        // +2
        setNumber(prevNumber => { return prevNumber + 1 })
        setNumber(prev => prev + 1)
    }

    /*
      function State() {
      const [number, setNumber] = useState(0)
  
      function increment() {
          // +1 
          //setNumber( number + 1) 
          // +2
          setNumber( prevNumber => {return prevNumber +1})
          setNumber( prev => prev +1)
      }
    */

    function decrement(params) {
        setNumber(number - 1)
    }

    function updateTitle(){
        // form a new object based on the old state
        setState( prev => { 
            return {...prev, title: "new name" }
        })
    }

    return <div>
        <h1>counter: {number}</h1>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>delete</button>

        <button onClick={updateTitle}>edit</button>

        <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>;
}

export default State;
