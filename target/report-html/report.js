$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/cadastro_de_contas.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Cadastro de contas",
  "description": "\nComo um usuário \nGostaria de cadastrar contas\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"\u003cconta\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 23,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;1"
    },
    {
      "cells": [
        "Conta de Teste",
        "Conta adicionada com sucesso!"
      ],
      "line": 24,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 25,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3"
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ],
      "line": 26,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 133162,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"abc@abc\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"abc\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 2300626554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@abc",
      "offset": 19
    }
  ],
  "location": "CadastroDeContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 83254602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 9
    }
  ],
  "location": "CadastroDeContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 49144584,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 599264556,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 23853676,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 38385087,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 358246191,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"Conta de Teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 17
    }
  ],
  "location": "CadastroDeContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 75657725,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 412971879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 19
    }
  ],
  "location": "CadastroDeContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 20372419,
  "status": "passed"
});
formatter.after({
  "duration": 490878918,
  "status": "passed"
});
formatter.after({
  "duration": 79767570,
  "status": "passed"
});
formatter.before({
  "duration": 86218,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"abc@abc\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"abc\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 2356809479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@abc",
      "offset": 19
    }
  ],
  "location": "CadastroDeContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 84589992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 9
    }
  ],
  "location": "CadastroDeContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 47856234,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 579451297,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 21184825,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 40037628,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 276548850,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "CadastroDeContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 63498890,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 240974840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 19
    }
  ],
  "location": "CadastroDeContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 21541996,
  "status": "passed"
});
formatter.after({
  "duration": 463730995,
  "status": "passed"
});
formatter.after({
  "duration": 79389924,
  "status": "passed"
});
formatter.before({
  "duration": 37072,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que estou acessando a aplicação",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o usuário \"abc@abc\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a senha \"abc\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono entrar",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "visualizo a página inicial",
  "keyword": "Então "
});
formatter.step({
  "line": 14,
  "name": "seleciono Contas",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "seleciono Adicionar",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroDeContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 2194264580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@abc",
      "offset": 19
    }
  ],
  "location": "CadastroDeContasSteps.informoOUsuário(String)"
});
formatter.result({
  "duration": 86056724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 9
    }
  ],
  "location": "CadastroDeContasSteps.aSenha(String)"
});
formatter.result({
  "duration": 54967575,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 605698833,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 21779028,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 41953500,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 230514416,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 18,
  "name": "informo a conta \"Conta mesmo nome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "recebo a mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta mesmo nome",
      "offset": 17
    }
  ],
  "location": "CadastroDeContasSteps.informoAConta(String)"
});
formatter.result({
  "duration": 78734050,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 255120834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 19
    }
  ],
  "location": "CadastroDeContasSteps.receboAMensagem(String)"
});
formatter.result({
  "duration": 25536588,
  "status": "passed"
});
formatter.after({
  "duration": 462121896,
  "status": "passed"
});
formatter.after({
  "duration": 85437949,
  "status": "passed"
});
});