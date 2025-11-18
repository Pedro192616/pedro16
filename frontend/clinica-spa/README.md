# Clinica SPA

Este projeto é uma aplicação de página única (SPA) desenvolvida em React, que serve como um sistema de agendamento para uma clínica. A aplicação possui três páginas principais: Home, Sobre e Agendamento.

## Estrutura do Projeto

```
clinica-spa
├── public
│   └── index.html          # Arquivo HTML principal
├── src
│   ├── App.jsx             # Componente principal que configura as rotas
│   ├── index.jsx           # Ponto de entrada da aplicação React
│   ├── App.css             # Estilos CSS da aplicação
│   ├── pages
│   │   ├── Home.jsx        # Página inicial com boas-vindas
│   │   ├── About.jsx       # Página com descrição da clínica
│   │   └── Schedule.jsx     # Página de agendamento com formulário
│   ├── components
│   │   ├── Header.jsx      # Componente de cabeçalho
│   │   └── Footer.jsx      # Componente de rodapé
│   ├── services
│   │   └── api.js          # Funções para interagir com a API do back-end
│   └── utils
│       └── validators.js    # Funções de validação para o formulário
├── .gitignore              # Arquivo para ignorar arquivos no Git
├── package.json            # Dependências e informações do projeto
└── README.md               # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:
   ```
   cd clinica-spa
   ```

3. Instale as dependências:
   ```
   npm install
   ```

## Uso

Para iniciar a aplicação, execute o seguinte comando:
```
npm start
```
A aplicação estará disponível em `http://localhost:3000`.

## Funcionalidades

- **Página Inicial**: Exibe o nome da clínica e uma mensagem de boas-vindas.
- **Sobre**: Fornece uma breve descrição da clínica e seus horários de funcionamento.
- **Agendamento**: Permite que os usuários preencham um formulário para agendar consultas, com validação de campos obrigatórios e integração com a API do back-end.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.