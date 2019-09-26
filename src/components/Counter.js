import React, { useState } from 'react'

export default function Counter() {
    const [ count, setCount ] = useState(0)
    return (
        <div>
            <p>You've clicked {count} times!</p>
            <button data-testid="counter-button" onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    )
}