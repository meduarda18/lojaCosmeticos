package backend.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import backend.dto.VendaDTO;
import backend.service.VendaService;

import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/vendas")
public class VendaController {
    private final VendaService vendaService;

    public VendaController(VendaService vendaService){
        this.vendaService = vendaService;
    }
    
    @PostMapping
    public ResponseEntity<VendaDTO> cadastrarVendas(@RequestBody VendaDTO vendaDTO) {
        try {
            VendaDTO novaVenda = vendaService.salvarVenda(vendaDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(novaVenda);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<VendaDTO>> buscarPorPeriodo(@RequestParam("start") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start, 
    @RequestParam("end") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end) {
        List<VendaDTO> vendas = vendaService.listarVendasPorPeriodo(start, end);
        return ResponseEntity.ok(vendas);
    }
}
