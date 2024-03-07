import React, { useState, useEffect, useRef } from 'react';
import { Modal, View, StyleSheet, Text, TouchableOpacity, ImageBackground, Button, BackHandler } from 'react-native';
import Botones from './botones';
import Figuras from './figuras';
import PantallaGameOver from './modal';

// Define the board dimensions
const numCols = 10;
const numRows = 20;
const getRandomFigure = () => {
  const figureKeys = Object.keys(Figuras);
  const randomKey = figureKeys[Math.floor(Math.random() * figureKeys.length)];
  return { ...Figuras[randomKey], rotationIndex: 0 };
};
const createEmptyBoard = () =>
  Array.from({ length: numRows }, () => Array(numCols).fill(0));


export default function Tablero({ onChangeView }) {
  // Initialize the board state with empty cells
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState(getRandomFigure());
  const [position, setPosition] = useState({ x: numCols / 2 - 1, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [nextPiece, setNextPiece] = useState(getRandomFigure());
  const [speed, setSpeed] = useState(800);
  const [pausa, setPausa] = useState(false);



  const intervalRef = useRef();
  useEffect(() => {
    // Update speed only when level changes
    setSpeed(getIntervalTime(level));
  }, [level]);
  useEffect(() => {
    // Update speed only when pausing and resuming
    if (!pausa) {
      setSpeed(getIntervalTime(level));
    }
  }, [pausa]);
  useEffect(() => {
    const newLevel = Math.floor(score / 100) + 1;
    if (newLevel !== level) {
      setLevel(newLevel);
    }
  }, [score, level]);

  useEffect(() => {
    // Set the interval for moving pieces down only when not paused
    if (!pausa) {
      clearInterval(intervalRef.current); // Clear any existing interval
      intervalRef.current = setInterval(() => {
        movePiece({ x: 0, y: 1 });
      }, speed);
    } else {
      clearInterval(intervalRef.current); // Clear the interval when the game is paused
    }

    return () => clearInterval(intervalRef.current); // Cleanup interval on component unmount
  }, [speed, pausa, position, currentPiece]);

  const pararTiempo = () => {
    if (pausa) {
      setSpeed(getIntervalTime())
      setPausa(false)
    } else {
      setSpeed(null)
      setPausa(true)
    }
  }

  console.log(speed)

  const getIntervalTime = () => {
    return 800 - (level - 1) * 50; // Only calculate and return the speed here
  };



  const checkCollision = (newPosition) => {
    const { shapes, rotationIndex } = currentPiece;
    const shape = shapes[rotationIndex % shapes.length];
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] !== 0) {
          const newX = newPosition.x + x;
          const newY = newPosition.y + y;
          if (newX < 0 || newX >= numCols || newY >= numRows || board[newY][newX] !== 0) {
            return true;
          }
        }
      }
    }
    return false;
  };



  const checkGameOver = () => {
    const gameOverCheck = board[0].some(cell => cell !== 0);
    if (gameOverCheck) {
      setIsModalVisible(true); // Show the modal when game over is detected
    }
    return gameOverCheck;
  };



  const handleExit = () => {
    setIsModalVisible(false);
    onChangeView('inicio');
  };





  const resetGame = () => {
    setPausa(false);
    setSpeed(800);
    setNextPiece(getRandomFigure());
    setBoard(createEmptyBoard());
    setCurrentPiece(getRandomFigure());
    setPosition({ x: numCols / 2 - 1, y: 0 });
    setGameOver(false);
    setIsModalVisible(false);
  };


  const lockPieceAndGenerateNewOne = () => {
    const newBoard = board.map((row, y) =>
      row.map((cell, x) => {
        if (currentPiece.shapes[currentPiece.rotationIndex][y - position.y] &&
          currentPiece.shapes[currentPiece.rotationIndex][y - position.y][x - position.x]) {
          return currentPiece.shapes[currentPiece.rotationIndex][y - position.y][x - position.x]
            ? currentPiece.color
            : cell;
        }
        return cell;
      })
    );

    const { linesCleared, newBoard: updatedBoard } = clearLines(newBoard);
    if (linesCleared > 0) {
      setScore(prevScore => prevScore + linesCleared * 100);
    }
    setBoard(updatedBoard);

    if (checkGameOver()) {
      setGameOver(true);
      setScore(0);
    } else {
      setCurrentPiece(nextPiece); 
      setNextPiece(getRandomFigure());
      setPosition({ x: numCols / 2 - 1, y: 0 });
    }
  };

  const clearLines = (boardToCheck) => {
    let linesCleared = 0;
    let newBoard = boardToCheck.map(row => [...row]); 

    for (let y = newBoard.length - 1; y >= 0; y--) {
      if (newBoard[y].every(cell => cell !== 0)) {
        linesCleared++;
        newBoard.splice(y, 1);
        newBoard.unshift(Array(numCols).fill(0));
      }
    }

    return { linesCleared, newBoard };
  };



  const renderNextPiecePreview = () => {
    const { shapes, rotationIndex, color } = nextPiece;
    const shape = shapes[rotationIndex % shapes.length];

    return shape.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.previewRow}>
        {row.map((cell, cellIndex) => (
          <View
            key={cellIndex}
            style={[styles.previewCell, { backgroundColor: cell ? color : 'transparent' }]}
          />
        ))}
      </View>
    ));
  };


  const movePiece = (direction, isSoftDrop = false) => {
    if (gameOver) return;

    const newPos = { x: position.x + direction.x, y: position.y + direction.y };
    if (!checkCollision(newPos)) {
      setPosition(newPos);
    } else if (direction.y > 0) {
      lockPieceAndGenerateNewOne();
      if (isSoftDrop) {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
          movePiece({ x: 0, y: 1 });
        }, getIntervalTime(level));
      }
    }
  };


  const renderBoard = () => {
    const boardCopy = createEmptyBoard();
    for (let y = 0; y < numRows; y++) {
      for (let x = 0; x < numCols; x++) {
        boardCopy[y][x] = board[y][x];
      }
    }

    const { shapes, rotationIndex, color } = currentPiece;
    const shape = shapes[rotationIndex % shapes.length];
    shape.forEach((row, y) => row.forEach((value, x) => {
      if (value !== 0 && position.y + y >= 0) {
        boardCopy[position.y + y][position.x + x] = color;
      }
    }));

    return boardCopy;
  };

  
  const closeApp = () => {
    BackHandler.exitApp(); 
  };
  const moveLeft = () => movePiece({ x: -1, y: 0 });
  const moveRight = () => movePiece({ x: 1, y: 0 });
  const moveDown = () => movePiece({ x: 0, y: 1 });
  const rotate = () => {
    const newRotationIndex = (currentPiece.rotationIndex + 1) % currentPiece.shapes.length;
    setCurrentPiece({ ...currentPiece, rotationIndex: newRotationIndex });
  };
  if (pausa) {
    return (
      <View style={{ alignContent: "center", marginTop: "75%" }}>
        <View style={{ alignContent: "center", marginBottom:20 }}>
          <Button
            title='continuar'
            onPress={() => pararTiempo()}
          ></Button>
        </View>
        <View style={{ alignContent: "center", marginBottom:20 }}>
          <Button
            title='reiniciar'
            onPress={() => resetGame()}
          ></Button>
        </View>
        <View style={{ alignContent: "center", marginBottom:20 }}>
          <Button
            title='salir'
            onPress={() => closeApp()}
          ></Button>
        </View>
        <View>
          <Button
            title='inicio'
            onPress={() => handleExit()}
          ></Button>
        </View>
      </View>




    )
  }

  return (
    <View style={styles.container}>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>SCORE: {score}</Text>
        <Text style={styles.scoreText}>level: {level}</Text>
        <Button
          title={pausa ? 'Resume' : 'Pause'}
          onPress={() => pararTiempo()}
        ></Button>
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Proxima figura: { }</Text>

      </View>
      <View style={styles.nextPieceContainer}>
        {renderNextPiecePreview()}
      </View>

      <View style={styles.board}>
        {renderBoard().map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, cellIndex) => (
              <View
                key={cellIndex}
                style={[styles.cell, { backgroundColor: cell || 'black' }]}
              />
            ))}
          </View>
        ))}
      </View>
      <View style={styles.controlsContainer}>
        <Botones name="arrow-left" onPress={() => moveLeft('left')} />
        <Botones name="arrow-down" onPress={() => moveDown('down')} />
        <Botones name="arrow-right" onPress={() => moveRight('right')} />
        <Botones name="refresh" onPress={() => rotate('rotate')} />
      </View>
      <View>
        <PantallaGameOver isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} resetGame={resetGame} handleExit={handleExit}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#003366",
    paddingTop: 50,
  },

  cell: {
    width: 29,
    height: 29,
    borderWidth: 1,
    borderColor: 'grey',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  scoreText: {
    color: 'white',
  },
  boardContainer: {

    width: 300,
    height: 600,
  },
  board: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'black',


  },
  row: {
    flexDirection: 'row',

  },


  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
 
  nextPieceContainer: {
    borderColor: "grey",
    height: 20,
    width: 80, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18
  },
  previewRow: {
    flexDirection: 'row',
  },
  previewCell: {
    width: 20,
    height: 20, 
    borderWidth: 1,
    borderColor: 'grey',
  },
});