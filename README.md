# falae-frontend2

<h1 align="center"> Falaê </h1>

<p align="center">
<img src="https://img.shields.io/badge/STATUS-EM DESENVOLVIMENTO-<COLOR>"/>
</p>

# Sobre o projeto


O Falaê é um projeto acadêmico desenvolvido em sala de aula, com a proposta de trazer a interface e interações de uma rede social

A aplicação consiste em interações entre usuários, onde os dados são coletados no site, e depois são listados no banco de dados.

Foi ultilizado o desenvolvimento backend em JAVA para registrar todas as postagens e intereções dos usuários.


# Tecnologias utilizadas
## Back end
- Java - Linguagem
- Spring Boot - Framework Backend de JAVA
- JPA - Contrato necessário para as regras de Banco de Dados 
- Hibernate - [ORM] - Gerenciador de Objetos Relacionais
- Maven - Gerenciador de Dependências do JAVA
## Front end
- HTML - Linguagem de Marcação para NAvegadores
- CSS - Linguagem de estilos para navegadores
- JS - Linguagem funcional para navegadores
- Jquery - Framework de JavaScript
- AJAX - Método de acesso aos métodos HTTP
-
## Implantação em produção
- Banco de dados: H2 Database
- Eclipse - [IDE] Ambiente de Desenvolvimento de Interfaces
- VSCode + (plugin) Live Server: Editor de texto para desenvolvimento Frontend com plugin que simula servidor para rodar as páginas
- Postman - Ambiente de testes de requestes utilizando os métodos HTTP: POST - PUT - GET - DELETE
- GIthub - Servidor de armazenamento de projetos
- Git - Sistema de Controle de Versão 
- GitBash - Terminal de acesso ao Git

# Como executar o projeto


## Front end web
Pré-requisitos: Verificar se as portas de mapeamento HTTP 8080, 5500 ou 3000 não esteja comprometidas em outras aplicações.

# Abrir o git bash;

# clonar repositório
git clone https://github.com/VilarimLucas/falae-frontend2.git

# entrar na pasta do projeto front end web
cd falae-frontend2
------------------------------------------------------------------
## Configurar o Backend
Pré-requisitos: Java 11

bash
# clonar repositório
git clone https://github.com/VilarimLucas/falae-backend.git

# entrar na pasta do projeto back end
cd falae-backend

# executar o projeto
./mvnw spring-boot:run

# Na pasta cd falae-backend executar o index.html desde que o backend esteja executado e o Spring rodando

chmod +x index.html

Obs.: Caso a aplicação não execute, o ideal é ter preparado o ambiente de desenvolvimento para simular um servidor usando VSCode + (plugin) Live Server
