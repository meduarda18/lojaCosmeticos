package backend.repository;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.model.Venda;

@Repository
public interface VendaRepository extends JpaRepository<Venda, Long> {
    
    Optional<Venda> findById(Long id);
    Optional<Venda> findByDataVendaBetween(LocalDateTime start, LocalDateTime end);
}
