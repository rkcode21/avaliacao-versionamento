import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// Simulação de uma configuração remota de versionamento de recursos (Feature Flag)
const CONFIG_SERVIDOR = {
  VERSAO_API: 'v2',
  ATIVAR_NOVO_LAYOUT: true,
};

export default function GerenciadorVersao() {
  const [carregando, setCarregando] = useState(true);
  const [dados, setDados] = useState<string | null>(null);

  useEffect(() => {
    // Simula uma chamada de API dinâmica baseada na versão configurada
    const buscarDados = async () => {
      try {
        const url = `https://meuapp.com{CONFIG_SERVIDOR.VERSAO_API}/recursos`;
        // Simula a resposta do servidor
        setTimeout(() => {
          setDados(`Dados obtidos com sucesso através do endpoint: ${url}`);
          setCarregando(false);
        }, 1200);
      } catch (erro) {
        setDados('Erro ao conectar com o servidor.');
        setCarregando(false);
      }
    };

    buscarDados();
  }, []);

  if (carregando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tagVersao}>API: {CONFIG_SERVIDOR.VERSAO_API}</Text>
      
      {CONFIG_SERVIDOR.ATIVAR_NOVO_LAYOUT ? (
        <View style={[styles.cartao, styles.cartaoNovo]}>
          <Text style={styles.textoCartao}>🚀 Versão 2.0 (Novo Layout Ativo)</Text>
          <Text style={styles.subTexto}>{dados}</Text>
        </View>
      ) : (
        <View style={[styles.cartao, styles.cartaoAntigo]}>
          <Text style={styles.textoCartao}>Versão 1.0 (Layout Legado)</Text>
          <Text style={styles.subTexto}>{dados}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    padding: 20,
  },
  tagVersao: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#64748b',
    marginBottom: 10,
  },
  cartao: {
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
  },
  cartaoNovo: {
    backgroundColor: '#eff6ff',
    borderColor: '#bfdbfe',
  },
  cartaoAntigo: {
    backgroundColor: '#ffffff',
    borderColor: '#e2e8f0',
  },
  textoCartao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 8,
  },
  subTexto: {
    fontSize: 14,
    color: '#475569',
  },
});
