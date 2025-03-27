import styled from "styled-components";
import { Footer } from "./components/footer/footer.component";
import { Header } from "./components/header/header.component";
import { Jumbotron } from "./components/jumbotron/jumbotron.component";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

export function App() {
  return (
    <>
      <Header />
      <main>
        <Jumbotron>
          <Title>Tutupom?</Title>
        </Jumbotron>
      </main>
      <Footer />
    </>
  )
}
