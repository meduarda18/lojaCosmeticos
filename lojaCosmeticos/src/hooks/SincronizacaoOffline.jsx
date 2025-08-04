import { useEffect } from "react";

import NetInfo from "@react-native-community/netinfo";
import { listarProdutosPendentes, marcarProdutoSincronizado } from "../storage/ProdutoStorage";
import { enviarProdutoParaServidor } from "../api/ProdutosApi";

export function sincronizacaoOffline(){
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(async state => {
            if(state.isConnected){
                console.log("Online! Iniciando sincronização...");

                //Sincronizar produtos
                const produtosPendentes = await listarProdutosPendentes();
                for(const produto of produtosPendentes){
                    const produtoSalvo = await enviarProdutoParaServidor(produto);
                    if(produtoSalvo){
                        await marcarProdutoSincronizado(produto.codigo);
                        console.log(`Produto ${produto.codigo} sincronizado`);
                    }
                }

                //Sincronizar vendas
                //Sincronizar estoque
            }
        });
        return () => unsubscribe();
    }, []);
}