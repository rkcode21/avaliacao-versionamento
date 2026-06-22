# 💻 Desenvolvimento Front-end

## 📝 Descrição do Projeto/Atividade
Desenvolvimento de uma interface de front-end moderna aplicando pré-processamento de CSS com Sass (SCSS). O projeto implementa técnicas avançadas de estilização estruturada como aninhamento de seletores (*Nesting*), variáveis nativas do CSS (:root) e criação de funções reutilizáveis de estilo (*Mixins*) para efeitos de transição e sombreamento dinâmico de elementos de UI.

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
Aprendi a otimizar a escrita de folhas de estilo utilizando o ecossistema do Sass/SCSS, organizando seletores hierarquicamente por meio de *Nesting* (como as classes filhas dentro de `.card`). Compreendi o funcionamento de `@mixin` e `@include` para reutilizar blocos de código parametrizados, injetando valores dinâmicos para sombras (`box-shadow`) e tempos de animação (`transition`). Também pratiquei a integração do pré-processador com propriedades customizadas nativas do CSS (`--primary-color`), o que une o poder das variáveis em tempo de execução com a organização limpa e modular oferecida pelo compilador do SCSS.

### 2. Para que serve (Por que aprendi)?
O uso de pré-processadores como o Sass é um padrão altamente exigido no mercado de front-end para lidar com o crescimento e a escalabilidade de folhas de estilo em aplicações complexas. Essa competência resolve o problema de repetição exaustiva de código (princípio DRY - *Don't Repeat Yourself*), reduzindo bugs e facilitando refatorações em larga escala. No cotidiano corporativo, criar componentes de interface reutilizáveis e fáceis de manter garante uma estilização uniforme, acelerando o tempo de entrega das demandas de design do produto.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   HTML5 (Estruturação semântica)
*   Sass / SCSS (Pré-processador CSS)
*   Funcionalidades CSS: *Mixins*, *Nesting*, *Pseudo-classes* (`:hover`) e *CSS Variables*

---

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
```scss
/* --- DEFINIÇÃO DE MIXINS (Funções reutilizáveis) --- */
// Cria um molde para sombras customizáveis via parâmetros
@mixin box-shadow(color, intensity) {
  box-shadow: 0 4px intensity rgba(color, 0.3);
}

// Cria um molde flexível para gerenciar transições e animações de estado
@mixin transition(\$time) {
  transition: all \$time ease;
}

/* --- APLICAÇÃO EM COMPONENTES --- */
.button {
  background: var(--primary-color);
  padding: var(--spacing-base);
  color: white;
  @include transition(0.3s); // Injeta o comportamento do mixin configurando 0.3 segundos

  // Uso do seletor pai (&) para capturar o evento de passar o mouse no botão
  &:hover {
    background: var(--secondary-color);
  }
}

.card {
  @include box-shadow(black, 10px); // Aplica o mixin de sombra passando cor e intensidade
  padding: 20px;
  
  // Conceito de Nesting (Aninhamento) para estilizar subelementos sem repetir o prefixo ".card"
  .card-title { color: var(--primary-color); }
  .card-description { font-size: var(--font-size-base); }
}
```

### Instruções para Executar
1. Certifique-se de ter o compilador do Sass instalado globalmente ou use a extensão **Live Sass Compiler** no VS Code. Caso prefira instalar via terminal:
   ```bash
   npm install -g sass
   ```
2. Inicie a compilação contínua do arquivo `.scss` para gerar o arquivo `.css` interpretado pelo navegador:
   ```bash
   sass --watch styles.scss styles.css
   ```
3. Abra o arquivo `index.html` em qualquer navegador web (ou utilizando a extensão *Live Server*) para visualizar o botão interativo e o card estilizados na tela.
