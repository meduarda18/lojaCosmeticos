import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './DetalhesProdutoStyle';

export default function DetalhesProdutoPage({ route }) {
  const { id } = route.params;
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarProduto = async () => {
      try {
        const dados = await AsyncStorage.getItem('produtos');
        const lista = dados ? JSON.parse(dados) : [];
        const encontrado = lista.find(item => item.codigo === id);
        setProduto(encontrado);
      } catch (erro) {
        console.error('Erro ao carregar produto:', erro);
      } finally {
        setCarregando(false);
      }
    };

    carregarProduto();
  }, [id]);

  if (carregando) {
    return <ActivityIndicator size="large" color="#7F5DA3" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  if (!produto) {
    return <Text style={{ padding: 20 }}>Produto não encontrado</Text>;
  }

  return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.codigo}>Código: {produto.codigo}</Text>
          <Text style={styles.titulo}>{produto.nome}</Text>

          <Text style={styles.label}>Descrição:</Text>
          <View style={styles.valorCard}>
            <Text style={styles.valor}>{produto.descricao || 'Sem descrição'}</Text>
          </View>

          <Text style={styles.label}>Preço:</Text>
          <View style={styles.valorCard}>
            <Text style={styles.valor}>{produto.preco || 'R$ --,--'}</Text>
          </View>

          <Text style={styles.label}>Quantidade em estoque:</Text>
          <View style={styles.valorCard}>
            <Text style={styles.valor}>{produto.quantidade ?? '0'}</Text>
          </View>
        </View>
      </View>
  );
}
