package backend.dto;

public class EstoqueDTO {
    private int quantidade;

    public EstoqueDTO() {}

    public EstoqueDTO(int quantidade) {
        this.quantidade = quantidade;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }
}
