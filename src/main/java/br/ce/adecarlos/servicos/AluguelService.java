package br.ce.adecarlos.servicos;

import br.ce.adecarlos.entidades.Filme;
import br.ce.adecarlos.entidades.NotaAluguel;
import br.ce.adecarlos.entidades.TipoAluguel;
import br.ce.adecarlos.entidades.utils.DataUtils;

public class AluguelService {

	public NotaAluguel alugar(Filme filme, TipoAluguel tipo) {
		if(filme.getEstoque() <= 0)
			throw new RuntimeException("Filme sem estoque");
		NotaAluguel nota = new NotaAluguel();
		
		switch (tipo) {
		case COMUM:
			nota.setPreco(filme.getAluguel());
			nota.setDataEntrega(DataUtils.obterDataComDiferencaDeDias(1)); 
			nota.setPontuacao(1);
			break;
		case EXTENDIDO:
			nota.setPreco(filme.getAluguel() * 2);
			nota.setDataEntrega(DataUtils.obterDataComDiferencaDeDias(3)); 
			nota.setPontuacao(2);
			break;
		case SEMANAL:
			nota.setPreco(filme.getAluguel() * 3);
			nota.setDataEntrega(DataUtils.obterDataComDiferencaDeDias(7)); 
			nota.setPontuacao(3);
			break;
			
		}
		filme.setEstoque(filme.getEstoque() - 1);
		
		return nota;
		
	}

}
