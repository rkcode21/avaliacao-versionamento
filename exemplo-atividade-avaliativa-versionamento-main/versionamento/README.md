# 🔧 Versionamento e Gestão de Código

## 📝 Descrição do Projeto/Atividade
Desenvolvimento de uma estrutura de controle de versionamento interno e alternância de recursos (*Feature Flags*) em React Native utilizando TypeScript. O projeto simula o consumo dinâmico de endpoints de API baseados em versões específicas (`v1`/`v2`) e renderiza componentes de interface de forma condicional, permitindo atualizações em tempo real sem a necessidade de republicar o aplicativo nas lojas.

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
Aprendi a implementar padrões de arquitetura voltados para a resiliência de software, como o desacoplamento de endpoints através de variáveis de configuração. Pratiquei a renderização condicional avançada baseada em estados booleanos externos (*Feature Flags*) e o gerenciamento de ciclos de vida com o hook `useEffect` para requisições assíncronas tratadas com tipagem estática no TypeScript. Compreendi também como simular estados de carregamento (*loading*) com o componente nativo `ActivityIndicator` para melhorar a experiência do usuário durante o tráfego de dados.

### 2. Para que serve (Por que aprendi)?
O versionamento de código e o controle de recursos em produção são cruciais no mercado de trabalho para mitigar riscos durante o lançamento de novas funcionalidades. No ambiente corporativo, essa técnica resolve o problema de indisponibilidade do sistema e permite realizar testes A/B ou implementações graduais (*canary releases*). Isso evita que falhas em novas versões da API quebrem o aplicativo dos usuários finais e facilita a manutenção contíniva do código por múltiplas equipes de desenvolvimento.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   React Native / Expo
*   TypeScript
*   React Hooks (`useState`, `useEffect`)
*   ActivityIndicator API (Nativa)

---

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
```tsx
// Simulação de um objeto de configuração recebido remotamente pelo aplicativo
const CONFIG_SERVIDOR = {
  VERSAO_API: 'v2',
  ATIVAR_NOVO_LAYOUT: true,
};

export default function GerenciadorVersao() {
  const [carregando, setCarregando] = useState(true);
  const [dados, setDados] = useState<string | null>(null);

  useEffect(() => {
    // Função assíncrona que monta a URL dinamicamente conforme a versão configurada
    const buscarDados = async () => {
      try {
        const url = `https://meuapp.com{CONFIG_SERVIDOR.VERSAO_API}/recursos`;
        
        // Simula o tempo de resposta da rede (1.2 segundos)
        setTimeout(() => {
          setDados(`Dados obtidos com sucesso através do endpoint: ${url}`);
          setCarregando(false); // Finaliza o estado de loading
        }, 1200);
      } catch (erro) {
        setDados('Erro ao conectar com o servidor.');
        setCarregando(false);
      }
    };

    buscarDados();
  }, []); // Executa apenas uma vez na montagem do componente
}
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
