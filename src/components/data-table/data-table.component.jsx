import { useEffect, useRef, useState } from "react";
import { TableContainer } from "./data-table.style";

export function DataTable({ data = [] }) {
  const tableRef = useRef(null);
  const paginationRef = useRef(null);

  const [tableApi, setTableApi] = useState(null);

  useEffect(() => {
    const api = window.DDS.Table(tableRef.current, {
      data: [],
      columns: [
        { value: "ID", width: 120, sortBy: "descending" },
        { value: "Description" },
        { value: "Type", width: 120 },
        { value: "Amount", width: 120 },
        { value: "Date", width: 120 }
      ],
      subscribe: ["table-719080633-pagination"],
      pagination: { currentPage: 1, rowsPerPage: 6, total: data.length },
    });

    window.DDS.Pagination(paginationRef.current, {
      subscribe: ["table-719080633"],
    });

    if (api) {
      setTableApi(api);
    }
  }, []);

  useEffect(() => {
    if (!tableApi) {
      return;
    }

    if (!data) {
      return;
    }

    const formattedData = data.map((row, index) => {
      const { description, type, amount, date } = row;

      return ({
        columns: [
          { value: index + 1 },
          { value: description },
          { value: type },
          { value: amount },
          { value: date }
        ]
      });
    });

    tableApi.setData(formattedData);
  }, [data, tableApi]);

  return (
    <div className="dds__container dds__mb-5">
      <div className="dds__row">
        <div className="dds__col">
          <TableContainer id="table-719080633" className="dds__table" role="table" ref={tableRef} />

          <div className="dds__pagination" data-dds="pagination" id="table-719080633-pagination" role="navigation" aria-label="Pagination" ref={paginationRef}>
            <div className="dds__pagination__summary">
              <label className="dds__pagination__per-page-label" for="pagination-per-page-table-719080633-pagination">Items per page</label>
              <div className="dds__select dds__select--sm dds__pagination__per-page-select" data-dds="select" id="select-773332014">
                <div className="dds__select__wrapper">
                  <select
                    id="select-control-773332014"
                    aria-label="Select label"
                    className="dds__select__field"
                    aria-describedby="select-helper-773332014"
                    required
                  >
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div className="dds__pagination__range" aria-live="polite">
                <span className="dds__pagination__range-start"></span>
                –
                <span className="dds__pagination__range-end"></span>
                <span className="dds__pagination__range-total-label">
                  {` `}of{` `}
                  <span className="dds__pagination__range-total"></span>
                  {` `}items{` `}
                </span>
              </div>
            </div>
            <div className="dds__pagination__nav">
              <button
                className="dds__button dds__button--tertiary dds__button--sm dds__button__icon dds__pagination__first-page"
                type="button"
                aria-label="First page"
              ></button>
              <button
                className="dds__button dds__button--tertiary dds__button--sm dds__button__icon dds__pagination__prev-page"
                type="button"
                aria-label="Previous page"
              >
                <span className="dds__pagination__prev-page-label">Previous</span>
              </button>
              <div className="dds__pagination__page-range">
                <label className="dds__pagination__page-range-label" for="pagination-current-page-table-719080633-pagination">Page</label>
                <div id="text-input-container-212632159" className="dds__input-text__container dds__input-text__container--sm">
                  <div className="dds__input-text__wrapper dds__pagination__page-range-current-wrapper">
                    <input
                      type="text"
                      className="dds__input-text dds__pagination__page-range-current"
                      name="text-input-control-name-212632159"
                      id="pagination-current-page-table-719080633-pagination"
                      required
                      aria-labelledby="text-input-label-212632159 text-input-helper-212632159"
                    />
                  </div>
                </div>
                <div className="dds__pagination__page-range-total-label">
                  of{` `}
                  <span className="dds__pagination__page-range-total"></span>
                </div>
              </div>
              <button
                className="dds__button dds__button--tertiary dds__button--sm dds__button__icon dds__pagination__next-page"
                type="button"
                aria-label="Next page"
              >
                <span className="dds__pagination__next-page-label">Next</span>
              </button>
              <button
                className="dds__button dds__button--tertiary dds__button--sm dds__button__icon dds__pagination__last-page"
                type="button"
                aria-label="Last page"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
