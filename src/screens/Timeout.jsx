import React from 'react'

const Timeout = () => {
  return (
    <div><h1>Timeout Observed</h1>
    <button onClick={() => window.location.reload()} ></button>
    </div>
  )
}

export default Timeout