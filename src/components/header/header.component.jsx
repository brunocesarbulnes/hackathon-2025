export function Header() {
  return (
    <header className="dds__px-3 dds__px-lg-4 dds__d-flex dds__flex-column dds__align-items-start">
      <div className="dds__container">
        <div className="dds__row">
          <div className="dds__col">
            <h1 className="dds__m-0">
              <img
                src="/design-system-logo.png"
                alt=""
                width="221"
                height="55"
                loading="lazy"
                className="dds__h-100 dds__mw-100 dds__mh-100"
              />
              <span className="dds__sr-only">Learning Vanilla</span>
            </h1>
          </div>

          <div className="dds__col dds__d-flex dds__align-items-center dds__justify-content-end">
            <button className="dds__button dds__button--primary dds__button--md" type="button">
              <span className="dds__icon dds__icon--plus-add dds__button__icon--start" aria-hidden="true"></span>
              Add new registry
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}