import React from 'react';
import {View, TextInput, Text, SectionList, TouchableOpacity} from 'react-native';
import styles from './EstoquePageStyle';
import {Feather} from "@expo/vector-icons";

const dadosEstoque = [
    {id:'1', nome:'Sabonetes Algodão TodoDia'},
    {id:'2', nome:'Sabonetes Alecrim TodoDia'},
    {id:'3', nome:'Sabonetes Amora TodoDia'},
    {id:'4', nome:'Sabonetes Frutas Vermelhas TodoDia'},
    {id:'5', nome:'Sabonetes Ameixa TodoDia'},
];

export default function EstoqueContent() {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Digite o nome ou código do produto"
                    placeholderTextColor='#7F5DA3'
                />
                <Feather name='search' size={24} color='#D1A6FD' />
            </View>

            <SectionList
                sections={[{title: 'Estoque', data: dadosEstoque}]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.nome}</Text>
                        <View style={styles.iconsContainer}>
                            <TouchableOpacity>
                                <Feather name="edit" size={20} color="#D1A6FD" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: 10 }}>
                                <Feather name="trash-2" size={20} color="#D1A6FD" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
            />

            <TouchableOpacity style={styles.fab}>
                <Feather name="plus" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
}
