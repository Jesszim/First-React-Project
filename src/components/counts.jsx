import { useState } from 'react';

const Counts = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>👍</button>
            <button onClick={() => setCount(count - 1)}>👎</button>
            <h3>👍: {count}</h3>
        </div>
    )
}
export default Counts