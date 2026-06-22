# 📱 Desenvolvimento Mobile

## 📝 Descrição do Projeto/Atividade
Desenvolvimento de uma interface interativa em React Native focada em conceitos de UI/UX, implementando animações fluidas de opacidade (fade-in e fade-out) através da biblioteca nativa `Animated`. O projeto demonstra o controle dinâmico de estados e a alternância de componentes visuais baseados na interação do usuário.

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
Aprendi a manipular a API `Animated` do React Native utilizando referências com o hook `useRef` para persistir o valor da animação entre renderizações sem causar perda de performance. Compreendi a configuração do método `Animated.timing` para controlar a progressão da opacidade por meio de durações específicas e a importância do parâmetro `useNativeDriver: true`, que delega a execução da animação para a GPU do dispositivo móvel para manter a taxa de 60 FPS estável. Também aprofundei conhecimentos no gerenciamento de estados com `useState` e no uso de funções de callback para disparar eventos somente após a conclusão de uma transição visual.

### 2. Para que serve (Por que aprendi)?
Dominar animações e microinterações é fundamental no mercado de desenvolvimento mobile para criar interfaces intuitivas que oferecem feedback visual imediato ao usuário, aumentando o engajamento e a retenção. No dia a dia corporativo, essa competência resolve o problema de fricção na experiência do usuário (UX), elevando o nível profissional do software e garantindo que o aplicativo se comporte de maneira fluida e responsiva sob os padrões exigidos pelas lojas App Store e Google Play.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   React Native / Expo
*   JavaScript (ES6+)
*   React Hooks (`useRef`, `useState`)
*   Animated API (Nativa)

---

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
```javascript
// 1. Criamos um valor de opacidade que inicia em 0 (totalmente invisível)
// Usamos useRef para manter o mesmo valor sem forçar re-renderizações na tela
const opacidadeAnimada = useRef(new Animated.Value(0)).current;
const [visivel, setVisivel] = useState(false);

// 2. Função responsável por tornar a mensagem visível suavemente
const mostrarMensagem = () => {
  setVisivel(true); // Altera o estado para renderizar o componente na árvore do React
  Animated.timing(opacidadeAnimada, {
    toValue: 1, // Define o objetivo final da opacidade como 100% visível
    duration: 1500, // Define a duração da transição em 1.5 segundos
    useNativeDriver: true, // Direciona a animação para a GPU do aparelho para evitar travamentos
  }).start(); // Inicia a execução da animação
};

// 3. Função responsável por esconder a mensagem suavemente
const esconderMensagem = () => {
  Animated.timing(opacidadeAnimada, {
    toValue: 0, // Define o objetivo final como 0% visível (transparente)
    duration: 500, // Executa uma transição mais rápida de meio segundo
    useNativeDriver: true,
  }).start(() => setVisivel(false)); // Executa a função callback para desmontar o botão apenas quando o efeito acabar
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
