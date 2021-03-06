import React, { Component } from "react";
import { AppRegistry, Text, View, FlatList, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import firebase from "firebase";

export default class Remain extends Component {

  render() {
    return (
      <View>
        <Card>
          <Text style={styles.Titles}>
            Por presupuestar
            <Text style={styles.Num}>{this.props.globalBudget}</Text>{" "}
          </Text>
        </Card>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  GoalItem: {
    padding: 10,
    fontSize: 16
  },
  Num: {
    fontSize: 18,
    left: 20,
    color: "#EF476F"
  },

  Titles: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 20,
    color: "#0CBB9C"
  }
});
