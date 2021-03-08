# language: pt
@unitários
Funcionalidade: Alugar filme
  Como um usuário
  Eu quero cadastrar aluguéis de filmes
  Para controlar preços e datas de entregas

  Cenário: Deve alugar um filme com sucesso
    Dado um filme com estoque de 2 unidades
    E que o preço do aluguel seja 3 reais
    Quando alugar
    Então o preço do aluguel será 3 reais
    E a data de entrega será em 1 dia
    E o estoque do filme será 1 unidade

  Cenário: Deve alugar um filme com sucesso
    Dado um filme
      | estoque |       2 |
      | preco   |       3 |
      | tipo    | semanal |
    Quando alugar
    Então o preço do aluguel será 9 reais
    E a data de entrega será em 7 dia
    E o estoque do filme será 1 unidade

  Cenário: Não deve alugar filmes sem estoque
    Dado um filme com estoque de 0 unidades
    Quando alugar
    Então não será possível por falta de estoque
    E o estoque do filme será 0 unidade

  Esquema do Cenário: Deve dar condições conforme tipo de aluguel
    Dado um filme com estoque de 2 unidades
    E que o preço do aluguel seja <preco> reais
    E que o tipo do aluguel seja <tipo>
    Quando alugar
    Então o preço do aluguel será <valor> reais
    E a data de entrega será em <qtdDias> dias
    E a pontuação será de <pontuacao> pontos

    Exemplos: 
      | preco | tipo      | valor | qtdDias | pontuacao |
      |     4 | extendido |     8 |       3 |         2 |
      |     4 | comum     |     4 |       1 |         1 |
      |     5 | semanal   |    15 |       7 |         3 |
