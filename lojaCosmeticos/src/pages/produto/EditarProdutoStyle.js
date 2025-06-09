import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    botaoVoltar: {
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    imagemProduto: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginBottom: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f2f2f2',
    },
    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    metade: {
        width: '48%',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    botaoSalvar: {
        backgroundColor: '#e0e0e0',
        paddingVertical: 12,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 20,
    },
    textoBotao: {
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    botaoSalvar: {
        backgroundColor: '#e0e0e0',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 50,
        alignItems: 'center',
    },
});
