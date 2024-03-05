import React, { useState } from 'react';
import { Text, TouchableOpacity, ImageBackground, View, StyleSheet } from 'react-native';
import Tablero from './tablero';
import {colors} from '../styles/colors'; // Asegúrate de que este archivo exista y esté correctamente exportado.

export default function Inicio() {
  const [currentView, setCurrentView] = useState('inicio');

  const handleChangeView = (view) => {
    setCurrentView(view);
  };
  return currentView === 'inicio' ? (
    <ImageBackground
      source={require('../assets/tetrisFondo.png')}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>TETRIS</Text>
      </View>
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => setCurrentView('juego')}
      >
        <Text style={styles.playButtonText}>JUGAR</Text>
      </TouchableOpacity>
    </ImageBackground>
  ) : (
    <Tablero onChangeView={handleChangeView} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  title: {
    color: '#FFA500',
    fontSize: 48,
    fontWeight: 'bold',
  },
  playButton: {
    marginBottom: 350,
    backgroundColor: '#9400D3',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    alignSelf: 'center',
    width: "50%",
  },
  playButtonText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
