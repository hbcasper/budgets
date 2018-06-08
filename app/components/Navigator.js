import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  StatusBar,
  View,
} from "react-native";
import Transactions from "./transactions";
import Ingresos from "./incomes";
import Budgets from "./Budgets";
import { Header } from "react-native-elements";
import FloatingButton from "./floatingbutton";
import { TabNavigator, TabBarBottom, createStackNavigator, } from "react-navigation";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


 //<Header
    //      outerContainerStyles={{ backgroundColor: "#0CBB9C" }}
    //      centerComponent={{ text: "SimpleBudget", style: { color: "#fff" } }}
      //  />


export default TabNavigator(

  {
    Home: Budgets,
    Transacciones: Transactions,
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

