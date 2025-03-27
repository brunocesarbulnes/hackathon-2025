import { JumbotronContainer } from "./jumbotron.style";

export function Jumbotron({ children }) {
  return (
    <JumbotronContainer>
      <div className="dds__container">
        <div className="dds__row">
          {children}
        </div>
      </div>
    </JumbotronContainer>
  )
}
