<div align="center">
  <a href="#">
    <img src="./assets/icon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Fidelizi Test Mobile</h3>
</div>

Uma aplicação mobile para gerenciamento de programa de fidelidade, desenvolvida com React Native e Expo.

## Sobre o Projeto

Um aplicativo de fidelidade que permite o gerenciamento de pontos/selos para clientes de um determinado estabelecimento. O sistema possui funcionalidades como autenticação, registro de gastos, acúmulo de selos e resgate de benefícios.

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- Node.js (versão 18.x)
- Ambiente de desenvolvimento [React Native](https://react-native.rocketseat.dev/)

## Instalação

Siga os passos abaixo para instalar e configurar o projeto em sua máquina local.

1. **Clone o repositório**
   ```bash
   git clone https://github.com/mayromyller/fidelizi-test-mobile.git
   ```
2. **Navegue até o diretório do projeto**
   ```bash
   cd fidelizi-test-mobile
   ```
3. **Instale as dependências**
   ```bash
   npm install
   ```
   ou, caso utilize `yarn`:
   ```bash
   yarn install
   ```

## Executando o Projeto

Para iniciar o servidor local, execute o seguinte comando:

```bash
yarn start
```

Utilizando aplicativo [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR), escaneie o QRCode para executar o projeto.


## Arquitetura

O projeto utiliza uma adaptação da arquitetura [Vertical Slice](https://www.milanjovanovic.tech/blog/vertical-slice-architecture), organizada em camadas:

- **App Container**: Responsável pela configuração inicial do app, providers e navegação
- **Screens**: Camada de apresentação com as telas da aplicação
- **Features**: Camada que contém a lógica de negócio separada por funcionalidades
- **Infrastructure**: Camada base com serviços de persistência e utilitários

### Principais Features

1. **Autenticação**
   - Login com email e senha
   - Persistência de dados do usuário
   - Gerenciamento de sessão

2. **Gestão de Usuários**
   - Cadastro de novos clientes
   - Atualização de dados
   - Armazenamento de informações

3. **Sistema de Selos**
   - Cálculo de selos baseado no valor gasto
   - Acompanhamento de selos acumulados
   - Sistema de resgate de benefícios

## Tecnologias Principais

- React Native
- Expo
- TypeScript
- @shopify/restyle (Theming)
- Zustand (Gerenciamento de Estado)
- React Navigation
- AsyncStorage

## Funcionalidades & Regras de Negócio Principais

- **Contexto de Autenticação:**
  - Autenticação com persistência de dados no AsyncStorage
  - Provê estado de autenticação para a aplicação
  - Gerencia loading states
  - Métodos para salvar e remover credenciais
  - Inicialização automática do estado de autenticação
  - Hooks de autenticação: Expõe o contexto de autenticação
- `HomeScreen.tsx` → `AmountSpentScreen.tsx` → `ContactUserScreen.tsx` → `RegisterUserScreen.tsx` → `StampEarnScreen.tsx`
  - Compartilham hooks de gestão de usuário e selos
- **Gestão de Usuário:**
  - Usa Zustand para gerenciamento de estado
  - Persiste dados do usuário
  - Gerencia selos do usuário
- **Cálculos de Negócio:**
  - Lógica de cálculo de selos
  - Valor mínimo de R$20 por selo
- **Gestão de Selos:**
  - Gerencia a contagem de selos
  - Métodos para adicionar e remover selos
  - Integrado com o sistema de persistência
- **Integração com AsyncStorage:**
  - Implementação concreta da interface Storage
  - Métodos para persistência de dados
  - Serialização/Deserialização automática de JSON
- **Estado Compartilhado:**
  - Dados do usuário via Zustand
- **Validações e Regras:**
  - Valor mínimo para selo: R$20
  - Autenticação com email/senha fixos para teste
  - Sistema de 12 selos para benefício

 **Fluxo de Dados:**
```
  App.tsx
  ↓
  AuthContextProvider
  ↓
  Navigation
  ↓
  Screens (SignIn → Home → Amount → Contact → Register → StampEarn)
  ↓
  Features (Auth, User, Stamp)
  ↓
  Services (Storage, UserPersist)
```

## Author

- [Linkedin - Mayro Myller](https://www.linkedin.com/in/mayromyller/)
