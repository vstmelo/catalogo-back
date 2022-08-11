# Catalogo

### Objetivo do projeto

Desafio Tech - Full, avaliação prática

O projeto tem como objetivo ser um catálogo de filmes com informações básicas de título, descrição, diretor e produtor.

### Atores <a id="atores"></a>

- Usuário não autenticado: refere-se ao público externo, pessoas que não possuem uma conta no sistema, no entanto, comporta todas as operações realizadas por todo tipo de usuário.


### Requisitos funcionais <a id="requisitos-funcionais"></a>

#### **Usuário não autenticado** <a id="requisitos-funcionais--usuario-nao-autenticado"></a>

1. O usuário não autenticado consulta 50 filmes, extrai as informações de título, banner, descrição, diretor e produtor 


### Estilo arquitetural em camadas

O estilo arquitetural em camadas é utilizado  para uma melhor separação de responsabilidades no código da aplicação e suas regras de negócios. 

## Fluxo de trabalho <a id="fluxo-trabalho"></a>

O fluxo de trabalho utilizado é uma simplificação do [git flow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow) presente no tutorial da atlassian.

### Branches <a id="fluxo-trabalho--branches"></a>

As nomenclaturas dos branches foram retiradas também do tutorial do tutorial da atlassian sobre gitflow.

- **main:** branch que representa o código rodando atualmente em ambiente de produção, não deve receber nenhum commit diretamente e apenas realiza merge com a branch develop.

- **feat/ :** prefixo para todos os branches que representam uma nova funcionalidade a ser adicionada na aplicação. Exemplos de nomes para features são: feature/realizar-login, feature/cadastrar-usuario, feature/realizar-logout, etc.

