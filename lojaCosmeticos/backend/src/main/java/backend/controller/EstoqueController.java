package backend.controller;

import backend.dto.EstoqueDTO;
import backend.model.Estoque;
import backend.service.EstoqueService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/estoque")
public class EstoqueController {

    private final EstoqueService estoqueService;

    public EstoqueController(EstoqueService estoqueService) {
        this.estoqueService = estoqueService;
    }

    @PostMapping("/entrada/{codigo}")
    public ResponseEntity<Estoque> entradaEstoque(
            @PathVariable String codigo,
            @RequestBody EstoqueDTO request) {
        Estoque estoqueAtualizado = estoqueService.registrarEntrada(codigo, request.getQuantidade());
        return ResponseEntity.ok(estoqueAtualizado);
    }

    @PostMapping("/saida/{codigo}")
    public ResponseEntity<Estoque> saidaEstoque(
            @PathVariable String codigo,
            @RequestBody EstoqueDTO request) {
        Estoque estoqueAtualizado = estoqueService.registrarSaida(codigo, request.getQuantidade());
        return ResponseEntity.ok(estoqueAtualizado);
    }

    @GetMapping("/{codigo}")
    public ResponseEntity<Estoque> consultarEstoque(@PathVariable String codigo) {
        Estoque estoque = estoqueService.consultarPorCodigoProduto(codigo);
        return ResponseEntity.ok(estoque);
    }
}
