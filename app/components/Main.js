import React, { Component } from 'react';
import {AppRegistry, Text, StatusBar, ScrollView, FlatList, StyleSheet, Button} from 'react-native';
import Goal from './Goal';
//import FloatingButton from './floatingbutton';
import Remain from './Remain';
import BudgetsData from '../data/budgetdata';
import { Header } from 'react-native-elements'




export default class Main extends Component {
  render() {
    return (
      

      

     <ScrollView style={styles.background}>
  

     <Header
     outerContainerStyles={{ backgroundColor: '#0CBB9C' }}
  
     centerComponent={{ text: 'SimpleBudget', style: { color: '#fff' } }}
/>


   



   



      <Remain/>
     <Goal/>
   
     <Goal/>
     

     

     </ScrollView>
             );
  }
}

const styles = StyleSheet.create({
  Button: {
    color: 'black',
    fontSize: 16,  

  },

  background:{

  backgroundColor:'#F4F4F4',
  }
});




