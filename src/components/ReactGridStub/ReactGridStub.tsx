import * as React from "react";
import ReactDataGrid, { Column } from "react-data-grid";
import Champion from "../../utils/classes/Champion";
import "react-data-grid/dist/react-data-grid.css";
import "./styles.css";
import championJsonData from "../../data/championData.json";
import { ChampionData } from "../../utils/classes/ChampionData";
import { css } from 'aphrodite';
import styles from "./styles";

const columns: Column<Champion>[] = [
  { name: "Id", key: "id" },
  { name: "Key", key: "key" },
  { name: "Name", key: "name" },
  { name: "Title", key: "title" },
  { name: "Blurb", key: "blurb", formatter: ({value}) => <div className={css(styles.cell)}>{value}</div>}
];

const data = new ChampionData(championJsonData);

export default function ReactDataGripStub() {
  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={i => data.getChampionInfo(i)}
      rowsCount={Object.keys(championJsonData.data).length}
    />
  );
}
