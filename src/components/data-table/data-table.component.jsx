import { useEffect, useRef, useState } from "react";

export function DataTable({ data = [] }) {
  const tableRef = useRef(null);

  const [tableApi, setTableApi] = useState(null);

  useEffect(() => {
    const api = window.DDS.Table(tableRef.current, {
      data: [],
      columns: [{ value: "Description" }, { value: "Type" }, { value: "Amount" }, { value: "Date" }],
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

    const formattedData = data.map((row) => {
      const { description, type, amount, date } = row;

      return ({
        columns: [
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
    <div className="dds__container">
      <div className="dds__row">
        <div className="dds__col">
          <div className="dds__table" role="table" ref={tableRef}></div>
        </div>
      </div>
    </div>
  )
}
