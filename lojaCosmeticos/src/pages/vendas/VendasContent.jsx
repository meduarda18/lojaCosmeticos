import React, { useCallback, useState } from 'react';
import { View, Text, TextInput, SectionList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { listarVendas } from "../../storage/VendaStorage";
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
        const nomeUsuario = v.usuario?.nome?.toLowerCase() || '';
        const dataVenda = v.data?.toLowerCase() || '';
        const termo = filtro.toLowerCase();

        return nomeUsuario.includes(termo) || dataVenda.includes(termo);
    });

    if (carregando) {
        return <ActivityIndicator size="large" color="#7F5DA3" style={{ flex: 1, justifyContent: 'center' }} />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Digite a data da venda"
                    placeholderTextColor='#7F5DA3'
                    value={filtro}
                    onChangeText={setFiltro}
                />
                <Feather name='search' size={24} color='#D1A6FD' />
            </View>

            <SectionList
                sections={[{ title: 'Vendas', data: vendasFiltradas }]}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => navigation.navigate('Detalhes da Venda', { id: item.id })}
                    >
                        <View style={styles.itemContent}>
                            <Text style={styles.itemText}>Venda {item.data}</Text>
                            <Text style={styles.itemSubText}>Data: {item.data}</Text>
                            <Text style={styles.itemSubText}>Items: {item.itemsVenda}</Text>
                            <Text style={styles.itemSubText}>Total: R$ {item.valorTotal}</Text>
                        </View>
                        <View style={styles.iconsContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Editar Venda', { id: item.id })}
                            >
                                <Feather name="edit" size={20} color="#D1A6FD" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    <Text style={styles.nenhumResultado}>Nenhuma venda encontrada</Text>
                }
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