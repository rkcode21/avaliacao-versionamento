# 🗄️ Banco de Dados

## 📝 Descrição do Projeto/Atividade
Desenvolvimento e modelagem de um banco de dados relacional para controle de fluxo de caixa e inventário comercial. O projeto engloba a criação da estrutura de tabelas, população de dados transacionais e a escrita de consultas analíticas complexas envolvendo junções (`JOIN`), agrupamentos (`GROUP BY`/`HAVING`) e subconsultas (*Subqueries*) para extração de métricas de faturamento e auditoria de vendas.

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
Aprendi a estruturar bancos de dados relacionais definindo chaves primárias (`PRIMARY KEY`) e relacionamentos através de chaves estrangeiras de forma lógica. No campo de consultas, pratiquei a junção de tabelas com `JOIN` para correlacionar dados de categorias e vendas, além de consolidar registros financeiros utilizando funções de agregação como `SUM` (soma), `AVG` (média) e `COUNT` (contagem). Também compreendi conceitos avançados de filtros dinâmicos, incluindo o operador de busca parcial `LIKE` com caracteres curinga (`%`) e o uso de subconsultas (*Subqueries*) aninhadas na cláusula `WHERE` para realizar filtros baseados em cálculos calculados em tempo de execução. Por fim, aprendi a aplicar a cláusula `HAVING` para filtrar resultados agregados de grupos específicos.

### 2. Para que serve (Por que aprendi)?
A manipulação de bancos de dados relacionais e a escrita de consultas SQL otimizadas são habilidades vitais no mercado corporativo atual, servindo como base para engenharia de dados, inteligência de negócios (BI) e desenvolvimento de sistemas backend. Essa competência resolve o problema de fragmentação e desorganização de dados operacionais de uma empresa. Saber extrair métricas de forma direta do banco permite criar relatórios de auditoria, identificar quais categorias trazem maior faturamento e automatizar a tomada de decisões sem sobrecarregar a memória das aplicações.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   SQL (Structured Query Language)
*   Sistemas de Gerenciamento de Banco de Dados Relacional (Ex: SQLite, PostgreSQL, MySQL)
*   Operadores de Agregação e Seleção Condicional

---

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
```sql
-- --- PASSO A: JUNÇÃO E AGREGAÇÃO ANALÍTICA ---
-- Consolida o faturamento total trazendo o nome real da categoria
SELECT 
    c.nome_cat, 
    SUM(v.valor) as total_faturado -- Soma o preço de todas as vendas do grupo
FROM categorias c
JOIN vendas v ON c.id = v.cat_id   -- Relaciona as tabelas através do ID da categoria
GROUP BY c.nome_cat;               -- Separa e agrupa os resultados por nome da categoria


-- --- PASSO B: SUBCONSULTA DINÂMICA (SUBQUERY) ---
-- Busca produtos com preço acima da média geral da loja sem fixar um valor estático
SELECT produto, valor 
FROM vendas 
WHERE valor > (SELECT AVG(valor) FROM vendas); -- A subquery calcula a média primeiro


-- --- PASSO C: AUDITORIA COM FILTRO AVANÇADO ---
-- Seleciona a média de valor por categoria, mas apenas para grupos com volume expressivo
SELECT 
    categorias.nome_cat, 
    AVG(vendas.valor) as media_valor
FROM vendas
JOIN categorias ON categorias.id = vendas.cat_id
GROUP BY categorias.nome_cat
HAVING COUNT(vendas.id) > 3; -- Filtra o agrupamento trazendo apenas categorias com mais de 3 itens vendidos
```

### Instruções para Executar
1. Instale ou utilize um interpretador/SGBD SQL de sua preferência (como o **DBeaver**, **SQLite Studio**, ou ferramentas online como o **SQL Fiddle**).
2. Copie os comandos de `CREATE TABLE` e `INSERT INTO` fornecidos no arquivo de script para criar a estrutura do banco e preencher as tabelas de categorias e vendas.
3. Execute individualmente os blocos de consulta `SELECT` comentados acima no console do banco de dados para analisar os resultados gerados na saída de dados.
