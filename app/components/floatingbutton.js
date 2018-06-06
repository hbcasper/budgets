import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "react-navigation";
import AddBudget from "./AddBudget";


export default class FloatingButton extends React.Component {
  render() {
    return (
     
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Agregar Ingreso"
          onPress={() => this.props.navigation.navigate("Details")}
        >
          <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>

        <ActionButton.Item
          buttonColor="#1abc9c"
          title="Agregar gasto"
          onPress={() => {}}
        >
          <Icon name="md-done-all" style={styles.actionButtonIcon} />
        </ActionButton.Item>

        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Agregar Presupuesto"
          onPress={() => console.log("notes tapped!")}
        >
          <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>

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
