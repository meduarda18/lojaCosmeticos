import React, { useState } from 'react';
import { View, TextInput, Text, SectionList, TouchableOpacity } from 'react-native';
import styles from './EstoquePageStyle';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SearchComponent from '../../componentes/SearchComponent';

const dadosEstoque = [
    { id: '1', nome: 'Sabonetes Algodão TodoDia' },
    { id: '2', nome: 'Sabonetes Alecrim TodoDia' },
    { id: '3', nome: 'Sabonetes Amora TodoDia' },
    { id: '4', nome: 'Sabonetes Frutas Vermelhas TodoDia' },
    { id: '5', nome: 'Sabonetes Ameixa TodoDia' },
];

export default function EstoqueContent() {

    const navigation = useNavigation();
    

    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(dadosEstoque);

    // Função de busca
    const handleSearch = (text) => {
        setSearchText(text);

        if (text.length === 0) {
            setFilteredData([]); // Se não houver texto, exibe todos os dados
        } else {
            // Filtra os dados com base no texto digitado
            const filtered = dadosEstoque.filter((item) =>
                item.nome.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredData(filtered);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <SearchComponent onChangeText={handleSearch}/>
                <Feather name='search' size={24} color='#D1A6FD' />
            </View>

            <SectionList
                sections={[{ title: 'Estoque', data: filteredData }]} 
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => navigation.navigate('Detalhes do Produto', { id: item.id })}
                    >
                        <Text style={styles.itemText}>{item.nome}</Text>
                        <View style={styles.iconsContainer}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Editar Produto', { id: item.id })}
                            >
                                <Feather name="edit" size={20} color="#D1A6FD" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 10 }}>
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
