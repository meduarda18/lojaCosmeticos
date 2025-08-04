package backend.dto;

import java.time.LocalDateTime;

import backend.model.Produto;

public class ProdutoDTO {

    private String nome;
    private String codigo;
    private Integer quantidade;
    private Double preco;
    private String descricao;
    private LocalDateTime dataAtualizacao;

    public ProdutoDTO() {
    }

    public ProdutoDTO(String codigo, String nome, Integer quantidade, Double preco, String descricao,
            LocalDateTime dataAtualizacao) {
        this.codigo = codigo;
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.descricao = descricao;
        this.dataAtualizacao = dataAtualizacao;
    }

    public String getCodigo() {
        return codigo;
    }

    public String getNome() {
        return nome;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public Double getPreco() {
        return preco;
    }

    public String getDescricao() {
        return descricao;
    }

    public LocalDateTime getDataAtualizacao() {
        return dataAtualizacao;
    }

    // --- Setters ---
    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setDataAtualizacao(LocalDateTime dataAtualizacao) {
        this.dataAtualizacao = dataAtualizacao;
    }

    public backend.model.Produto toEntity() {
        backend.model.Produto produto = new backend.model.Produto(
                this.codigo,
                this.nome,
                this.quantidade,
                this.preco,
                this.descricao);

        produto.setDataAtualizacao(this.dataAtualizacao);
        return produto;
    }

    public static ProdutoDTO fromEntity(Produto produto) {
        return new ProdutoDTO(
                produto.getCodigo(),
                produto.getNome(),
                produto.getQuantidade(),
                produto.getPreco(),
                produto.getDescricao(),
                produto.getDataAtualizacao());
    }
}