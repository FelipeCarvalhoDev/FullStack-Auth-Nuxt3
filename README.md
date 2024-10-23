# FullStack Auth with Nuxt3

Este projeto é uma aplicação web desenvolvida com **Nuxt 3**, focada em **autenticação de usuário**. 
A aplicação permite o login de usuários por meio de **LinkedIn**, **Google** e **Facebook**, além de possibilitar o cadastro tradicional com credenciais (e-mail e senha), recuperação de senha e controle de perfil.

## Tecnologias Utilizadas

### Frontend:
- **Nuxt 3**: Framework full-stack baseado em Vue.js, utilizado para renderização no lado do servidor e SPA.
- **Vue 3**: Biblioteca JavaScript para criação de interfaces de usuário.
- **TailwindCSS**: Framework de CSS utilitário para estilização responsiva e customizável.
- **Pinia**: Gerenciamento de estado leve e flexível para Vue.js, com persistência de estado usando `pinia-plugin-persistedstate`.

### Backend:
- **H3**: Manipulação de requisições HTTP no lado servidor da aplicação Nuxt 3.
- **Prisma ORM**: Ferramenta para interação com o banco de dados MongoDB.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenamento de usuários e sessões.
- **JWT (Json Web Token)**: Autenticação e geração de tokens para controle de sessão.
- **bcrypt**: Criptografia de senhas de usuários que se registram com credenciais.

### Integração com OAuth:
- **Google APIs**: Autenticação via Google OAuth.
- **Facebook Login**: Autenticação via Facebook OAuth.
- **LinkedIn OAuth**: Autenticação via LinkedIn OAuth.

### Outros:
- **Axios**: Biblioteca para fazer requisições HTTP.
- **MailerSend**: Serviço de envio de e-mails para recuperação de senha e notificações.

## Funcionalidades

- **Autenticação via Google, Facebook e LinkedIn**: Permite o login usando APIs OAuth de redes sociais.
- **Cadastro com e-mail e senha**: Permite que o usuário se registre tradicionalmente, armazenando suas informações de forma segura no banco de dados.
- **Recuperação de Senha**: Usuários podem solicitar a redefinição de senha através de um link enviado para o e-mail cadastrado.
- **Persistência de Sessão**: O estado de autenticação é salvo e recuperado através do `pinia-plugin-persistedstate`.
- **Gerenciamento de Estados**: A aplicação utiliza o Pinia para gerenciamento de estado global, facilitando o controle de autenticação e manipulação de dados de usuário.

## Pré-requisitos

- Certifique-se de estar utilizando a versão **Node.js 20.16.0**. Você pode verificar sua versão atual com o comando:
  ```bash
  node -v

## Como rodar o projeto

1. **Instale as dependências**:
   ```bash
   npm install

2. **Crie um arquivo .env com as seguintes variáveis:**:
  ```bash
  DATABASE_URL=<SUA_CONEXÃO_MONGODB>
  BASE_URL=<"http://localhost:3000">
  MAILERSEND_API_KEY=<EMAIL_VERIFICADO_MAILERSENDER>
  JWT_SECRET=<SUA_SECRET_KEY>
  LINKEDIN_CLIENT_ID=<SEU_CLIENT_ID_LINKEDIN>
  LINKEDIN_CLIENT_SECRET=<SEU_CLIENT_SECRET_LINKEDIN>
  LINKEDIN_REDIRECT_URI=<SUA_REDIRECT_URI>
  GOOGLE_CLIENT_ID=<SEU_CLIENT_ID_GOOGLE>
  GOOGLE_CLIENT_SECRET=<SEU_CLIENT_SECRET_GOOGLE>
  GOOGLE_REDIRECT_URI=<SUA_REDIRECT_URI_GOOGLE>
  FACEBOOK_APP_ID=<SEU_APP_ID_FACEBOOK>
  FACEBOOK_APP_SECRET=<SEU_APP_SECRET_FACEBOOK>
  FACEBOOK_REDIRECT_URI=<SUA_REDIRECT_URI_FACEBOOK>
  ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm install

4. **Acesse a aplicação no seu navegador em**: http://localhost:3000

5. **Utilize os seguintes logins para diferentes permissões**:
  *Email:* admin@mail.com
  *Senha:* 1234

  *Email:* user@mail.com
  *Senha:* 1234


## Melhorias futuras

- **Validação dos campos no Front**
- **Envio de email de confirmação de cadastro**
- **Incrementar mais dados para o usuário (Ex. Fotos)**
- **Editar dados do usuário**
- **Listar usuários para o Admin**
- **Admin poder definir perfil de usuários**
- **Implementação de testes automatizados**
