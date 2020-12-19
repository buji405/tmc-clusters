import React, { useState } from "react";
import DataTable from "react-data-table-component";
import data from "../data/clusters.json";
import TableSearch from "../tableSearch/TableSearch";

const clusterData = data;
const columns = [
  {
    name: "Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "OS System",
    selector: "os",
    sortable: true,
  },
  {
    name: "# of Cores",
    selector: "cores",
    sortable: true,
  },
  {
    name: "# of Pods",
    selector: "pods",
    sortable: true,
  },
  {
    name: "# of Nodes",
    selector: "nodes",
    sortable: true,
  },
  {
    name: "Total Memory",
    selector: "total_memory_gb",
    sortable: true,
  },
  {
    name: "Labels",
    selector: "labels",
    sortable: true,
  },
  {
    name: "Name spaces",
    selector: "namespaces",
    sortable: true,
  },
];

const MainContainer = () => {
  const [data, setData] = useState(clusterData);

  return (
    <>
      <TableSearch data={data} initialData={clusterData} setData={setData} />
      <DataTable
        columns={columns}
        data={data}
        pagination={true}
        paginationDefaultPage={1}
        paginationPerPage={25}
        title="Cluster UI"
      />
    </>
  );
};

export default MainContainer;
