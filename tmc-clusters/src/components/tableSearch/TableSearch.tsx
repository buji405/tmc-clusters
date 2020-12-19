import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";

interface ClusterData {
  cores: number;
  failures_24h: number;
  labels: string[];
  name: string;
  namespaces: string[];
  nodes: number;
  os: string;
  pods: number;
  provider: string;
  total_memory_gb: number;
}

interface SearchProps {
  data: ClusterData[];
  setData: Function;
  initialData: ClusterData[];
}

const TableSearch = (props: SearchProps) => {
  const { data, initialData, setData } = props;
  const [value, setValue] = useState("");

  const searchData = (searchQuery: string) => {
    setValue(searchQuery);
    let filteredData = data.filter(
      (cluster: ClusterData) =>
        JSON.stringify(cluster)
          .toLowerCase()
          .indexOf(searchQuery.toLowerCase()) !== -1
    );
    if (searchQuery === "") {
      filteredData = initialData;
    }
    setData(filteredData);
  };

  const resetSearch = () => {
    setData(initialData);
  };

  return (
    <>
      <SearchBar
        onCancelSearch={() => resetSearch()}
        onChange={(newValue) => searchData(newValue)}
        placeholder="Search..."
        style={styledSearch}
        value={value}
      />
    </>
  );
};

export default TableSearch;

//custom styling
const styledSearch = {
  zIndex: "1",
  width: "300px",
  margin: "10px",
  height: "30px",
  border: "1px solid lightgray",
  position: "absolute",
  right: "2px",
  top: "7px",
};
