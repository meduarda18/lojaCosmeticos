 package backend.service.impl;

import backend.service.VendaService;
import backend.dto.VendaDTO;
import backend.model.Produto;
import backend.model.Venda;
import backend.repository.VendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class VendaServiceImpl implements VendaService {

    @Autowired
    private VendaRepository vendaRepository;
    @Autowired
    private ProdutoRepository produtoRepository;

    @Override
    public List<VendaDTO> listarVendasPorPeriodo(LocalDateTime start, LocalDateTime end) {
        return vendaRepository.findByDataVendaBetween(start, end).stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

   @Override
    public VendaDTO salvarVenda(VendaDTO vendaDTO) {
        Optional<Produto> produtoOptional = produtoRepository.findByCodigo(vendaDTO.getProdutoId());
        if (produtoOptional.isEmpty()) {
            throw new IllegalArgumentException("Produto não encontrado");
        }

        Produto produto = produtoOptional.get();

        Venda venda = new Venda();
        venda.setProduto(produto);
        venda.setQuantidade(vendaDTO.getQuantidade());
        venda.setFormaPagamento(vendaDTO.getFormaPagamento());
        venda.setParcelas(vendaDTO.getParcelas());
        venda.setDataVenda(LocalDateTime.now());
        Venda salva = vendaRepository.save(venda);

        VendaDTO returnDto = new VendaDTO();
        returnDto.setId(salva.getId());
        returnDto.setProdutoId(produto.getId().toString());
        returnDto.setProdutoNome(produto.getNome());
        returnDto.setQuantidade(salva.getQuantidade());
        returnDto.setFormaPagamento(salva.getFormaPagamento());
        returnDto.setParcelas(salva.getParcelas());
        returnDto.setDataVenda(salva.getDataVenda());

        return returnDto;
    }




    private VendaDTO toDTO(Venda venda) {
        VendaDTO dto = new VendaDTO();
        dto.setId(venda.getId());
        dto.setProdutoId(venda.getProduto().getId());
        dto.setProdutoNome(venda.getProduto().getNome());
        dto.setQuantidade(venda.getQuantidade());
        dto.setFormaPagamento(venda.getFormaPagamento());
        dto.setParcelas(venda.getParcelas());
        dto.setDataVenda(venda.getDataVenda());
        return dto;
    }

}
