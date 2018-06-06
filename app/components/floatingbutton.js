import React, { Component } from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { Button, Text} from "react-native-elements";

export default class FloatingButton extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ flex: 3 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          // onRequestClose={() => {
          //   alert('Modal has been closed.');
          // }}
        >
         <View
            style={{
              
              backgroundColor: "backgroundColor: 'rgba(0,0,0,0.5)'",
              flex:1,
              
              Opacity: 0.4,

            }}
          >
          <View
            style={{
              margin: 50,
              marginTop: 100,
              marginBottom: 100,
              backgroundColor: "white",
              flex:1,
              borderRadius: 10,
              shadowOpacity: 0.4,

            }}
          >
            <View style={{ margin: 30,
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
               alignItems: 'center' }}>
              <Text>Add a Budget</Text>
              <View style={{ flexDirection: "row" }}>
                <Button
                  rounded
                  title="Cancelar"
                  onPress={() => {
                    this.setModalVisible(false);
                  }}
                />
                <Button
                  raised
                  backgroundColor="#0CBB9C"
                  rounded
                  small
                  title="Guardar"
                />
              </View>
            </View>
          </View>
          </View>
        </Modal>

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Agregar Ingreso"
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            >
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor="#1abc9c"
            title="Agregar gasto"
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            >
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor="#9b59b6"
            title="Agregar Presupuesto"
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

class AddBudget extends React.Component {
  render() {
    return <View />;
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  }
});
