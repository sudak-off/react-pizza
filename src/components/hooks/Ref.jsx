import { useState, useEffect, useRef } from "react";

// let renderCount = 1;
function Ref() {
    // const [renderCount, setRenderCount] = useState(1);
    const [value, setValue] = useState('initial');
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('')

    useEffect(() => {
        // renderCount.current ++
        // console.log(inputRef.current.value);
        prevValue.current = value
    }, [value]);

    const focus = () => inputRef.current.focus()

    return (
        <div>
            <h1>Number of render: {renderCount.current}</h1>
            <h2>Previous state: {prevValue.current}</h2>
            <input
                ref={inputRef}
                text={"text"}
                onChange={e => {
                    setValue(e.target.value)
                }} value={value} />
            <button onClick={focus}>focus</button>
        </div>
    );
}

export default Ref;
