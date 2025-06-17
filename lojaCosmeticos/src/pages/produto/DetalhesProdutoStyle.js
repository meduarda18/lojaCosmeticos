import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
        paddingTop: 20,
    },

    card: {
        backgroundColor: '#FAF5FF',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
        elevation: 3,
    },
    codigo: {
        fontSize: 14,
        color: '#7F5DA3',
        marginBottom: 8,
        fontWeight: '600',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7F5DA3',
        marginBottom: 12,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#7F5DA3',
        marginTop: 10,
        marginBottom: 4,
    },
    valorCard: {
        backgroundColor: '#D1A6FD',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 8,
    },
    valor: {
        fontSize: 16,
        color: '#fff',
    },
});
