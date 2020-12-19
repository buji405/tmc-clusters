import React, { useState } from "react";
import data from "../data/clusters.json";
import TableSearch from "../tableSearch/TableSearch";
import Table from "../table/Table";

const clusterData = data;

const MainContainer = () => {
  const [data, setData] = useState(clusterData);

  return (
    <>
      <TableSearch data={data} initialData={clusterData} setData={setData} />
      <Table data={data} />
    </>
  );
};

export default MainContainer;
