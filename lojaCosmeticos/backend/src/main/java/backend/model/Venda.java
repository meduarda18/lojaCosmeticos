package backend.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;

@Entity
public class Venda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Produto produto;
    private Integer quantidade;

    @ManyToOne
    private FormaPagamento formaPagamento;

    private int parcelas;
    private LocalDateTime dataVenda;

    public Venda(Produto produto, Integer quantidade, FormaPagamento formaPagamento, int parcelas, LocalDateTime dataVenda) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.formaPagamento = formaPagamento;
        this.parcelas = parcelas;
        this.dataVenda = dataVenda;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public Produto getProduto() {
        return produto;
    }
    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public Integer getQuantidade() {
        return quantidade;
    }
    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
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
