# ⚙️ Desenvolvimento Back-end

## 📝 Descrição do Projeto/Atividade
Desenvolvimento de uma API RESTful para gerenciamento de um e-commerce utilizando o micro-framework Flask e o banco de dados NoSQL MongoDB Atlas. O projeto implementa as operações completas de um CRUD (Create, Read, Update, Delete) para persistência de produtos, além de integrar o uso de certificados de segurança TLS (`certifi`) para autenticação segura na nuvem.

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
Aprendi a construir serviços de backend estruturando rotas HTTP com Flask e manipulando requisições com os métodos `GET`, `POST`, `PUT` e `DELETE`. Compreendi a arquitetura de bancos de dados NoSQL (orientados a documentos) manipulando coleções através do driver `PyMongo`. Também aprendi a tratar particularidades de formato de dados, como a conversão manual do `ObjectId` do BSON do MongoDB para strings legíveis em respostas `JSON` com a biblioteca `bson`, além de aplicar o tratamento de exceções com blocos `try/except` para validação de IDs inválidos e erros de conexão.

### 2. Para que serve (Por que aprendi)?
A criação de APIs REST robustas e a integração com bancos de dados gerenciados na nuvem (como o MongoDB Atlas) são competências indispensáveis no mercado corporativo atual, dominado por arquiteturas de microsserviços. Esse aprendizado resolve o problema de persistência de dados escalável e segura. Empresas precisam de sistemas que processem operações de catálogo, estoque e usuários com rapidez e tolerância a falhas, permitindo que diferentes interfaces (web, mobile ou IoT) consumam os mesmos dados de forma centralizada.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   Python 3
*   Flask (Micro-framework)
*   MongoDB Atlas (Database-as-a-Service NoSQL)
*   PyMongo (Driver oficial de conexão)
*   Certifi (Gerenciamento de certificados TLS/SSL)

---

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
```python
# --- CONFIGURAÇÃO DA CONEXÃO COM O MONGODB ATLAS ---
# String de conexão oculta contendo usuário, senha e cluster remoto
uri = "mongodb+srv://00001124211305sp_db_user:flnjBzxlffFFzoBD@cluster0.qtq50i2.mongodb.net/ecommerce?appName=Cluster0"

try:
    # Inicializa o cliente MongoDB aplicando segurança TLS e caminhos de certificados válidos
    client = MongoClient(
        uri,
        tls=True,
        tlsCAFile=certifi.where() # Garante que a conexão remota SSL seja aceita sem erros no sistema operacional
    )
    db = client['ecommerce'] # Seleciona o banco de dados
    produtos_collection = db['produtos'] # Seleciona a coleção de documentos
    client.admin.command('ping') # Executa um comando simples para testar a comunicação imediata
    print("Conectado com sucesso ao MongoDB Atlas!")
except Exception as e:
    print(f"Erro ao conectar ao MongoDB: {e}")

# --- EXEMPLO DE ROTA ATUALIZAR (PUT) ---
@app.route('/produtos/<id>', methods=['PUT'])
def atualizar_produto(id):
    try:
        dados_atualizados = request.get_json() # Captura o corpo da requisição formatado em JSON
        # Localiza o documento pelo ObjectId correspondente e sobrescreve suas propriedades com o operador \$set
        resultado = produtos_collection.update_one({"_id": ObjectId(id)}, {"\$set": dados_atualizados})
        if resultado.matched_count > 0: # Verifica se algum documento foi encontrado com esse ID
            return jsonify({"mensagem": "Produto updated com sucesso!"})
        return jsonify({"erro": "Produto não encontrado"}), 404
    except:
        return jsonify({"erro": "ID inválido"}), 400 # Retorna erro caso a string do ID falhe ao converter em ObjectId
```

### Instruções para Executar
1. Instale as dependências necessárias no seu ambiente Python:
   ```bash
   pip install flask pymongo certifi
   ```
2. Execute o servidor de desenvolvimento local da API:
   ```bash
   python nome_do_seu_arquivo.py
   ```
3. O servidor rodará por padrão no endereço `http://127.0.0`. Você pode utilizar ferramentas como **Postman**, **Insomnia** ou a extensão **Thunder Client** para testar as rotas de `/produtos`.
