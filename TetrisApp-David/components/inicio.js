import React, { useState } from 'react';
import {colors} from '../styles/colors'
import {Text, TouchableOpacity, ImageBackground, View } from 'react-native';
import Tablero from './tablero';

export default function Inicio(){
    const [currentView, setCurrentView] = useState('inicio'); // Estado para controlar la vista actual

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
        onPress={() => setCurrentView('juego')} // Cambia la vista actual a Juego
      >
        <Text style={styles.playButtonText}>JUGAR</Text>
      </TouchableOpacity>
    </ImageBackground>
  ) : (
    <Tablero /> // Renderiza el componente Juego si currentView es 'juego'
  );
}
const styles = {
    container: {
        width:"100%",
        height:"100%"
     
    },
    header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 80, // Adjust the value as per your design
    },
    title: {
      color: '#FFA500', // Sample color for the text
      fontSize: 48, // Adjust the size as per your design
      fontWeight: 'bold',
    },
    playButton: {
      marginBottom: 350, // Adjust the value as per your design
      backgroundColor: '#9400D3', // Sample purple color
      paddingVertical: 15,
      borderRadius: 25,
      alignItems: "center",
      width:"50%",
      marginLeft:"25%"
      
    },
    playButtonText: {
      color: colors.white,
      fontSize: 24, // Adjust the size as per your design
      fontWeight: 'bold',
    },
  };
  