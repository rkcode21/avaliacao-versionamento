import certifi
from pymongo import MongoClient
from flask import Flask, jsonify, request
from bson import ObjectId

app = Flask(__name__)

# --- CONFIGURAÇÃO DA CONEXÃO COM O MONGODB ATLAS ---
uri = "mongodb+srv://00001124211305sp_db_user:flnjBzxlffFFzoBD@cluster0.qtq50i2.mongodb.net/ecommerce?appName=Cluster0"

try:
    client = MongoClient(
        uri,
        tls=True,
        tlsCAFile=certifi.where()
    )
    db = client['ecommerce']
    produtos_collection = db['produtos']
    # Teste de conexão
    client.admin.command('ping')
    print("Conectado com sucesso ao MongoDB Atlas!")
except Exception as e:
    print(f"Erro ao conectar ao MongoDB: {e}")

# --- ROTAS DA API ---
@app.route('/')
def home():
    return "API de E-commerce rodando no MongoDB Atlas! Use /produtos para acessar os dados."

@app.route('/produtos', methods=['POST'])
def adicionar_produto():
    novo_produto = request.get_json()
    produto_id = produtos_collection.insert_one(novo_produto).inserted_id
    return jsonify({"mensagem": "Produto adicionado com sucesso!", "id": str(produto_id)}), 201

@app.route('/produtos', methods=['GET'])
def listar_produtos():
    produtos = list(produtos_collection.find())
    for produto in produtos:
        produto['_id'] = str(produto['_id'])
    return jsonify(produtos)

@app.route('/produtos/<id>', methods=['GET'])
def obter_produto(id):
    try:
        produto = produtos_collection.find_one({"_id": ObjectId(id)})
        if produto:
            produto['_id'] = str(produto['_id'])
            return jsonify(produto)
        return jsonify({"erro": "Produto não encontrado"}), 404
    except:
        return jsonify({"erro": "ID inválido"}), 400

@app.route('/produtos/<id>', methods=['PUT'])
def atualizar_produto(id):
    try:
        dados_atualizados = request.get_json()
        resultado = produtos_collection.update_one({"_id": ObjectId(id)}, {"$set": dados_atualizados})
        if resultado.matched_count > 0:
            return jsonify({"mensagem": "Produto atualizado com sucesso!"})
        return jsonify({"erro": "Produto não encontrado"}), 404
    except:
        return jsonify({"erro": "ID inválido"}), 400

@app.route('/produtos/<id>', methods=['DELETE'])
def remover_produto(id):
    try:
        resultado = produtos_collection.delete_one({"_id": ObjectId(id)})
        if resultado.deleted_count > 0:
            return jsonify({"mensagem": "Produto removido com sucesso!"})
        return jsonify({"erro": "Produto não encontrado"}), 404
    except:
        return jsonify({"erro": "ID inválido"}), 400

if __name__ == '__main__':
    app.run(debug=True)
