import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        padding: 16,
    },
    card: {
        backgroundColor: '#FAF5FF',
        borderRadius: 16,
        padding: 20,
        elevation: 3,
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#7F5DA3',
        marginBottom: 8,
    },
    data: {
        fontSize: 16,
        color: '#7F5DA3',
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7F5DA3',
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#D1A6FD',
        paddingBottom: 4,
    },
    itemContainer: {
        marginBottom: 12,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    itemNome: {
        fontSize: 16,
        color: '#7F5DA3',
        fontWeight: '600',
    },
    itemDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    itemQuantidade: {
        fontSize: 14,
        color: '#7F5DA3',
    },
    itemPreco: {
        fontSize: 14,
        color: '#7F5DA3',
    },
    itemTotal: {
        fontSize: 14,
        color: '#7F5DA3',
        fontWeight: 'bold',
    },
    itemVazio: {
        fontSize: 14,
        color: '#7F5DA3',
        fontStyle: 'italic',
        marginBottom: 16,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#D1A6FD',
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7F5DA3',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7F5DA3',
    },
    pagamentoContainer: {
        marginTop: 12,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#D1A6FD',
    },
    pagamentoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#7F5DA3',
    },
    pagamentoValue: {
        fontSize: 16,
        color: '#7F5DA3',
        marginTop: 4,
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
        marginTop: 30,
        marginLeft: 5
    },
});