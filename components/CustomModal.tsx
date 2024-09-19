import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

type CustomModalProps = {
  visible: boolean;
  onClose: () => void;
};

const CustomModal: React.FC<CustomModalProps> = ({visible, onClose}) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Image
          source={require('../assets/images/unmatch_modal.png')}
          style={styles.modalImg}
        />
        <Text style={styles.modalTitle}>Unmatch</Text>
        <Text style={styles.modalText}>
          Are you sure you want to unmatch Alex Carter?
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonNo]}
            onPress={onClose}>
            <Text style={[styles.textStyle, styles.textNo]}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonYes]}
            onPress={onClose}>
            <Text style={[styles.textStyle, styles.textYes]}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    gap: 10,
  },
  modalImg: {
    width: 121,
    height: 121,
  },
  modalTitle: {
    fontSize: 24,
    color: '#6e6d8f',
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    color: '#6e6d8f',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    borderRadius: 50,
    padding: 15,
    elevation: 2,
    width: '40%',
  },
  buttonNo: {
    backgroundColor: '#f8f8f8',
  },
  buttonYes: {
    backgroundColor: '#f00',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textNo: {
    color: 'black',
  },
  textYes: {
    color: 'white',
  },
});

export default CustomModal;
