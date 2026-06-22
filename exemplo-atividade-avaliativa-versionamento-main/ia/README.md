# 🤖 Inteligência Artificial (IA)

## 📝 Descrição do Projeto/Atividade
[Descreva brevemente o projeto prático que você escolheu colocar aqui. Ex: "Desenvolvimento de um classificador automático de sentimentos em avaliações de clientes utilizando a API do Google Gemini em Python."]

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
[Substitua este texto por sua resposta. Explique em suas palavras os conceitos de IA que você aprendeu com esta atividade, tais como: modelos de linguagem (LLMs), Engenharia de Prompts (Prompt Engineering), consumo de SDKs/APIs de IA, estruturação de dados de resposta (JSON Schema), ou conceitos de Machine Learning.]

### 2. Para que serve (Por que aprendi)?
[Substitua este texto por sua resposta. Explique como a integração de IA pode agregar valor a sistemas de software tradicionais. Quais são os casos de uso práticos no mercado onde a inteligência artificial ajuda a automatizar tarefas complexas?]

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   Python / Node.js
*   SDK do Google GenAI (Gemini API) ou OpenAI API
*   [Outra biblioteca ou ferramenta, ex: python-dotenv, LangChain]

---

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
[Insira aqui o trecho do código que faz a requisição para o modelo de IA e configura o prompt, comentando as partes fundamentais. Exemplo:]
```python
# Exemplo de código em Python usando a API do Gemini (substitua pelo seu):
import google.generativeai as genai
import os

genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel('gemini-1.5-flash')

def analisar_sentimento(texto_cliente):
    prompt = f"Analise o sentimento do seguinte texto. Responda apenas com: POSITIVO, NEGATIVO ou NEUTRO. Texto: {texto_cliente}"
    response = model.generate_content(prompt)
    return response.text.strip()
```

### Instruções para Executar
1. Certifique-se de ter o Python (ou Node.js) instalado em sua máquina.
2. Instale as dependências necessárias:
   ```bash
   pip install google-generativeai python-dotenv
   ```
3. Crie um arquivo `.env` na raiz da pasta e adicione sua chave de API:
   ```env
   GEMINI_API_KEY=sua_chave_aqui
   ```
4. Execute o script principal:
   ```bash
   python app.py
   ```
