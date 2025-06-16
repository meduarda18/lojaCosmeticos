import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#D1A6FD',
        marginBottom: 20,
        textAlign: 'center',
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7F5DA3',
        marginTop: 20,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
    },
    itemContainer: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#FAF9FF',
    },
    botaoAdicionar: {
        backgroundColor: '#D1A6FD',
        padding: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    botaoSalvar: {
        backgroundColor: '#D1A6FD',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 10,
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        maxHeight: '70%',
    },
    modalTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#7F5DA3',
        textAlign: 'center',
    },
    modalItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    modalItemText: {
        fontSize: 16,
        color: '#333',
    },
    modalFechar: {
        marginTop: 15,
        color: '#D00',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});
