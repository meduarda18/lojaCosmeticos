import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY_VENDAS = 'vendas';

export async function salvarVenda(venda) {
    const vendas = await listarVendas();
    vendas.push(venda);
    await AsyncStorage.setItem(STORAGE_KEY_VENDAS, JSON.stringify(vendas));
}

export async function listarVendas() {
    const dados = await AsyncStorage.getItem(STORAGE_KEY_VENDAS);
    return dados ? JSON.parse(dados) : [];
}

export async function deletarVenda(id) {
    const vendas = await listarVendas();
    const atualizadas = vendas.filter(v => v.id !== id);
    await AsyncStorage.setItem(STORAGE_KEY_VENDAS, JSON.stringify(atualizadas));
}

export async function atualizarVenda(vendaAtualizada) {
    const vendas = await listarVendas();
    const atualizadas = vendas.map(
        v => v.id === vendaAtualizada.id ? vendaAtualizada : v
    );
    await AsyncStorage.setItem(STORAGE_KEY_VENDAS, JSON.stringify(atualizadas));
}
