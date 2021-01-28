package br.ce.adecarlos.steps;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;




public class AprenderCucumberSteps {
	
	@Dado("^que criei o arquivo corretamente$")
	public void queCrieiOArquivoCorretamente() throws Throwable {
		System.out.println("Qualquer coisa");
	}

	@Quando("^executá-lo$")
	public void executáLo() throws Throwable {
	
	}

	@Então("^a especificação deve finalizar com sucesso$")
	public void aEspecificaçãoDeveFinalizarComSucesso() throws Throwable {

	}
	
	private int contador = 0;
	@Dado("^que o valor do contador é (\\d+)$")
	public void queOValorDoContadorÉ(int arg1) throws Throwable {
	   contador = arg1;
	}

	@Quando("^eu incrementar em (\\d+)$")
	public void euIncrementarEm(int arg1) throws Throwable {
	   contador+=arg1;
	}

	@Então("^o valor do contador será (\\d+)$")
	public void oValorDoContadorSerá(int arg1) throws Throwable {
//	    System.out.println(arg1);
//	    System.out.println(contador);
	    org.junit.Assert.assertEquals(contador, arg1);
	}
	
	Date entrega = new Date();
	
	@Dado("que a entrega é dia {data}")
	public void queAEntregaÉDia(Date data) throws Throwable {
	    entrega = data;
	    System.out.println(entrega);
	}

	@Quando("^a entrega atrasar em (\\d+) (dia|dias|mes|meses)$")
	public void aEntregaAtrasarEmDias(int arg1, String tempo) throws Throwable {
		Calendar cal = Calendar.getInstance();
	    cal.setTime(entrega);
	    
	    System.out.println(tempo);
	    if (tempo.equals("dias")) {
		cal.add(Calendar.DAY_OF_MONTH, arg1);
		} else if (tempo.equals("meses")) {
			cal.add(Calendar.MONTH, arg1);
		}
	    entrega = cal.getTime();
	}

	@Então("^a entrega será efetuada em (\\d{2}\\/\\d{2}\\/\\d{4})$")
	public void aEntregaSeráEfetuadaEm(String data) throws Throwable {
		DateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		String dataFormatada = format.format(entrega);
		Assert.assertEquals(data, dataFormatada);
	    
	}
	
	@Dado("^que o ticket (especial é|é) (AF\\d{3}|AB\\d{3})$")
	public void queOTicketÉAF(String arg1, String arg2) throws Throwable {
	    
	}

	@Dado("^que o valor da passagem é R\\$ (.*)$")
	public void queOValorDaPassagemÉR$(Double numero) throws Throwable {
		System.out.println("O valor da passagem é " + numero);
	}

	@Dado("^que o nome do passageiro é (\"Fulano da Silva\"|\"Cicrano de Oliveira\")")
	public void queONomeDoPassageiroÉ(String arg1) throws Throwable {
   
	}

	@Dado("^que o telefone do passageiro é (9999-9999|9888-8888)$")
	public void queOTelefoneDoPassageiroÉ(String num) throws Throwable {
	 
	}

	@Quando("^criar os steps$")
	public void criarOsSteps() throws Throwable {
	    
	}

	@Então("^o teste vai funcionar$")
	public void oTesteVaiFuncionar() throws Throwable {
	  
	}

//	@Dado("^que o ticket é CD(\\d+)$")
//	public void queOTicketÉCD(int arg1) throws Throwable {
//	   
//	}
//
//	@Dado("^que o ticket é AG(\\d+)$")
//	public void queOTicketÉAG(int arg1) throws Throwable {
//	   
//	}
//
//	@Dado("^que o valor da passagem é R\\$ (\\d+)\\.(\\d+),(\\d+)$")
//	public void queOValorDaPassagemÉR$(int arg1, int arg2, int arg3) throws Throwable {
//	   
//	}
//	
//	@Dado("^que o nome do passageiro é \"([^\"]*)\"$")
//	public void queONomeDoPassageiroÉr(String arg1) throws Throwable {
//	    
//	}
//	
//	@Dado("^que o telefone do passageiro é (1234-5678|999-2223)$")
//	public void queOTelefoneDoPassageiroÉr(String num) throws Throwable {
//	    
//	}


}
