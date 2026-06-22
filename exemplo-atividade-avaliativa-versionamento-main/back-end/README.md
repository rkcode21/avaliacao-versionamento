# ⚙️ Desenvolvimento Back-end

## 📝 Descrição do Projeto/Atividade
[Descreva brevemente o projeto prático que você escolheu colocar aqui. Ex: "Desenvolvimento de uma API RESTful para cadastro de usuários e controle de acessos, com criptografia de senhas (bcrypt) e geração de tokens JWT."]

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
[Substitua este texto por sua resposta. Explique em suas palavras os conceitos de back-end que você aprendeu com esta atividade, tais como: lógica de servidor, rotas HTTP (GET, POST, PUT, DELETE), tratamento de requisições e respostas, uso de middlewares, segurança/criptografia, e integração com banco de dados.]

### 2. Para que serve (Por que aprendi)?
[Substitua este texto por sua resposta. Explique qual o papel da lógica de servidor e das APIs em um ecossistema de software. Por que o desenvolvedor precisa garantir a integridade das regras de negócio e a segurança dos dados no back-end?]

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   Node.js
*   Express
*   TypeScript
*   [Outra biblioteca ou ferramenta, ex: JWT, bcryptjs, Prisma, SQLite]

---

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
[Insira aqui um trecho de código do servidor ou rotas que foi crucial para a lógica da aplicação, comentando as linhas mais importantes. Exemplo:]
```javascript
// Exemplo de código Express (substitua pelo seu):
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await database.findUserByEmail(email);
  
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ error: 'Credenciais inválidas' }); // Erro de autenticação
  }
  
  const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
  return res.json({ token }); // Retorna o token para o cliente
});
```

### Instruções para Executar
1. Instale as dependências na pasta do projeto:
   ```bash
   npm install
   ```
2. Configure as variáveis de ambiente necessárias em um arquivo `.env` (se aplicável).
3. Execute o script de inicialização do servidor:
   ```bash
   npm start
   # ou para modo de desenvolvimento:
   npm run dev
   ```
4. Teste as rotas utilizando uma ferramenta de requisições HTTP (como Postman, Insomnia ou a extensão Thunder Client do VS Code).
