import React from 'react';
import Main from './app/components/Main';
  firebase.initializeApp(config);
//import firebase from 'firebase':

export default class App extends React.Component {



  render() {
    return (
    	 
     <Main />
     );
  }
}
