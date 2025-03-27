import { useEffect, useRef, useState } from "react"
import { NewDataForm } from "../new-data-form/new-data-form.component";

export function NewDataModal({ onFormSubmit }) {
  const modalRef = useRef(null);

  const [modalApi, setModalApi] = useState(null);

  useEffect(() => {
    const api = window.DDS.Modal(modalRef.current, {
      trigger: "#modal-963464765-trigger",
      localization: {
        srCloseLabel: "Close dialog"
      }
    });

    if (api) {
      setModalApi(api);
    }
  }, [modalApi]);

  function closeModal() {
    modalApi.close();
  }

  function handleFormDataSubmit(data) {
    onFormSubmit(data);
    closeModal();
  }

  return (
    <div ref={modalRef} id="modal-963464765" role="dialog" data-dds="modal" className="dds__modal" aria-labelledby="modal-headline-627930623">
      <div className="dds__modal__content">
        <div className="dds__modal__header">
          <h3 className="dds__modal__title" id="modal-headline-627930623">Add new registry</h3>
        </div>

        <div id="modal-body-627930623" className="dds__modal__body">
          <NewDataForm onFormSubmit={handleFormDataSubmit} />
        </div>

        <div className="dds__modal__footer">
          <button className="dds__button dds__button--secondary dds__button--md" type="button" name="modal-primary-button" onClick={closeModal}>
            Cancel
          </button>
          <button className="dds__button dds__button--md" type="submit" name="modal-secondary-button" form="form-733099558">
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}