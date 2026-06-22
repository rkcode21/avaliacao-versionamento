import React, { useRef, useState } from 'react';
import { Animated, View, Text, Button, StyleSheet } from 'react-native';

export default function ExemploAnimacao() {
  // 1. Criamos um valor que o React Native vai controlar por trás dos panos
  // Começa em 0 (Totalmente transparente/invisível)
  const opacidadeAnimada = useRef(new Animated.Value(0)).current;
  const [visivel, setVisivel] = useState(false);

  // 2. Função que dispara a animação de aparecer
  const mostrarMensagem = () => {
    setVisivel(true);
    Animated.timing(opacidadeAnimada, {
      toValue: 1, // Vai até 1 (100% visível)
      duration: 1500, // Demora 1.5 segundos
      useNativeDriver: true, // Usa a placa de vídeo do celular para não travar
    }).start();
  };

  // Função para esconder (Reset)
  const esconderMensagem = () => {
    Animated.timing(opacidadeAnimada, {
      toValue: 0,
      duration: 500, // Esconde mais rápido (meio segundo)
      useNativeDriver: true,
    }).start(() => setVisivel(false)); // Só muda o estado quando a animação terminar
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Teste de UI/UX</Text>
     
      {!visivel ? (
        <Button title="Revelar Mensagem Secreta" onPress={mostrarMensagem} />
      ) : (
        <Button title="Esconder Mensagem" onPress={esconderMensagem} color="#ef4444" />
      )}

      {/* 3. A caixa que vai ser animada PRECISA ser Animated.View */}
      <Animated.View style={[styles.caixaSecreta, { opacity: opacidadeAnimada }]}>
        <Text style={styles.textoSecreto}>
          texto Escondido
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#334155'
  },
  caixaSecreta: {
    marginTop: 40,
    padding: 20,
    backgroundColor: '#10b981',
    borderRadius: 10,
    elevation: 5, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  textoSecreto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
