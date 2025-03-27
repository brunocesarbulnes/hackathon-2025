import { useEffect, useRef } from "react";

export function DataTable() {
  const tableRef = useRef(null);

  useEffect(() => {
    const data = [];

    const columns = [{ value: "Description" }, { value: "Type" }, { value: "Amount" }, { value: "Date" }];

    window.DDS.Table(tableRef.current, {
      data,
      columns,
    });
  }, []);

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
