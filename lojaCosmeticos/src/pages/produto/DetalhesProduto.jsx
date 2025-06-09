import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetalhesProdutoPage({ route }) {
  const { id } = route.params;

  const dadosEstoque = [
    { id: '1', nome: 'Sabonetes Algodão TodoDia', descricao: 'Sabonete hidratante com fragrância suave de algodão.', preco: 'R$ 12,90', quantidade: 20 },
    { id: '2', nome: 'Sabonetes Alecrim TodoDia', descricao: 'Sabonete energizante com aroma de alecrim.', preco: 'R$ 11,90', quantidade: 15 },
  ];

  const produto = dadosEstoque.find(item => item.id === id);

  if (!produto) return <Text>Produto não encontrado</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.codigo}>Código: {produto.id}</Text>
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
