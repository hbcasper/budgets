import React from 'react';
import Main from './app/components/Main';
import firebase from 'firebase':

class App extends React.Component {
  

componentWillMount(){

	var config = {
    apiKey: "AIzaSyAI5dcM5PkDmCLlthwtDWVKAfW2eWr_wx8",
    authDomain: "budgets-d6ff5.firebaseapp.com",
    databaseURL: "https://budgets-d6ff5.firebaseio.com",
    projectId: "budgets-d6ff5",
    storageBucket: "budgets-d6ff5.appspot.com",
    messagingSenderId: "901207872688"
  };

  firebase.initializeApp(config);



}





  render() {
    return (
    	 
     <Main />
     );
  }
}
