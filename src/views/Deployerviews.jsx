import React from "react";
import { useState } from "react";

export const Setwager = ({deploy}) => {
    const [wager, setWager] = useState(0)
    return(
       <div className="set_wager">
        <input type={'number'}
        value = {wager}
        onChange = {(e) => setWager(e.target.value)}
        min={0}
        />
        <button onClick={() => deploy(wager)}>
            set Wager
        </button>
       </div> 
    )
}

export const AcceptFortune = ({fortune, accept}) => {
    const splited = fortune.split("")
    const alph = 'abcdefghijklmnopqrstuvwsyz ';
   const filtered = splited.filter(x => alph.includes(x.toLowerCase())).join('')
    return (
        <div>
             <textarea className='textarea' value={filtered}/>
             <button onClick={() => accept(true)}>Accept</button>
             <hr />
             <button onClick={() => accept(false)}>Decline</button>
        </div>
    )
}

export const DeppOutcome = () => {
    return (
        <div>
            <h2>You accept the Fortune</h2>
            <p>Money is Transferred To Bob</p>
             <button onClick={() => window.location.reload()}>Back To Home</button>
        </div>
    )
}