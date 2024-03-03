import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Botones from './botones';

const numRows = 20;
const numCols = 10;

// Inicializar el tablero vacío
const emptyBoard = Array.from({ length: numRows }, () => Array(numCols).fill(0));

const Tablero = () => {
  const [board, setBoard] = useState(emptyBoard);

  // Función para verificar y limpiar líneas completas
  const clearLines = (board) => {
   
  let newBoard = [...board];

  // Recorrer cada línea del tablero de abajo hacia arriba
  for (let row = newBoard.length - 1; row >= 0; row--) {
    if (newBoard[row].every(cell => cell !== 0)) {
      // Eliminar la línea completa
      newBoard.splice(row, 1);
      // Añadir una nueva línea en la parte superior del tablero
      newBoard.unshift(Array(numCols).fill(0));
      // Como eliminamos una fila, ajustamos el índice para la próxima iteración
      row++;
    }
  }

  return newBoard;
};
const handlePieceSettle = () => {
    // Aquí va la lógica para manejar una pieza que se asienta
  
    // Limpiar las líneas completas y actualizar el estado del tablero
    const newBoard = clearLines(board);
    setBoard(newBoard);
  };

  // Función para mover la pieza hacia abajo
  const movePieceDown = () => {
    // Implementar la lógica para mover la pieza hacia abajo
  };

  // UseEffect para mover la pieza hacia abajo cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      movePieceDown();
    }, 1000);
    
    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [board]);

  // Renderizar el tablero
  return (
   
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <View key={cellIndex} style={[styles.cell, { backgroundColor: cell === 0 ? 'black' : 'white' }]} />
          ))}
        </View>
      ))}
       <View style={{ flexDirection: 'row',marginTop:2000 }}>
      <Botones name="arrow-left" onPress={() => console.log('Back')} />
      <Botones name="download" onPress={() => console.log('Download')} />
      <Botones name="arrow-right" onPress={() => console.log('Forward')} />
      <Botones name="refresh" onPress={() => console.log('Refresh')} />
    </View>
    </View>
    
  );
};

const styles = {
  board: {
    marginTop:"25%",
    alignItems:"center"
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: 'gray',
  },
};

export default Tablero;
