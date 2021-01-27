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
formatter.scenario({
  "line": 8,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro-de-contas;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
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
formatter.step({
  "line": 16,
  "name": "informo a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "seleciono Salvar",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "a conta é inserida com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroDeContasSteps.queEstouAcessandoAAplicação()"
});
formatter.result({
  "duration": 3296066015,
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
  "duration": 96689093,
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
  "duration": 51410693,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.selecionoEntrar()"
});
formatter.result({
  "duration": 662345063,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.visualizoAPáginaInicial()"
});
formatter.result({
  "duration": 22512088,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.selecionoContas()"
});
formatter.result({
  "duration": 39621265,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.selecionoAdicionar()"
});
formatter.result({
  "duration": 245389199,
  "status": "passed"
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
  "duration": 75144588,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.selecionoSalvar()"
});
formatter.result({
  "duration": 372209928,
  "status": "passed"
});
formatter.match({
  "location": "CadastroDeContasSteps.aContaÉInseridaComSucesso()"
});
formatter.result({
  "duration": 15886962,
  "status": "passed"
});
});