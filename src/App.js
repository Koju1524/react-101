import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(previousCount => previousCount + 1)
  const multiple = () => setCount(previousCount => previousCount * 2)

  const divideBy3 = () => setCount(previousCount => {
    return previousCount % 3 === 0 ? previousCount / 3 : previousCount
  })

  const decrement = () => setCount(previousCount => previousCount -1)
  const reset = () => setCount(0)

  return (
    <>
      <div>
        count: { count }
      </div>
      <button onClick={increment}>+1</button>
      <button onClick={multiple}>*2</button>
      <button onClick={divideBy3}>%3</button>

      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>

    </>
  )
}

export default App