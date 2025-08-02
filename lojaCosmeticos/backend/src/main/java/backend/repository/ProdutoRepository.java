package backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import backend.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {

    Optional<Produto> findByCodigo(String codigo);

    void deleteByCodigo(String codigo);
}
