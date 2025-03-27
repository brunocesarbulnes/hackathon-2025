import { Footer } from "./components/footer/footer.component";
import { Header } from "./components/header/header.component";
import { Jumbotron } from "./components/jumbotron/jumbotron.component";
import { MoneyCard } from "./components/money-card/money-card.component";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Jumbotron>
          <div className="dds__col">
            <MoneyCard />
          </div>
          <div className="dds__col">
            <MoneyCard />
          </div>
          <div className="dds__col">
            <MoneyCard />
          </div>
        </Jumbotron>
      </main>
      <Footer />
    </>
  )
}
