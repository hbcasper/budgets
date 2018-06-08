import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  StatusBar,
  View,
  FlatList,
  StyleSheet,
  Button
} from "react-native";
import Goal from "./Goal";
import Remain from "./Remain";
import ActionButton from "react-native-action-button";
import FloatingButton from "./floatingbutton";
import { TabNavigator, TabBarBottom, createStackNavigator, } from "react-navigation";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from "firebase";

export default class Budgets extends React.Component {

  constructor() {
       

      super()



         this.state = {
          globalBudget: 0
        };

    }

   
componentDidMount() {

    firebase
      .database()
      .ref("users/001/global/globalavaliable")
      .on("value", snapshot => {
        this.setState({
          globalBudget: snapshot.val()
        });
      });  
  }

  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
        <Remain globalBudget = {this.state.globalBudget}/>
        <Goal/>
        <FloatingButton/>
      </View>
    );
  }
}
