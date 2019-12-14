import {StyleSheet} from "aphrodite";

const styles = StyleSheet.create({
    tableCell: {
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        ":hover": {
            background: "rgba(0, 200, 255, 0.2)"
        }
    }
});

export default styles;