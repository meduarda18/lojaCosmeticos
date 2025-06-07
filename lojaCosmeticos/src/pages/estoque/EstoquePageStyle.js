import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: '8%',
    },
    tabs: {
        flexDirection: 'row',
        marginBottom: 12
    },
    tabActive: {
        flex: 1,
        backgroundColor: '#D1A6FD',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    tabInactive: {
        flex: 1,
        backgroundColor: '#E6D6FB',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    tabTextActive: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    tabTextInactive: {
        textAlign: 'center',
        color: '#7F5DA3'
    },
    input: {
        backgroundColor: '#FAF5FF',
        width: 400,
        height: 50,
    }
});
