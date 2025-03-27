import { useEffect, useRef } from "react";

export function DataTable() {
  const tableRef = useRef(null);

  useEffect(() => {
    const data = [
      { columns: [{ value: 563937315 }, { value: "UMF" }, { value: "03/27/2025" }, { value: "Success" }] },
      { columns: [{ value: 507738551 }, { value: "Premier" }, { value: "02/26/2025" }, { value: "Pending" }] },
      { columns: [{ value: 728157236 }, { value: "Dev Ex" }, { value: "03/25/2025" }, { value: "Error" }] },
      { columns: [{ value: 565986425 }, { value: "DFS" }, { value: "03/26/2024" }, { value: "Success" }] },
    ];

    const columns = [{ value: "Ticket ID" }, { value: "Team" }, { value: "Date" }, { value: "Status" }];

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
