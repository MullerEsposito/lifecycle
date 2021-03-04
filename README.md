### COMEÇANDO O PROJETO

#### Atividade 1

Criar uma aplicação que consuma a API de fotos aleatórias de cachorros. Usar a [dog.ceo](https://dog.ceo/dog-api/).

Estrutura de dados que a API retorna:

```bash 
  {
    "message": "https:\/\/images.dog.ceo/breeds/bulldog-french/n02108915_5306.jpg",
    "status": "success"
  }
```
  -  Assim que a página for montada, uma primeira requisição deve acontecer, e a imagem deve ser mostrada na tela;

  -  Enquanto a requisição é feita, o texto 'Loading...' deve ser a única coisa presente na tela;

  -  Deve existir um botão que, para cada clique, busque mais um doguinho.


#### Exercício 2

Com o código anterior, implementar mais algumas funcionalidades:

-  A cada tentativa de atualização do componente, verificar se o campo message tem a palavra terrier. Se sim, não atualizar o componente. Pesquisar pelo método includes;

-  Guardar a url da última imagem gerada no localStorage após cada atualização.

-  Após a atualização do componente, exibir um alert com a raça do doguinho (verifique o campo message);

#### Bônus

Com o último código implementar:

-  A cada foto que for baixada, através de um input, permitir que quem usa dê um nome ao doguinho;

-  Criar um botão que guarde o resultado, juntamente com o nome dado ao 'doguinho', em um array;

-  Guardar o array no localStorage a cada atualização, e não mais a url da última imagem gerada;

-  A cada inicialização da aplicação, verificar se existem dados prévios guardados no localStorage. Caso haja, ignorar a instrução "assim que a página for renderizada, uma primeira requisição deve acontecer e a imagem deve ser mostrada na tela" e exibir a última imagem guardada.
