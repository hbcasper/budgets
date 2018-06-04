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
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import FloatingButton from "./floatingbutton";

export default class Main extends Component {
  render() {
    return (
       

        
        



     <View style={{flex:1, backgroundColor: '#f3f3f3'}}>

     <Header
            outerContainerStyles={{ backgroundColor: "#0CBB9C" }}
            centerComponent={{ text: "SimpleBudget", style: { color: "#fff" } }}
          />

          <Remain/>
          <Goal/>
              <FloatingButton/>
      
     
          </View>

     
    );
  }
}

const styles = StyleSheet.create({
  Button: {
    color: "black",
    fontSize: 16
  },

  background: {
    backgroundColor: "#F4F4F4"
  }
});
