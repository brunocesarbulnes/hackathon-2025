/* eslint-disable no-unused-vars */
import { useState } from "react";
import { DataTable, Footer, Header, Jumbotron, MoneyCard } from "./components";

export function App() {
  const [incoming, setIncomming] = useState(0);
  const [outgoing, setOutgoing] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Jumbotron>
          <MoneyCard title={incoming} subtitle="Incoming" />
          <MoneyCard title={outgoing} subtitle="Outgoing" />
          <MoneyCard title={total} subtitle="Total" />
        </Jumbotron>

        <DataTable />
      </main>
      <Footer />
    </>
  )
}
