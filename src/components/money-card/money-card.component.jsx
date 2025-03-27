export function MoneyCard() {
  return (
    <div className="dds__card">
      <div className="dds__card__content">
        <div className="dds__card__header">
          <span className="dds__icon dds__icon--currency-coins dds__card__header__icon" aria-hidden="true"></span>

          <span className="dds__card__header__text">
            <h5 className="dds__card__header__title">Card title</h5>
            <span className="dds__card__header__subtitle">Optional subtitle</span>
          </span>
        </div>
      </div>
    </div>
  )
}