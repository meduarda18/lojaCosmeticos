package backend.dto;

import java.time.LocalDateTime;
import backend.model.FormaPagamento;

public class VendaDTO {
    private String id;
    private String produtoId;
    private String produtoNome;
    private int quantidade;
    private Double precoUnitario;
    private FormaPagamento formaPagamento;
    private int parcelas;
    private LocalDateTime dataVenda;

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getProdutoId() {
        return produtoId;
    }
    public void setProdutoId(String produtoId) {
        this.produtoId = produtoId;
    }

    public String getProdutoNome() {
        return produtoNome;
    }
    public void setProdutoNome(String produtoNome) {
        this.produtoNome = produtoNome;
    }

    public int getQuantidade() {
        return quantidade;
    }
    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public Double getPrecoUnitario() {
        return precoUnitario;
    }
    public void setPrecoUnitario(Double precoUnitario) {
        this.precoUnitario = precoUnitario;
    }

    public FormaPagamento getFormaPagamento() {
        return formaPagamento;
    }
    public void setFormaPagamento(FormaPagamento formaPagamento) {
        this.formaPagamento = formaPagamento;
    }

    public int getParcelas() {
        return parcelas;
    }
    public void setParcelas(int parcelas) {
        this.parcelas = parcelas;
    }

    public LocalDateTime getDataVenda() {
        return dataVenda;
    }
    public void setDataVenda(LocalDateTime dataVenda) {
        this.dataVenda = dataVenda;
    }
}
