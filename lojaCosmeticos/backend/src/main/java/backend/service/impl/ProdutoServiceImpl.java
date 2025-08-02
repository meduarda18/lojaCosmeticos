package backend.service.impl;

import backend.dto.ProdutoDTO;
import backend.model.Produto;
import backend.repository.ProdutoRepository;
import backend.service.ProdutoService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProdutoServiceImpl implements ProdutoService {

    private final ProdutoRepository produtoRepository;

    public ProdutoServiceImpl(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    @Override
    public List<ProdutoDTO> buscarTodos() {
        return produtoRepository.findAll().stream()
                .map(ProdutoDTO::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<ProdutoDTO> buscarPorCodigo(String codigo) {
        return produtoRepository.findByCodigo(codigo)
                .map(ProdutoDTO::fromEntity);
    }

    @Override
    @Transactional
    public ProdutoDTO criar(ProdutoDTO produtoDTO) {
        if (produtoRepository.findByCodigo(produtoDTO.getCodigo()).isPresent()) {
            throw new IllegalArgumentException("Já existe um produto com o código: " + produtoDTO.getCodigo());
        }
        Produto produto = produtoDTO.toEntity();
        Produto produtoSalvo = produtoRepository.save(produto);
        return ProdutoDTO.fromEntity(produtoSalvo);
    }

    @Override
    @Transactional
    public ProdutoDTO atualizar(String codigo, ProdutoDTO produtoDTO) {
        Produto produtoExistente = produtoRepository.findByCodigo(codigo)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado com código: " + codigo));

        produtoExistente.setNome(produtoDTO.getNome());
        produtoExistente.setQuantidade(produtoDTO.getQuantidade());
        produtoExistente.setPreco(produtoDTO.getPreco());
        produtoExistente.setDescricao(produtoDTO.getDescricao());
        produtoExistente.setImagem(produtoDTO.getImagem());

        Produto produtoAtualizado = produtoRepository.save(produtoExistente);
        return ProdutoDTO.fromEntity(produtoAtualizado);
    }

    @Override
    @Transactional
    public void deletarPorCodigo(String codigo) {
        if (!produtoRepository.findByCodigo(codigo).isPresent()) {
            throw new RuntimeException("Produto não encontrado para exclusão com código: " + codigo);
        }
        produtoRepository.deleteByCodigo(codigo);
    }

    @Override
    @Transactional
    public Produto salvarOuAtualizarParaSincronizacao(Produto produtoParaSincronizar) {
        Optional<Produto> produtoExistenteOptional = produtoRepository.findByCodigo(produtoParaSincronizar.getCodigo());

        if (produtoExistenteOptional.isPresent()) {
            Produto produtoExistente = produtoExistenteOptional.get();
            if (produtoParaSincronizar.getDataAtualizacao().isAfter(produtoExistente.getDataAtualizacao())) {
                produtoExistente.setNome(produtoParaSincronizar.getNome());
                produtoExistente.setQuantidade(produtoParaSincronizar.getQuantidade());
                produtoExistente.setPreco(produtoParaSincronizar.getPreco());
                produtoExistente.setDescricao(produtoParaSincronizar.getDescricao());
                produtoExistente.setImagem(produtoParaSincronizar.getImagem());
                return produtoRepository.save(produtoExistente);
            } else {
                return produtoExistente;
            }
        } else {
            return produtoRepository.save(produtoParaSincronizar);
        }
    }

    @Override
    public List<Produto> buscarAtualizadosDesde(LocalDateTime ultimoTimestampSincronizacao) {
        if (ultimoTimestampSincronizacao == null) {
            return produtoRepository.findAll();
        }
        return produtoRepository.findAll().stream()
                .filter(p -> p.getDataAtualizacao().isAfter(ultimoTimestampSincronizacao))
                .collect(Collectors.toList());
    }
}