import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView,
    Modal,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './CadastrarVendaStyle';
import { salvarVenda } from '../../../storage/VendaStorage';
import { listarProdutos } from '../../../storage/ProdutoStorage';

export default function CadastrarVenda() {
    const navigation = useNavigation();
    const [data, setData] = useState(new Date().toISOString().split('T')[0]);
    const [produtos, setProdutos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelecionando, setItemSelecionando] = useState(null);

    const [itens, setItens] = useState([
        { produtoId: '', produtoReferencia: '', qtd: '', precoUnitario: '' }
    ]);

    useEffect(() => {
        async function carregarProdutos() {
            const lista = await listarProdutos();
            setProdutos(lista);
        }
        carregarProdutos();
    }, []);

    const calcularValorTotal = () => {
        return itens.reduce((total, item) => {
            const qtd = parseInt(item.qtd) || 0;
            const preco = parseFloat(item.precoUnitario) || 0;
            return total + qtd * preco;
        }, 0);
    };

    const abrirModalSelecao = (index) => {
        setItemSelecionando(index);
        setModalVisible(true);
    };

    const selecionarProduto = (produto) => {
        const novosItens = [...itens];
        novosItens[itemSelecionando] = {
            ...novosItens[itemSelecionando],
            produtoId: produto.codigo,
            produtoReferencia: produto.nome,
            precoUnitario: produto.preco.toString()
        };
        setItens(novosItens);
        setModalVisible(false);
    };

    const handleAdicionarItem = () => {
        setItens([...itens, { produtoId: '', produtoReferencia: '', qtd: '', precoUnitario: '' }]);
    };

    const handleItemChange = (index, field, value) => {
        const novosItens = [...itens];
        novosItens[index][field] = value;
        setItens(novosItens);
    };

    const handleSalvar = async () => {
        if (itens.some(item => !item.produtoId || !item.qtd || !item.precoUnitario)) {
            Alert.alert('Erro', 'Preencha todos os campos dos itens da venda.');
            return;
        }

        const valorTotal = calcularValorTotal();
        const novaVenda = {
            id: Date.now().toString(),
            data,
            valorTotal,
            itemsVenda: itens.map(item => ({
                id: Date.now().toString() + Math.random().toString(36).substring(2, 5),
                produtoReferencia: item.produtoReferencia,
                qtd: parseInt(item.qtd),
                precoUnitario: parseFloat(item.precoUnitario)
            }))
        };

        try {
            await salvarVenda(novaVenda);
            Alert.alert('Sucesso', 'Venda registrada com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.error('Erro ao salvar venda', error);
            Alert.alert('Erro', 'Falha ao salvar a venda. Tente novamente.');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Cadastrar Venda</Text>

            <TextInput
                style={styles.input}
                placeholder="Data da Venda (YYYY-MM-DD)"
                value={data}
                onChangeText={setData}
            />

            <Text style={styles.subtitulo}>Itens da Venda</Text>

            {itens.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                    <TouchableOpacity
                        style={styles.input}
                        onPress={() => abrirModalSelecao(index)}
                    >
                        <Text style={{ color: item.produtoReferencia ? '#000' : '#aaa' }}>
                            {item.produtoReferencia || 'Selecionar Produto'}
                        </Text>
                    </TouchableOpacity>

                    <TextInput
                        style={styles.input}
                        placeholder="Quantidade"
                        keyboardType="number-pad"
                        value={item.qtd}
                        onChangeText={value => handleItemChange(index, 'qtd', value)}
                    />

                    <TextInput
                        style={[styles.input, { backgroundColor: '#f1f1f1' }]}
                        placeholder="Preço Unitário"
                        value={item.precoUnitario}
                        editable={false}
                    />
                </View>
            ))}

            <TouchableOpacity style={styles.botaoAdicionar} onPress={handleAdicionarItem}>
                <Text style={styles.textoBotao}>+ Adicionar Item</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoSalvar} onPress={handleSalvar}>
                <Text style={styles.textoBotao}>Salvar Venda</Text>
            </TouchableOpacity>

            {/* Modal de seleção de produto */}
            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitulo}>Selecione um Produto</Text>
                        <FlatList
                            data={produtos}
                            keyExtractor={(item) => item.codigo}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.modalItem}
                                    onPress={() => selecionarProduto(item)}
                                >
                                    <Text style={styles.modalItemText}>{item.nome}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalFechar}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}
