
# Tracker

## 📖 Descrição

Este projeto é uma aplicação mobile de acompanhamento de hábitos, onde os usuários podem se cadastrar, fazer login, criar hábitos e acompanhar seu progresso diário.

## 🎨 Layout

O layout foi desenvolvido utilizando [styled-components](https://styled-components.com/), focando no design responsivo para dispositivos móveis.

## 🛠️ Recursos

- Cadastro e Login de usuários
- Persistência de sessão com Local Storage
- Criação e listagem de hábitos
- Marcar e desmarcar hábitos como feitos
- Controle de estado global utilizando Context API
- Animações de loading com [react-loader-spinner](https://mhnpd.github.io/react-loader-spinner/)
- Navegação entre telas via React Router
- Utilização de ícones via [Material Icons](https://mui.com/material-ui/material-icons/)

## 🚀 Funcionalidades

### 📋 Cadastro
- Permite o registro de novos usuários com nome, e-mail e senha
- Campos desabilitados durante o carregamento
- Em caso de sucesso, redireciona para a tela de login
- Em caso de erro, exibe uma mensagem de alerta

### 🔐 Login
- Validação de e-mail e senha
- Persistência de login utilizando Local Storage
- Redirecionamento automático para a tela de hábitos do dia ao abrir a aplicação

### 📅 Hábitos
- Listagem dos hábitos cadastrados
- Criação de novos hábitos com a seleção dos dias da semana
- Formulário de cadastro com validação e carregamento
- Possibilidade de marcar/desmarcar hábitos como concluídos

### 📆 Hábitos de Hoje
- Listagem dos hábitos a serem concluídos no dia atual
- Possibilidade de marcar como feito ou desfeito
- Atualização de progresso diário

## 🖥️ Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/joilson-dev/trackIt.git
   ```
2. Entre na pasta do projeto:
    ```bash
    cd cine-flex
    ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## 🌐 Deploy

O projeto está disponível online através do link:

[https://track-it-roan-seven.vercel.app/](https://track-it-roan-seven.vercel.app/)
