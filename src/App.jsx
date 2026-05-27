import './App.css'
import Lottery from './Lottery'
import {sumTicket} from './helper.js'

function App() {

  let winningCon = (ticket) => {
    return sumTicket(ticket) === 15;
  }

  return (
    <>
      <Lottery n={3} winningCon={winningCon}/>
    </>
  )
}

export default App
