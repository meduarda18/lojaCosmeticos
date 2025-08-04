import React, {useCallback, useState, useEffect} from 'react';
import {View, TextInput, Text, SectionList, TouchableOpacity, Alert, Platform} from 'react-native';
import styles from './EstoquePageStyle';
import {Feather} from "@expo/vector-icons";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {deletarProduto, listarProdutos} from "../../storage/ProdutoStorage";

export default function EstoqueContent() {

    console.log('Inicializando');
    const navigation = useNavigation();

    const [produtos, setProdutos] = useState([]);
    const [filtro, setFiltro] = useState('');

    const carregarProdutos = async () => {
        const lista = await listarProdutos();
        setProdutos(lista);
    };

    useFocusEffect(
        useCallback(() => {
            carregarProdutos().then();
        }, [])
    );

    useEffect(() => {
        const debugProdutos = async () => {
            const lista = await listarProdutos();
            console.log('[DEBUG] Lista dos produtos no AsyncStorage:', lista);
        };

    debugProdutos();
    }, []);

    const handleExcluirProduto = (codigo) => {
        if (Platform.OS === 'web') {
            if (window.confirm('Tem certeza que deseja excluir este produto?')) {
                excluir(codigo);
            }
        } else {
            Alert.alert('Confirmar Exclusão', 
                'Tem certeza que deseja excluir este produto?',
                [
                    { text: 'Cancelar', style: 'cancel' },
                    { text: 'Excluir', style: 'destructive', onPress: () => excluir(codigo) }
                ],
                    { cancelable: true }
            );
        }
    };

    const excluir = async (codigo) => {
        await deletarProduto(codigo);
        await carregarProdutos();
    };
        

    const produtosFiltrados = produtos
    .filter(p => !p._excluido) 
    .filter(p =>
        p.nome.toLowerCase().includes(filtro.toLowerCase()) ||
        p.codigo.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Digite o nome ou código do produto"
                    placeholderTextColor='#7F5DA3'
                    value={filtro}
                    onChangeText={setFiltro}
                />
                <Feather name='search' size={24} color='#D1A6FD' />
            </View>

            <SectionList
                sections={[{title: 'Estoque', data: produtosFiltrados}]}
                keyExtractor={(item) => item.codigo}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => navigation.navigate('Detalhes do Produto', {id: item.codigo})}
                    >
                        <Text style={styles.itemText}>{item.nome}</Text>
                        <View style={styles.iconsContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Editar Produto', {id: item.codigo})}
                            >
                                <Feather name="edit" size={20} color="#D1A6FD" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginLeft: 10 }}
                                onPress={() => handleExcluirProduto(item.codigo)}
                            >
                                <Feather name="trash-2" size={20} color="#D1A6FD" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
            />

            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate('Cadastrar Produto')}
            >
                <Feather name="plus" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
}
