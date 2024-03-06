# Tetris React Native App

Este proyecto es una aplicación de Tetris desarrollada en React Native. Proporciona una experiencia de juego clásica con controles intuitivos y funciones básicas del Tetris.

## Características

- **Juego de Tetris:**
  - Juega el clásico juego de Tetris con controles para mover, rotar y acelerar las piezas.
  - El juego cuenta con un tablero de 10x20 celdas y muestra la próxima pieza que aparecerá.

- **Inicio:**
  - Pantalla de inicio con el título "TETRIS" y un botón para comenzar a jugar.

- **Modal de Game Over:**
  - Se muestra un modal cuando el juego termina, permitiendo al usuario reiniciar, continuar o salir del juego.

## Componentes Principales

### `Inicio`
- Pantalla de inicio que muestra el título "TETRIS" y un botón para iniciar el juego.

### `Tablero`
- Componente principal que maneja el juego de Tetris.
- Incluye la lógica del juego, controles y la representación visual del tablero y las piezas.

### `Botones`
- Componente de botones reutilizable para las acciones del juego, como moverse a la izquierda, derecha, abajo y rotar.

### `PantallaGameOver`
- Modal que se muestra al finalizar el juego, ofreciendo opciones para reiniciar, salir o continuar.

## Controles

- **Mover a la izquierda:** Flecha izquierda o botón correspondiente.
- **Mover a la derecha:** Flecha derecha o botón correspondiente.
- **Mover hacia abajo:** Flecha abajo o botón correspondiente.
- **Rotar la pieza:** Botón de rotación.
- **Pausar/Continuar:** Botón de pausa.

## Uso

1. Clona el repositorio: `git clone https://github.com/tu-usuario/tetris-react-native.git`
2. Navega al directorio del proyecto: `cd tetris-react-native`
3. Instala las dependencias: `npm install`
4. Ejecuta la aplicación: `npm start`
5. Abre tu emulador o escanea el código QR con Expo Go en tu dispositivo.

## Tecnologías Utilizadas

- React Native
- Expo
- Componentes Funcionales
- Hooks (useState, useEffect, useRef)
- Estilos con StyleSheet
- Modal de React Native