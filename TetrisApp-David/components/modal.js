import { Modal, Text, TouchableOpacity, View,StyleSheet } from "react-native";

export default function PantallaGameOver({isModalVisible,setIsModalVisible,resetGame,handleExit}){
    return(
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Game Over</Text>
              <TouchableOpacity
                style={styles.retryButton}
                onPress={resetGame}
              >
                <Text>Retry</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.exitButton}
                onPress={handleExit}
              >
                <Text>Exit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

    )

}
const styles = StyleSheet.create({
centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  retryButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
  },
  exitButton: {
    backgroundColor: "#f44336",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
})