import "./Ticket.css"
import TicketNum from "./TicketNum"

export default function Ticket({ticket}) {
    return (
        <div className="Ticket">
        {ticket.map((t,idx) => <TicketNum num={t} key={idx}/>)}
        </div>
    );
}