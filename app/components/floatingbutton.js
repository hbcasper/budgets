import React, { Component } from "react";
import { Modal, View, StyleSheet, TextInput } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Button,
  Text,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Input,
  Card
} from "react-native-elements";
import firebase from "firebase";

export default class FloatingButton extends React.Component {
  

  constructor(props) {
        super(props)

         this.handler = this.handler.bind(this);

          this.state = {
            modalVisible: false
        };
    }

    handler() {
        this.setState({
            modalVisible: false
        });
    }

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
              flex: 1,

              Opacity: 0.4
            }}
          >
            <View
              style={{
                margin: 30,
                marginTop: 170,
                padding: 20,
                marginBottom: 200,
                backgroundColor: "white",
                flex: 1,
                borderRadius: 10,
                shadowOpacity: 0.4
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 16
                  }}
                >
                  Add a Budget
                </Text>

               <AddBudgetForm action={this.handler} />
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

export function createBudget(disponible, asignado, nombre) {
  var budgetRef = firebase.database().ref("users/001/budgets/");
  var newBudgetRef = budgetRef.push();
  newBudgetRef.set({
    nombre,
    disponible,
    asignado
  });
}

class AddBudgetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgetName: "",
      budgetQuantity: ""
    };
  }
  render() {
    return (
      <View
        style={{
          marginTop: 30,
          width: 300,

          marginBottom: 30
        }}
      >
        <FormLabel>Name</FormLabel>
        <FormInput
          ref={input => (this.input = input)}
          onChangeText={budgetName => this.setState({ budgetName })}
        />
        <FormLabel>Budget</FormLabel>
        <FormInput
          ref={input => (this.input = input)}
          onChangeText={budgetQuantity => this.setState({ budgetQuantity })}
        />

        <View style={{ flexDirection: "row" }}>
          <Button
            rounded
            small
            title="Cancelar"
            onPress={this.props.action}
          />
          <Button
            raised
            backgroundColor="#0CBB9C"
            rounded
            small
            title="Guardar"
            onPress={() => {

              createBudget(
                this.state.budgetQuantity,
                this.state.budgetQuantity,
                this.state.budgetName
              );
             
            this.props.action();
            
          }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  }
});
