import React, { useState } from 'react'
import { add } from '../utils/functions'

export default function AddNumbers() {
    const [ num1, setNum1] = useState(0)
    const [ num2, setNum2] = useState(0)
    const [ showTotal, setShow ] = useState(false)
    return (
        <div>
            <input value={num1} onChange={(e) => setNum1(e.target.value)}/>
            <input value={num2} onChange={(e) => setNum2(e.target.value)}/>
            {
                showTotal
                ?
                <>
                {add(num1, num2)}
                </>
                :
                null
            }
            <button onClick={() => setShow(true)}>Add Values</button>
        </div>
    )
}