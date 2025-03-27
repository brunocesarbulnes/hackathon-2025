import { useEffect, useRef, useState } from "react"

export function NewDataModal() {
  const modalRef = useRef(null);

  const [modalApi, setModalApi] = useState(null);

  useEffect(() => {
    const api = window.DDS.Modal(modalRef.current, {
      trigger: "#modal-963464765-trigger",
      localization: {
        srCloseLabel: "Close dialog"
      }
    });

    setModalApi(api);
  }, []);

  function closeModal() {
    modalApi.close();
  }

  return (
    <div ref={modalRef} id="modal-963464765" role="dialog" data-dds="modal" className="dds__modal" aria-labelledby="modal-headline-627930623">
      <div className="dds__modal__content">
        <div className="dds__modal__header">
          <h3 className="dds__modal__title" id="modal-headline-627930623">Add new registry</h3>
        </div>

        <div id="modal-body-627930623" className="dds__modal__body">
          <p>
            Small, light, and stylish laptops and 2-in-1s designed for ultimate productivity. A new era of collaboration and connectivity to
            work anywhere. XPS laptops and 2-in-1s are precision crafted with premium materials, featuring stunning displays and the
            performance you demand to express your creative self and your big ideas.
            <a href="https://www.dell.com">dell.com</a>
          </p>
        </div>

        <div className="dds__modal__footer">
          <button className="dds__button dds__button--secondary dds__button--md" type="button" name="modal-primary-button" onClick={closeModal}>
            Cancel
          </button>
          <button className="dds__button dds__button--md" type="button" name="modal-secondary-button" onClick={closeModal}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}