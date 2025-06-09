import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'produtos';

export async function salvarProduto(produto) {
    const produtos = await listarProdutos();
    produtos.push(produto);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(produtos));
}

export async function listarProdutos() {
    const dados = await AsyncStorage.getItem(STORAGE_KEY);
    return dados ? JSON.parse(dados) : [];
}

export async function deletarProduto(codigo) {
    const produtos = await listarProdutos();
    const atualizados = produtos.filter(p => p.codigo !== codigo);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(atualizados));
}

export async function atualizarProduto(produtoAtualizado) {
    const produtos = await listarProdutos();
    const atualizados = produtos.map(
        p => p.codigo === produtoAtualizado.codigo ? produtoAtualizado : p);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(atualizados));
}