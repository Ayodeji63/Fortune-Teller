import React, {useState} from 'react'

export const AcceptPrice = ({price, accept, decline}) => {
    return (
        <div>
            <h1>Price : {price} Algo</h1>
            <button className="button" onClick={() => accept()}>Accept Wager</button>
            <hr />
            <button className="button" onClick={() => decline()}>
                Decline Wager
            </button>
        </div>
    )
}




export const SetFortune = ({tell, fortune, setFortune}) => {
  return (
  
            <form onSubmit={(e) => {e.preventDefault()}}>
                <h2>Tell a Fortune</h2>
                <textarea placeholder="Input Fortune here" name="" id="" cols="30" rows="10"  value={fortune} onChange={(e) => setFortune(e.target.value)}/>
                <br />
                        <button onClick={() => tell(fortune)}>Tell Fortune</button>
            </form>
        
     
  )
}

export const AttOutcome = () => {
    return (
        <div>
            <h3>Alice Accepts the Fortune</h3>
            <button onClick={() => window.location.reload()}>Back To Home</button>
        </div>
    )
}