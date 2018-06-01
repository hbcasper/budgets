import React from 'react';
import {FlatList, ActivityIndicator, Text, View } from 'react-native';

export default class Budget extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){


    return fetch('https://www.buxfer.com/api/budgets?token=f1k3fgj6k65r181kia01v1oj17')


    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });



    render()\{


      if(this.state.isLoading){

        return(
          <View>
          <ActivityIndicator/>
          </View>
          )
      }

      return(
        <View>

        <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => <View><Text>{item.name}</Text><Text>HEY</Text></View>}
        keyExtractor={(item, index) => index.toString()}
        />
        </View>
        );
    }
  }
