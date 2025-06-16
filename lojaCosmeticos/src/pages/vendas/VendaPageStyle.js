import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAF5FF',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        color: '#7F5DA3',
        fontSize: 16,
    },
    itemContainer: {
        backgroundColor: '#FAF5FF',
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemContent: {
        flex: 1,
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7F5DA3',
        marginBottom: 4,
    },
    itemSubText: {
        fontSize: 14,
        color: '#7F5DA3',
        marginBottom: 2,
    },
    iconsContainer: {
        flexDirection: 'row',
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