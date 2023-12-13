import { WINNER_COMBOS } from "../constants.js"

export const checkWinnerFrom = (boardToCheck) => {
    // Se revisan las combinaciones de ganadores
    for(const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(
        boardToCheck[a]&&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // Si no hay ganador
    return null
  }

export const checkEndGame = (newBoard) => {
    // Se revisa si hay un empate cuando no hay más espacio
    return newBoard.every((square) => square != null)
  }