import { marcarProdutoSincronizado } from "../storage/ProdutoStorage";

export async function enviarProdutoParaServidor(produto) {
  try {
    const response = await fetch("http://192.168.0.107:8080/api/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produto)
    });
    if (response.ok) {
      console.log("Produto sincronizado:", produto.codigo);
      await marcarProdutoSincronizado(produto.codigo);
      return await response.json();
    } else if (response.status === 409 || response.status === 500) {
      // Produto já existe no servidor, pode considerar como sincronizado
      console.warn("Produto já estava no servidor:", produto.codigo);
      await marcarProdutoSincronizado(produto.codigo);
      return null;
    } else {
      console.error("Erro ao enviar produto:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    return null;
  }
}
