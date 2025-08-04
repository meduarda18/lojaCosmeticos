package backend.service;

import backend.model.Estoque;

public interface EstoqueService {

    Estoque registrarEntrada(String codigoProduto, int quantidade);

    Estoque registrarSaida(String codigoProduto, int quantidade);

    Estoque consultarPorCodigoProduto(String codigoProduto);
}
