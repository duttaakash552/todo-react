import { useState } from "react"
import './Lottery.css'
import { genTicket } from "./helper"
import Ticket from "./Ticket"

export default function Lottery({n=3, winningCon}) {
    let [num, setNum] = useState(genTicket(n));
    let buyTicket = () => {
        setNum(genTicket(n));
    }

    return (
        <>
            <h3>Lottery Game!</h3>
            <div className="lottery">
                <Ticket ticket={num}/>
            </div>
            <h3>{winningCon(num) && "Congratulations you won the lottery!"}</h3>
            <br></br>
            <button onClick={buyTicket}>Buy Ticket</button>
        </>
    )
}