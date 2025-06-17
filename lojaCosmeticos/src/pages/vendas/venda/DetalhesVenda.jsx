import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { deletarVenda } from '../../../storage/VendaStorage';
import styles from './DetalhesVendaStyle';

export default function DetalhesVenda({ route }) {
    const { venda } = route.params;
    const navigation = useNavigation();

    const handleDeletarVenda = async (id) => {
        Alert.alert(
            'Remover Venda',
            'Tem certeza que deseja remover esta venda?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Remover',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await deletarVenda(id);
                            navigation.goBack();
                        } catch (erro) {
                            Alert.alert('Erro', 'Erro ao remover venda');
                        }
                    },
                },
            ]
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <Text style={styles.titulo}>Venda #{venda.id}</Text>
                <Text style={styles.data}>Data: {venda.data}</Text>

                <Text style={styles.subtitulo}>Itens da Venda:</Text>
                {venda.itemsVenda && venda.itemsVenda.length > 0 ? (
                    venda.itemsVenda.map((item, index) => (
                        <View key={index} style={styles.itemContainer}>
                            <Text style={styles.itemNome}>{item.produtoReferencia}</Text>
                            <View style={styles.itemDetails}>
                                <Text style={styles.itemQuantidade}>Qtd: {item.qtd}</Text>
                                <Text style={styles.itemPreco}>R$ {item.precoUnitario?.toFixed(2)}</Text>
                                <Text style={styles.itemTotal}>R$ {(item.qtd * item.precoUnitario).toFixed(2)}</Text>
                            </View>
                        </View>
                    ))
                ) : (
                    <Text style={styles.itemVazio}>Nenhum item registrado</Text>
                )}

                <View style={styles.totalContainer}>
                    <Text style={styles.totalLabel}>Valor Total:</Text>
                    <Text style={styles.totalValue}>R$ {venda.valorTotal?.toFixed(2)}</Text>
                </View>

                {venda.formaPagamento && (
                    <View style={styles.pagamentoContainer}>
                        <Text style={styles.pagamentoLabel}>Forma de Pagamento:</Text>
                        <Text style={styles.pagamentoValue}>{venda.formaPagamento}</Text>
                    </View>
                )}

                <View style={styles.botoes}>
                    <TouchableOpacity
                        onPress={() => handleDeletarVenda(venda.id)}
                    >
                        <Feather name="trash-2" size={30} color="#D1A6FD" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
