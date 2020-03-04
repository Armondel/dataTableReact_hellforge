import React from "react";
import ReactDataGripStub from "../ReactGridStub/ReactGridStub";
import { css } from "aphrodite";
import styles from "./styles";

const App: React.FC = () => {
    return (
        <div className={css(styles.app)}>
            <ReactDataGripStub />
        </div>
    )
};

export default App;
