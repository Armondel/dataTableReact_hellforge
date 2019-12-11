import React from 'react';
import {css} from "aphrodite";

import styles from "./styles";

import {MagicTable} from "../index";

const App: React.FC = () => {
    return (
        <div className={css(styles.app)}>
            <label>Hello there, General Kenobi!</label>
            <MagicTable />
        </div>
    )
};

export default App;
