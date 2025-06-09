import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './EditarProdutoStyle';
import { Ionicons } from '@expo/vector-icons';

const dadosEstoque = [
  {
    id: '1',
    codigo: '15098776',
    nome: 'Sabonetes Algodão TodoDia',
    quantidade: 15,
    preco: 25.00,
    descricao:
      'Sabonete em barra com aroma suave de algodão, promove maciez e hidratação para a pele.',
    imagem: 'https://a-static.mlcdn.com.br/1500x1500/caixa-de-sabonete-hidratante-em-barra-natura-todo-dia-algodao-5-unidades-refrescante/jpabrasilsilva/5392216e7aca11ee9d0d4201ac185040/bf2e9b5ed2b4488f09a3bb97e72d2455.jpeg',
  },
  {
    id: '2',
    codigo: '15098777',
    nome: 'Sabonetes Alecrim TodoDia',
    quantidade: 12,
    preco: 27.50,
    descricao:
      'Sabonete com aroma refrescante de alecrim, ideal para energizar e limpar a pele suavemente.',
    imagem: 'https://a-static.mlcdn.com.br/1500x1500/caixa-de-sabonete-hidratante-em-barra-natura-todo-dia-algodao-5-unidades-refrescante/jpabrasilsilva/5392216e7aca11ee9d0d4201ac185040/bf2e9b5ed2b4488f09a3bb97e72d2455.jpeg',
  },
  {
    id: '3',
    codigo: '15098778',
    nome: 'Sabonetes Amora TodoDia',
    quantidade: 20,
    preco: 26.00,
    descricao:
      'Sabonete com fragrância doce de amora, que deixa a pele perfumada e hidratada.',
    imagem: 'https://a-static.mlcdn.com.br/1500x1500/caixa-de-sabonete-hidratante-em-barra-natura-todo-dia-algodao-5-unidades-refrescante/jpabrasilsilva/5392216e7aca11ee9d0d4201ac185040/bf2e9b5ed2b4488f09a3bb97e72d2455.jpeg',
  },
  {
    id: '4',
    codigo: '15098779',
    nome: 'Sabonetes Frutas Vermelhas TodoDia',
    quantidade: 18,
    preco: 28.00,
    descricao:
      'Sabonete com aroma frutado de frutas vermelhas, para uma pele limpa e perfumada o dia todo.',
    imagem: 'https://a-static.mlcdn.com.br/1500x1500/caixa-de-sabonete-hidratante-em-barra-natura-todo-dia-algodao-5-unidades-refrescante/jpabrasilsilva/5392216e7aca11ee9d0d4201ac185040/bf2e9b5ed2b4488f09a3bb97e72d2455.jpeg',
  },
  {
    id: '5',
    codigo: '15098780',
    nome: 'Sabonetes Ameixa TodoDia',
    quantidade: 25,
    preco: 29.00,
    descricao:
      'Sabonete com aroma delicado de ameixa, proporciona hidratação e sensação de frescor.',
    imagem: 'https://a-static.mlcdn.com.br/1500x1500/caixa-de-sabonete-hidratante-em-barra-natura-todo-dia-algodao-5-unidades-refrescante/jpabrasilsilva/5392216e7aca11ee9d0d4201ac185040/bf2e9b5ed2b4488f09a3bb97e72d2455.jpeg',
  },
];

export default function EditarProduto() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  useEffect(() => {
    const produto = dadosEstoque.find((item) => item.id === id);
    if (produto) {
      setCodigo(produto.codigo);
      setNome(produto.nome);
      setQuantidade(produto.quantidade.toString());
      setPreco(produto.preco.toFixed(2).replace('.', ','));
      setDescricao(produto.descricao || '');
      setImagem(produto.imagem || '');
    }
  }, [id]);

  const handleSalvar = () => {
    if (!codigo || !nome || !quantidade || !preco) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
      return;
    }

    const produtoAtualizado = {
      codigo,
      nome,
      quantidade: parseInt(quantidade),
      preco: parseFloat(preco.replace(',', '.')),
      descricao,
    };

    console.log('Produto atualizado:', produtoAtualizado);
    Alert.alert('Sucesso', 'Produto atualizado com sucesso!');
    navigation.goBack();
  };

  const handlePrecoChange = (texto) => {
    const textoLimpo = texto.replace('R$', '').trim();
    setPreco(textoLimpo);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {imagem ? <Image source={{ uri: imagem }} style={styles.imagemProduto} /> : null}

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
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
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
            value={`R$ ${preco}`}
            onChangeText={handlePrecoChange}
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
