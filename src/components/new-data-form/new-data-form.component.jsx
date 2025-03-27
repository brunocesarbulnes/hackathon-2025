import { useEffect, useRef, useState } from "react"

export function NewDataForm() {
  const formRef = useRef(null);
  const selectRef = useRef(null);
  const datePickerRef = useRef(null);

  const [formApi, setFormApi] = useState(null);

  useEffect(() => {
    window.DDS.Select(selectRef.current);
    window.DDS.DatePicker(datePickerRef.current, {
      startDate: new Date(2025, 0, 1),
    });

    const api = window.DDS.Form(formRef.current);

    if (api) {
      setFormApi(api);
    }
  }, []);

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log(formApi.isValid());
  }

  return (
    <form ref={formRef} id="form-733099558" data-dds="form" className="dds__form" onSubmit={handleFormSubmit}>
      <fieldset className="dds__form__section">
        <div className="dds__row">
          <div className="dds__col--1 dds__col--sm-3">
            <div className="dds__form__field">
              <div id="text-input-container-791044237" className="dds__input-text__container">
                <label id="text-input-label-791044237" htmlFor="text-input-control-791044237" className="dds__label dds__label--required">
                  Description
                </label>
                <div className="dds__input-text__wrapper">
                  <input
                    type="text"
                    className="dds__input-text"
                    name="text-input-control-name-791044237"
                    id="text-input-control-791044237"
                    required
                    aria-labelledby="text-input-label-791044237 text-input-helper-791044237"
                  />
                  <div id="text-input-error-791044237" className="dds__invalid-feedback">Enter a description to continue</div>
                </div>
              </div>
            </div>

            <div className="dds__form__field">
              <div className="dds__select" data-dds="select" id="select-219544268" ref={selectRef}>
                <label id="select-label-854808353" htmlFor="select-control-854808353" className="dds__label">
                  Type
                </label>
                <div className="dds__select__wrapper">
                  <select id="select-control-854808353" aria-label="Select label" className="dds__select__field" aria-describedby="select-helper-854808353">
                    <option value="incoming">Incoming</option>
                    <option value="outgoing">Outgoing</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="dds__form__field">
              <div id="text-input-container-182098924" className="dds__input-text__container">
                <label id="text-input-label-182098924" htmlFor="text-input-control-182098924" className="dds__label dds__label--required">
                  Amount
                </label>
                <div className="dds__input-text__wrapper">
                  <input
                    type="number"
                    min="1"
                    step="any"
                    className="dds__input-text"
                    name="text-input-control-name-182098924"
                    id="text-input-control-182098924"
                    aria-labelledby="text-input-label-182098924 text-input-helper-182098924"
                    required
                  />
                  <div id="text-input-error-182098924" className="dds__invalid-feedback">Enter a number to continue</div>
                </div>
              </div>
            </div>

            <div className="dds__form__field">
              <div id="datepicker-640246664" class="dds__date-picker" data-dds="date-picker" ref={datePickerRef}>
                <label id="date-picker-label-884991250" for="date-picker-control-name-884991250" class="dds__label dds__label--required">
                  Date
                </label>
                <div class="dds__date-picker__wrapper">
                  <input
                    type="text"
                    class="dds__date-picker__input"
                    required="true"
                    maxlength="256"
                    id="date-picker-control-884991250"
                    name="date-picker-control-name-884991250"
                    aria-labelledby="date-picker-label-884991250"
                    aria-describedby="date-picker-helper-884991250"
                  />
                  <div id="date-picker-error-884991250" class="dds__date-picker__invalid-feedback">Invalid date</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  )
}
