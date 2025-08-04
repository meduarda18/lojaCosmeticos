package backend.service.impl;

import backend.model.Estoque;
import backend.model.Produto;
import backend.repository.EstoqueRepository;
import backend.repository.ProdutoRepository;
import backend.service.EstoqueService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EstoqueServiceImpl implements EstoqueService {

    @Autowired
    private EstoqueRepository estoqueRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    @Override
    @Transactional
    public Estoque registrarEntrada(String codigoProduto, int quantidade) {
        Produto produto = produtoRepository.findByCodigo(codigoProduto)
            .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

        Estoque estoque = estoqueRepository.findByProdutoCodigo(codigoProduto)
            .orElse(new Estoque(produto, 0));

        estoque.setQuantidade(estoque.getQuantidade() + quantidade);
        return estoqueRepository.save(estoque);
    }

    @Override
    @Transactional
    public Estoque registrarSaida(String codigoProduto, int quantidade) {
        Estoque estoque = estoqueRepository.findByProdutoCodigo(codigoProduto)
            .orElseThrow(() -> new RuntimeException("Estoque não encontrado para o produto"));

        if (estoque.getQuantidade() < quantidade) {
            throw new RuntimeException("Estoque insuficiente");
        }

        estoque.setQuantidade(estoque.getQuantidade() - quantidade);
        return estoqueRepository.save(estoque);
    }

    @Override
    public Estoque consultarPorCodigoProduto(String codigoProduto) {
        return estoqueRepository.findByProdutoCodigo(codigoProduto)
            .orElseThrow(() -> new RuntimeException("Estoque não encontrado para o produto"));
    }
}
