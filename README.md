# Explicação do Código

Este código cria uma lista de heróis, onde cada herói tem características como nome, idade, tipo e um tipo de ataque específico. 

## 1. Array de Heróis

- `array`: é um array vazio no início do código que será preenchido com instâncias da classe `Heroi`. Cada instância representa um herói com suas propriedades.

## 2. Classe Heroi

A classe `Heroi` define as propriedades e métodos para cada herói:

- **Construtor (`constructor`)**: quando uma nova instância da classe é criada, o construtor solicita ao usuário que insira o nome, a idade e o tipo do herói. Em seguida, ele define o ataque específico do herói chamando o método `atacar`.
- **Método `atacar`**: este método determina o tipo de ataque do herói com base em seu tipo. Ele usa uma estrutura `switch` para verificar o valor do tipo:
  - Se o tipo for "guerreiro", o ataque será "espada".
  - Se o tipo for "mago", o ataque será "magia".
  - Se o tipo for "monge", o ataque será "artes marciais".
  - Se o tipo for "ninja", o ataque será "shuriken".
  - Caso o tipo seja inválido, ele exibe uma mensagem de erro no console.

## 3. Loop para Criar Heróis

O primeiro `for` cria quatro instâncias da classe `Heroi` e adiciona cada uma delas ao array `array` usando o método `push`.

## 4. Loop para Exibir Ataques dos Heróis

O segundo `for` percorre o array `array` e exibe uma mensagem no console para cada herói. A mensagem inclui o tipo do herói e o tipo de ataque que ele usa, definidos pelo método `atacar`.

### Exemplo de Saída
Se o usuário inserir um herói do tipo "mago", o console exibirá:
O mago atacou usando magia

