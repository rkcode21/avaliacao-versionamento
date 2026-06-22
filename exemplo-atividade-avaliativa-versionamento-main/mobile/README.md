# 📱 Desenvolvimento Mobile

## 📝 Descrição do Projeto/Atividade
[Descreva brevemente o projeto prático que você escolheu colocar aqui. Ex: "Desenvolvimento de um aplicativo de previsão do tempo em React Native e TypeScript, integrado com a API OpenWeatherMap."]

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
[Substitua este texto por sua resposta. Explique em suas palavras os conceitos teóricos e práticos de desenvolvimento mobile que você aprendeu com esta atividade, tais como: componentes, Hooks do React (useState, useEffect), tratamento de estados assíncronos, consumo de APIs, estilização, etc.]

### 2. Para que serve (Por que aprendi)?
[Substitua este texto por sua resposta. Explique qual a relevância de aprender a desenvolver aplicativos móveis nativos/híbridos com React Native para o mercado de trabalho atual. Qual problema real esta competência resolve no dia a dia corporativo?]

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   React Native / Expo
*   TypeScript
*   [Outra biblioteca, ex: Axios, React Navigation, React Native Vector Icons]

---

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
[Insira aqui um trecho de código TypeScript/React Native que foi crucial para o projeto, comentando as linhas mais importantes para demonstrar seu entendimento. Exemplo:]
```tsx
// Exemplo de código (substitua pelo seu):
const fetchWeatherData = async (city: string) => {
  try {
    setLoading(true);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=SUA_API_KEY`);
    const data = await response.json();
    setWeather(data);
  } catch (err) {
    setError('Não foi possível carregar os dados de clima.');
  } finally {
    setLoading(false);
  }
};
```

### Instruções para Executar
1. Instale as dependências na pasta do projeto:
   ```bash
   npm install
   ```
2. Inicialize o servidor de desenvolvimento do Expo:
   ```bash
   npx expo start
   ```
3. Use o aplicativo Expo Go em seu dispositivo móvel ou um emulador Android/iOS para visualizar.
