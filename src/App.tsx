import { useState } from "react";
import Lottery from "./Lottery";

function App() {
  const [ticketN, setTicketN] = useState(1);

  return (<div key={ticketN}>
    <Lottery ticketN={ticketN} setTicketN={setTicketN} />
  </div>
  )
}

export default App