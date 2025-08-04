import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#fff",
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#7F5DA3",
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        backgroundColor: "#F5F5F5",
    },
    textArea: {
        height: 100,
        textAlignVertical: "top",
    },
    linha: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },
    metade: {
        flex: 1,
    },
    row: {
        marginTop: 20,
        alignItems: "center",
    },
    botaoSalvar: {
        backgroundColor: "#7F5DA3",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
    },
    textoBotao: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16,
    },
});
