# 🤖 Inteligência Artificial (IA)

## 📝 Descrição do Projeto/Atividade
Desenvolvimento do ecossistema de backend de uma aplicação de Inteligência Artificial Generativa para criação automatizada de frases inspiradoras. O projeto utiliza o framework Express em Node.js sob a arquitetura MVC (Model-View-Controller) para servir uma interface estática segura e expor um endpoint de API responsável por intermediar requisições assíncronas direcionadas a modelos de linguagem externos.

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
Aprendi a construir uma infraestrutura de backend em Node.js utilizando os arquivos centrais `server.js` para inicialização do servidor e `package.json` para o gerenciamento de dependências. Compreendi a importância de aplicar a arquitetura MVC para isolar as rotas da aplicação da camada lógica de controle. No escopo de Inteligência Artificial, aprendi que o servidor atua como um intermediário crítico (camada de proxy assíncrona com `node-fetch`) para consumir modelos LLM ou APIs de NLP externas. Essa abordagem é essencial para tratar dados de forma estruturada via JSON e proteger chaves de autenticação sensíveis contra exposição direta no lado do cliente.

### 2. Para que serve (Por que aprendi)?
A integração de sistemas web tradicionais a modelos de Inteligência Artificial é uma das demandas de engenharia de software mais requisitadas pelo mercado atual. Esse aprendizado resolve o desafio prático de colocar modelos teóricos de IA em produção de maneira segura, robusta e escalável. No ambiente corporativo, dominar a construção de APIs que encapsulam serviços inteligentes permite que empresas criem assistentes automatizados, geradores de conteúdo sob demanda e ferramentas de análise preditiva integradas nativamente a seus produtos digitais.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   Node.js (Ambiente de execução)
*   Express (Framework web e roteamento de APIs)
*   Node-Fetch (Consumo assíncrono de serviços externos no servidor)
*   Arquitetura de Software MVC (Model-View-Controller)

---

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
```javascript
// server.js - Arquivo central de inicialização do servidor HTTP do projeto
const express = require('express');
const path = require('path');
// Importação do Controller que abstrai as chamadas lógicas do modelo de IA
const fraseController = require('./controllers/frasecontroller');

const app = express();
// Middleware obrigatório para habilitar a API a interpretar corpos de requisição estruturados em JSON
app.use(express.json());

// Rota raiz configurada para servir a interface front-end do gerador de forma segura
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'gerador_frase-seguro.html'));
});

// Rota POST que recebe a requisição do usuário e aciona a lógica de geração por IA no controller
app.post('/api/inspiracao', fraseController.gerarInspiracao);

// Inicializa o listener do servidor na porta lógica 3000
app.listen(3000, () => {
  console.log("Servidor iniciado em http://localhost:3000");
});
```

### Instruções para Executar
1. Instale as dependências listadas no `package.json` executando o gerenciador de pacotes na raiz do projeto:
   ```bash
   npm install
   ```
2. Inicie o servidor Node.js utilizando o script nativo configurado:
   ```bash
   npm start
   ```
3. O console exibirá a mensagem de confirmação do servidor. Acesse `http://localhost:3000` em seu navegador para testar a comunicação com a interface inteligente.
