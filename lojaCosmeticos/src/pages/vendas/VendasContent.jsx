import React, { useCallback, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    FlatList,
    StyleSheet,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { listarVendas, deletarVenda } from '../../storage/VendaStorage';
import styles from './VendaPageStyle';

export default function VendasContent() {
    const navigation = useNavigation();
    const [vendas, setVendas] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [filtro, setFiltro] = useState('');

    useFocusEffect(
        useCallback(() => {
            const carregarVendas = async () => {
                try {
                    const lista = await listarVendas();
                    setVendas(lista);
                } catch (erro) {
                    console.error('Erro ao carregar vendas:', erro);
                } finally {
                    setCarregando(false);
                }
            };
            carregarVendas();
        }, [])
    );

    const vendasFiltradas = vendas.filter(v => {
        const dataVenda = v.data?.toLowerCase() || '';
        const termo = filtro.toLowerCase();
        return dataVenda.includes(termo);
    });

    if (carregando) {
        return <ActivityIndicator size="large" color="#7F5DA3" style={{ flex: 1, justifyContent: 'center' }} />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Filtrar por data"
                    placeholderTextColor="#7F5DA3"
                    value={filtro}
                    onChangeText={setFiltro}
                />
                <Feather name="search" size={24} color="#D1A6FD" />
            </View>

            <FlatList
                data={vendasFiltradas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={cardStyles.card}
                        onPress={() => navigation.navigate('Detalhes da Venda', { venda: item })}
                    >
                        <Text style={cardStyles.codigo}>ID: {item.id}</Text>
                        <Text style={cardStyles.titulo}>Data: {item.data}</Text>
                        <View style={cardStyles.valorCard}>
                            <Text style={cardStyles.valor}>Total: R$ {item.valorTotal?.toFixed(2)}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={<Text style={styles.nenhumResultado}>Nenhuma venda encontrada</Text>}
                showsVerticalScrollIndicator={false}
            />

            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate('Cadastrar Venda')}
            >
                <Feather name="plus" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const cardStyles = StyleSheet.create({
    card: {
        backgroundColor: '#FAF5FF',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        marginHorizontal: 8,
        elevation: 3,
    },
    codigo: {
        fontSize: 14,
        color: '#7F5DA3',
        marginBottom: 8,
        fontWeight: '600',
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7F5DA3',
        marginBottom: 12,
    },
    valorCard: {
        backgroundColor: '#D1A6FD',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    valor: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});