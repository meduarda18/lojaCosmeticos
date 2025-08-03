package backend.service;

import java.time.LocalDateTime;
import java.util.List;
import backend.dto.VendaDTO;

public interface VendaService {

    List<VendaDTO> listarVendasPorPeriodo(LocalDateTime start, LocalDateTime end);
    VendaDTO salvarVenda(VendaDTO vendaDTO);
    
}
