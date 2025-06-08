import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './CadastrarProdutoStyle';

export default function CadastrarProduto() {
  const navigation = useNavigation();

  const [codigo, setCodigo] = useState('');        // novo estado para código
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSalvar = () => {
    if (!codigo || !nome || !quantidade || !preco) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios, incluindo o código.');
      return;
    }

    const novoProduto = {
      codigo,                                  // adiciona código ao objeto
      nome,
      quantidade: parseInt(quantidade),
      preco: parseFloat(preco),
      descricao,
    };

    console.log('Produto cadastrado:', novoProduto);
    Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastrar Produto</Text>

      <TextInput
        style={styles.input}
        placeholder="Código do Produto"
        value={codigo}
        onChangeText={setCodigo}
      />

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
