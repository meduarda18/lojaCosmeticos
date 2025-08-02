package backend.controller;

import backend.dto.ProdutoDTO;
import backend.model.Produto;
import backend.service.ProdutoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    private final ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @GetMapping
    public ResponseEntity<List<ProdutoDTO>> buscarTodosProdutos() {
        List<ProdutoDTO> produtos = produtoService.buscarTodos();
        return ResponseEntity.ok(produtos);
    }

    @GetMapping("/{codigo}")
    public ResponseEntity<ProdutoDTO> buscarProdutoPorCodigo(@PathVariable String codigo) {
        Optional<ProdutoDTO> produtoDTO = produtoService.buscarPorCodigo(codigo);
        return produtoDTO.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ProdutoDTO> criarProduto(@RequestBody ProdutoDTO produtoDTO) {
        try {
            ProdutoDTO novoProduto = produtoService.criar(produtoDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(novoProduto);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @PutMapping("/{codigo}")
    public ResponseEntity<ProdutoDTO> atualizarProduto(@PathVariable String codigo,
            @RequestBody ProdutoDTO produtoDTO) {
        try {
            ProdutoDTO produtoAtualizado = produtoService.atualizar(codigo, produtoDTO);
            return ResponseEntity.ok(produtoAtualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{codigo}")
    public ResponseEntity<Void> deletarProduto(@PathVariable String codigo) {
        try {
            produtoService.deletarPorCodigo(codigo);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/sincronizar/upload")
    public ResponseEntity<List<Produto>> uploadProdutosParaSincronizacao(
            @RequestBody List<Produto> produtosParaSincronizar) {
        List<Produto> produtosSincronizados = produtosParaSincronizar.stream()
                .map(produtoService::salvarOuAtualizarParaSincronizacao)
                .collect(Collectors.toList());
        return ResponseEntity.ok(produtosSincronizados);
    }

    @GetMapping("/sincronizar/download")
    public ResponseEntity<List<Produto>> downloadProdutosParaSincronizacao(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime ultimoTimestampSincronizacao) {
        List<Produto> produtosAtualizados = produtoService.buscarAtualizadosDesde(ultimoTimestampSincronizacao);
        return ResponseEntity.ok(produtosAtualizados);
    }
}