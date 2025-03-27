import { useState } from "react";
import { DataTable, Footer, Header, Jumbotron, MoneyCard, NewDataModal } from "./components";

export function App() {
  const [data, setData] = useState([]);

  const incoming = data.filter((row) => row.type === "incoming").reduce((acc, row) => acc + parseInt(row.amount), 0);
  const outgoing = data.filter((row) => row.type === "outgoing").reduce((acc, row) => acc + parseInt(row.amount), 0);
  const total = incoming - outgoing;

  const addNewData = (newData) => {
    setData([...data, newData]);
  };

  return (
    <>
      <Header />
      <main>
        <Jumbotron>
          <MoneyCard title={incoming} subtitle="Incoming" />
          <MoneyCard title={outgoing} subtitle="Outgoing" />
          <MoneyCard title={total} subtitle="Total" />
        </Jumbotron>

        <DataTable data={data} />

        <NewDataModal onFormSubmit={addNewData} />
      </main>
      <Footer />
    </>
  )
}
