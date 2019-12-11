import * as React from "react";
import championJsonData from "../../data/championData.json";

import {ChampionData} from "../../data/ChampionData";

const TableStub: React.FC = () => {
    const championData = new ChampionData(championJsonData);

    return (
        <div />
    )
};

export default TableStub;