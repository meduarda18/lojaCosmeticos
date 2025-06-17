import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAF5FF',
        borderRadius: 20,
        paddingHorizontal: 16,
        height: 50,
        marginBottom: 12
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAF5FF',
        padding: 12,
        borderRadius: 10,
        marginBottom: 8,
        justifyContent: 'space-between',
    },
    itemText: {
        flex: 1,
        color: '#333'
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#D1A6FD',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    nenhumResultado: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#7F5DA3',
    },
});
