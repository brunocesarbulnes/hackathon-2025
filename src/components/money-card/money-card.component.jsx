export function MoneyCard({ title, subtitle }) {
  return (
    <div className="dds__col">
      <div className="dds__card">
        <div className="dds__card__content">
          <div className="dds__card__header">
            <span className="dds__icon dds__icon--currency-coins dds__card__header__icon" aria-hidden="true"></span>

            <span className="dds__card__header__text">
              <h5 className="dds__card__header__title">R$ {title}</h5>
              <span className="dds__card__header__subtitle">{subtitle}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}