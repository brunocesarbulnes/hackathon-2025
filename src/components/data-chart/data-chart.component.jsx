import { useEffect } from "react"

export function DataChart() {
  useEffect(() => {
    window.DDV.StackedArea({
      handlers: {},
      legend: { position: "right", inactive: false },
      sanitize: true,
      fieldId: "year",
      xAxes: { title: "Year" },
      yAxes: { title: "Amount" },
      data: [
        { year: "1892", "Incoming": 34, "Outgoing": 50 },
        { year: "1911", "Incoming": 85, "Outgoing": 93 },
        { year: "1988", "Incoming": 39, "Outgoing": 14 },
        { year: "2004", "Incoming": 30, "Outgoing": 67 },
        { year: "2012", "Incoming": 59, "Outgoing": 44 },
        { year: "2022", "Incoming": 29, "Outgoing": 58 },
      ],
      translations: {},
      target: "#stacked-area_2530643844",
    });
  }, []);

  return (
    <div className="ddv__root">
      <div className="dds__container dds__mb-5">
        <div className="dds__row">
          <div className="dds__col">
            <div className="dds__card" role="figure">
              <div className="dds__card__content">
                <div className="dds__card__header">
                  <div className="dds__card__header__text">
                    <h5 id="ddvChartTitle" className="dds__card__header__title" tabindex="0">Stacked area chart</h5>
                    <span id="ddvChartSubtitle" className="dds__card__header__subtitle" tabindex="0">Optional subtitle</span>
                  </div>
                </div>

                <div className="dds__card__body">
                  <div id="stacked-area_2530643844" data-ddv="stacked-area"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
