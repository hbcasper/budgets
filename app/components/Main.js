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
import FloatingButton from "./floatingbutton";
import { TabNavigator, TabBarBottom } from "react-navigation";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Main extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
        <Header
          outerContainerStyles={{ backgroundColor: "#0CBB9C" }}
          centerComponent={{ text: "SimpleBudget", style: { color: "#fff" } }}
        />

        <Remain />
        <Goal />
        <FloatingButton />
      </View>
    );
  }
}

class Transacciones extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
        <Header
          outerContainerStyles={{ backgroundColor: "#0CBB9C" }}
          centerComponent={{ text: "SimpleBudget", style: { color: "#fff" } }}
        />

        <Remain />
        <FloatingButton />
      </View>
    );
  }
}

class Ingresos extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
        <Header
          outerContainerStyles={{ backgroundColor: "#0CBB9C" }}
          centerComponent={{ text: "SimpleBudget", style: { color: "#fff" } }}
        />

        <Remain />
        <FloatingButton />
      </View>
    );
  }
}

export default TabNavigator(
  {
    Home: Main,
    Transacciones: Transacciones,
    Ingresos: Ingresos
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Transacciones') {
          iconName = `credit-card`;
        }
        else if (routeName === 'Ingresos') {
          iconName = `signal`;
        }
        return <FontAwesome name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#0CBB9C',
      inactiveTintColor: 'gray',
      showLabel:false,
    },

    animationEnabled: true,
    swipeEnabled: false,

  }
);

const styles = StyleSheet.create({
  Button: {
    color: "black",
    fontSize: 16
  },

  background: {
    backgroundColor: "#F4F4F4"
  }
});
