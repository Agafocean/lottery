import { useState } from "react";
import Lottery from "./Lottery";

function App() {
  const [ticketN, setTicketN] = useState(1);
  const [winsN, setWinsN] = useState(0);

  return (<div key={ticketN}>
    <Lottery ticketN={ticketN} setTicketN={setTicketN} winsN={winsN}  setWinsN={setWinsN} />
  </div>
  )
}

export default App