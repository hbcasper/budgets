import React, { Component } from 'react';
import {TouchableOpacity, View, StyleSheet,Text,Alert} from 'react-native';

import { Icon } from 'react-native-elements'


export default class FloatingButton extends Component {
  render() {
    return (
     <View  style={styles.float}> 
     


    <TouchableOpacity 
    style={styles.actionButton}
    onPress={() => {
    Alert.alert('Hey');
  }}
    




 >
 <Icon
 raised
   reverse
  
  name='plus'
  type='font-awesome'
  color='blue' 

  />

</TouchableOpacity>

     </View>

    );
  }
}

const styles = StyleSheet.create({
  actionButton: {
    width: 60,  
height: 60,   
borderRadius: 30,     
position : 'absolute',  
                                                

                                     


  },
  float: {

    flex:1,
       
     alignItems: 'flex-end', 
     marginRight:20,  



                                     


  },
});

