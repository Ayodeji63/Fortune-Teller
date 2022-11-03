import './index.css'

export function SelectRole({setAsDeployer}){
  return(
    <div className='section'>
      <button className='button' onClick={() => setAsDeployer(true)}>Deploy Contract</button>
      <hr />
      <button className='button' onClick={() => setAsDeployer(false)}>Attach to existing contract</button>
    </div>
  )
}