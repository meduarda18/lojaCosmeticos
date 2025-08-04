import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from './EditarProdutoStyle';

export default function EditarProduto() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  const [codigo, setCodigo] = useState("");
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    const carregarProduto = async () => {
      try {
        const dados = await AsyncStorage.getItem("produtos");
        const lista = dados ? JSON.parse(dados) : [];
        const produto = lista.find((item) => item.codigo === id);

        if (produto) {
          setCodigo(produto.codigo);
          setNome(produto.nome);
          setQuantidade(produto.quantidade.toString());
          setPreco(produto.preco.toString().replace(".", ","));
          setDescricao(produto.descricao || "");
        }
      } catch (erro) {
        console.error("Erro ao carregar produto para edição:", erro);
      }
    };

    carregarProduto();
  }, [id]);

  const handleSalvar = async () => {
    if (!codigo || !nome || !quantidade || !preco) {
      Alert.alert("Erro", "Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const dados = await AsyncStorage.getItem("produtos");
      const lista = dados ? JSON.parse(dados) : [];

      const index = lista.findIndex((item) => item.codigo === id);
      if (index === -1) {
        Alert.alert("Erro", "Produto não encontrado.");
        return;
      }

      lista[index] = {
        ...lista[index],
        codigo,
        nome,
        quantidade: parseInt(quantidade),
        preco: parseFloat(preco.replace(",", ".")),
        descricao,
      };

      await AsyncStorage.setItem("produtos", JSON.stringify(lista));
      Alert.alert("Sucesso", "Produto atualizado com sucesso!");
      navigation.goBack();
    } catch (erro) {
      console.error("Erro ao salvar produto:", erro);
      Alert.alert("Erro", "Não foi possível salvar as alterações.");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Código</Text>
        <TextInput
          style={styles.input}
          value={codigo}
          onChangeText={setCodigo}
          keyboardType="number-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} />
      </View>

      <View style={styles.linha}>
        <View style={styles.metade}>
          <Text style={styles.label}>Quantidade</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={quantidade}
            onChangeText={setQuantidade}
          />
        </View>

        <View style={styles.metade}>
          <Text style={styles.label}>Preço</Text>
          <TextInput
            style={styles.input}
            keyboardType="decimal-pad"
            value={preco}
            onChangeText={setPreco}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.botaoSalvar} onPress={handleSalvar}>
          <Text style={styles.textoBotao}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
