import { useEffect, useState } from "react";
import { DataChart, DataTable, Footer, Header, Jumbotron, MoneyCard, NewDataModal } from "./components";

export function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const incoming = data.filter((row) => row.type === "incoming").reduce((acc, row) => acc + parseInt(row.amount), 0);
  const outgoing = data.filter((row) => row.type === "outgoing").reduce((acc, row) => acc + parseInt(row.amount), 0);
  const total = incoming - outgoing;

  const addNewData = (newData) => {
    setData([...data, newData]);
  };

  useEffect(() => {
    const storedData = window.localStorage.getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData));
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    window.localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <Header />
      <main>
        {!isLoading && (
          <>
            <Jumbotron>
              <MoneyCard title={incoming} subtitle="Incoming" />
              <MoneyCard title={outgoing} subtitle="Outgoing" />
              <MoneyCard title={total} subtitle="Total" />
            </Jumbotron>

            <DataChart />

            <DataTable data={data} />

            <NewDataModal onFormSubmit={addNewData} />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
