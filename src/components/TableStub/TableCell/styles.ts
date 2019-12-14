import {StyleSheet} from "aphrodite";

const styles = StyleSheet.create({
    tableCell: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        ":hover": {
            background: "rgba(0, 0, 0, 0.38)"
        }
    }
});

export default styles;