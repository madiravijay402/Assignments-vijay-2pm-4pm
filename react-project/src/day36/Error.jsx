import React from 'react'

function Error() {
  const [count, setCount] = useState(0)
  const [double, setDouble] = useState(0)

  useEffect(() => {
    setDouble(count * 2)
  }, [count]) // ❌ missing count

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
    </div>
  )
}

export default Error