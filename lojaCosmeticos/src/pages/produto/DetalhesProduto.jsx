import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    paddingTop: 20,
  },

  card: {
    backgroundColor: '#FAF5FF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 3,
  },
  codigo: {
    fontSize: 14,
    color: '#7F5DA3',
    marginBottom: 8,
    fontWeight: '600',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7F5DA3',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7F5DA3',
    marginTop: 10,
    marginBottom: 4,
  },
  valorCard: {
    backgroundColor: '#D1A6FD',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  valor: {
    fontSize: 16,
    color: '#fff',
  },
});
