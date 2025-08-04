import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'produtos';

export async function salvarProduto(produto) {
    const produtos = await listarProdutos();
    produtos.push({...produto, _sincronizado: false});
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
        p => p.codigo === produtoAtualizado.codigo ? {...produtoAtualizado, _sincronizado: false} : p);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(atualizados));
}

export async function listarProdutosPendentes() {
  const produtos = await listarProdutos();
  return produtos.filter(p => p._sincronizado === false);
}

export async function marcarProdutoSincronizado(codigo) {
  const produtos = await listarProdutos();
  const atualizados = produtos.map(p =>
    p.codigo === codigo
      ? { ...p, _sincronizado: true }
      : p
  );
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(atualizados));
}