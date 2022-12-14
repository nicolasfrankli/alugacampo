Uma plataforma de aluguel de quadras, onde temos vários estabelecimentos 
que fazem cadastro e mostram as quadras disponíveis.

requisito 1:
    - uma quadra tem várias reservas (relacionamento 1-N)
        - classe "mestre": quadra
        - classe "detalhe": reserva
    - relacionamento de herança na classe "mestre": há vários tipos de quadra
    - há o campo "id", que deve começar em 1 e ser automaticamente incrementado

requisito 2:
    - uma outra classe deve ser responsável por cadastrar, consultar, alterar e excluir as classes mestre e detalhe
    - esta classe está implementada no "pacote" controller e será responsável por gerenciar as operações da aplicação

requisito 3:
    - propor uma implementação de persistência como arquivos, lista encadeada, WEB API ou mesmo banco de dados local.
    - usamos um wrapper de manipulação de arquivos JSON para persistir os dados em memória

requisito 4:
    - os cadastros devem ter regras de validação como:
        - Não aceitar objetos duplicados;
        - Não aceitar determinados atributos vazios;
        - Validar formato de valores monetários ou números inválidos etc.
    - as regras de validação que forem violadas devem lançar exceções específicas.

requisito 5:
    - introduzir na aplicação alguma abstração através de interfaces e suas consequentes implementações.
    - a aplicação usa interfaces ao lidar com as classes dos "pacotes" repository e controller
    - isso permite que não haja comprometimento nas funcionalidades de diferentes camadas da aplicação caso a implementação delas seja alterada

requisito 6:
    - interface com usuário através de um menu capaz de tratar exceções do código
    - implementado no "pacote" view
