import { JumbotronContainer } from "./jumbotron.style";

export function Jumbotron({ children }) {
  return (
    <JumbotronContainer className="dds__mb-5">
      <div className="dds__container">
        <div className="dds__row dds__py-5">
          {children}
        </div>
      </div>
    </JumbotronContainer>
  )
}
