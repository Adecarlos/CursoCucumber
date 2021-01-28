$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/alugar_filme.feature");
formatter.feature({
  "name": "Alugar filme",
  "description": "\tComo um usuário\n\tEu quero cadastrar aluguéis de filmes\n\tPara controlar preços e datas de entregas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.scenario({
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja 3 reais",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSejaReais(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será 3 reais",
  "keyword": "Então "
});
formatter.match({
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSeráReais(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 1 dia",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "um filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ]
    },
    {
      "cells": [
        "preco",
        "3"
      ]
    },
    {
      "cells": [
        "tipo",
        "semanal"
      ]
    }
  ],
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmesSteps.umFilme(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será 9 reais",
  "keyword": "Então "
});
formatter.match({
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSeráReais(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 7 dia",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Não deve alugar filmes sem estoque",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "não será possível por falta de estoque",
  "keyword": "Então "
});
formatter.match({
  "location": "AlugarFilmesSteps.não_será_possível_por_falta_de_estoque()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o estoque do filme será 0 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "name": "que o preço do aluguel seja \u003cpreco\u003e reais",
  "keyword": "E "
});
formatter.step({
  "name": "que o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "name": "o preço do aluguel será \u003cvalor\u003e reais",
  "keyword": "Então "
});
formatter.step({
  "name": "a data de entrega será em \u003cqtdDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "name": "a pontuação será de \u003cpontuacao\u003e pontos",
  "keyword": "E "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ]
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ]
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ]
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja 4 reais",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSejaReais(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja extendido",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será 8 reais",
  "keyword": "Então "
});
formatter.match({
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSeráReais(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 3 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação será de 2 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja 4 reais",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSejaReais(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja comum",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será 4 reais",
  "keyword": "Então "
});
formatter.match({
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSeráReais(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 1 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação será de 1 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.match({
  "location": "AlugarFilmesSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja 5 reais",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.queOPreçoDoAluguelSejaReais(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja semanal",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "Quando "
});
formatter.match({
  "location": "AlugarFilmesSteps.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será 15 reais",
  "keyword": "Então "
});
formatter.match({
  "location": "AlugarFilmesSteps.oPreçoDoAluguelSeráReais(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 7 dias",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação será de 3 pontos",
  "keyword": "E "
});
formatter.match({
  "location": "AlugarFilmesSteps.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/aprender_cucumber.feature");
formatter.feature({
  "name": "Aprender Cucumber",
  "description": "\tComo um aluno\n\tEu quero aprender a utilizar Cucumber\n\tPara que eu possa automatizar critérios de aceitação",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.scenario({
  "name": "Deve executar especificação",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que criei o arquivo corretamente",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queCrieiOArquivoCorretamente()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "executá-lo",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.executáLo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a especificação deve finalizar com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEspecificaçãoDeveFinalizarComSucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve incrementar contador",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o valor do contador é 15",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDoContadorÉ(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu incrementar em 3",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.euIncrementarEm(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o valor do contador será 18",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.oValorDoContadorSerá(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve incrementar contador",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    },
    {
      "name": "@tipo1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o valor do contador é 123",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDoContadorÉ(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu incrementar em 35",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.euIncrementarEm(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o valor do contador será 158",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.oValorDoContadorSerá(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve calcular atraso na entrega",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    },
    {
      "name": "@tipo2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que a entrega é dia 05/04/2018",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queAEntregaÉDia(Date)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a entrega atrasar em 2 dias",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEntregaAtrasarEmDias(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a entrega será efetuada em 07/04/2018",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEntregaSeráEfetuadaEm(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve calcular atraso na entrega da China",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    },
    {
      "name": "@tipo1"
    },
    {
      "name": "@tipo2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que a entrega é dia 05/04/2018",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queAEntregaÉDia(Date)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a entrega atrasar em 2 meses",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEntregaAtrasarEmDias(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a entrega será efetuada em 05/06/2018",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.aEntregaSeráEfetuadaEm(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve criar steps genéricos para estes passos",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o ticket é AF345",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTicketÉAF(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o valor da passagem é R$ 230,45",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o nome do passageiro é \"Fulano da Silva\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o telefone do passageiro é 9999-9999",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTelefoneDoPassageiroÉ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "criar os steps",
  "keyword": "Quando "
});
formatter.match({
  "location": "AprenderCucumberSteps.criarOsSteps()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o teste vai funcionar",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.oTesteVaiFuncionar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve reaproveitar os steps \"Dado\" do cenário anterior",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o ticket é AB167",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTicketÉAF(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o ticket especial é AB167",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTicketÉAF(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o valor da passagem é R$ 1120,23",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOValorDaPassagemÉR$(Double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o nome do passageiro é \"Cicrano de Oliveira\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o telefone do passageiro é 9888-8888",
  "keyword": "Dado "
});
formatter.match({
  "location": "AprenderCucumberSteps.queOTelefoneDoPassageiroÉ(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve negar todos os steps \"Dado\" dos cenários anteriores\u2028    Dado que o ticket é CD123\u2028    Dado que o ticket é AG1234\u2028    Dado que o valor da passagem é R$ 1.1345,56\u2028    Dado que o nome do passageiro é \"Beltrano Souza Matos de Alcântara Azevedo\"\u2028    Dado que o telefone do passageiro é 1234-5678\u2028    Dado que o telefone do passageiro é 999-2223",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@unitários"
    },
    {
      "name": "@ignore"
    }
  ]
});
});