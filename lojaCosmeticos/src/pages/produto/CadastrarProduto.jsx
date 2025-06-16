import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, Alert, ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './CadastrarProdutoStyle';
import { salvarProduto, listarProdutos } from "../../storage/ProdutoStorage";

export default function CadastrarProduto() {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSalvar = async () => {
        if (!nome || !quantidade || !preco) {
            Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
            return;
        }

        try {
            const produtosExistentes = await listarProdutos();

            // calcula o novo código como o maior + 1
            const novoCodigo =
                produtosExistentes.length > 0
                    ? Math.max(...produtosExistentes.map(p => parseInt(p.codigo))) + 1
                    : 1;

            const novoProduto = {
                codigo: String(novoCodigo), // pode usar como string ou number, desde que seja consistente
                nome: nome.trim(),
                quantidade: parseInt(quantidade),
                preco: parseFloat(preco),
                descricao: descricao.trim()
            };

            await salvarProduto(novoProduto);
            Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.error('Erro ao salvar produto', error);
            Alert.alert('Erro', 'Falha ao salvar o produto. Tente novamente.');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Cadastrar Produto</Text>

            {/* Removido campo de código */}
            <TextInput
                style={styles.input}
                placeholder="Nome do Produto"
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder="Quantidade"
                keyboardType="number-pad"
                value={quantidade}
                onChangeText={setQuantidade}
                maxLength={5}
            />

            <TextInput
                style={styles.input}
                placeholder="Preço"
                keyboardType="decimal-pad"
                value={preco}
                onChangeText={setPreco}
            />

            <TextInput
                style={[styles.input, styles.descricaoInput]}
                placeholder="Descrição"
                multiline
                value={descricao}
                onChangeText={setDescricao}
            />

            <TouchableOpacity style={styles.botaoSalvar} onPress={handleSalvar}>
                <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
