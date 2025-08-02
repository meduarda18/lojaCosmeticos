package backend.service;

import backend.dto.ProdutoDTO;
import backend.model.Produto;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface ProdutoService {

    List<ProdutoDTO> buscarTodos();

    Optional<ProdutoDTO> buscarPorCodigo(String codigo);

    ProdutoDTO criar(ProdutoDTO produtoDTO);

    ProdutoDTO atualizar(String codigo, ProdutoDTO produtoDTO);

    void deletarPorCodigo(String codigo);

    // para sinronizar
    Produto salvarOuAtualizarParaSincronizacao(Produto produtoParaSincronizar);

    List<Produto> buscarAtualizadosDesde(LocalDateTime ultimoTimestampSincronizacao);
}