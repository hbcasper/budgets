import React, { Component } from "react";
import {
	AppRegistry,
	Text,
	View,
	FlatList,
	StyleSheet,
	TextInput
} from "react-native";
import BudgetsData from "../data/budgetdata";
import { Card } from "react-native-elements";
import firebase from "firebase";

export default class Incomes extends Component {
	// firebase.initializeApp(config);


	render() {
		return (
			
				<FlatList
					data={BudgetsData}
					renderItem={({ item, index }) => {
						return <GoalItem item={item} index={index} />;
					}}
				/>
			
		);
	}
}

class GoalItem extends Component {
	componentDidMount() {
		var refAv = firebase.database().ref("users/001/budget01/asignado/");

		refAv.on("value", snapshot => {
			this.setState({
				asignado: snapshot.val()
			});
		});

	

		var monthIncomes = firebase.database().ref('users/001/incomes').orderByChild('/cantidad');
	
	}

	constructor() {
		super();

		this.state = {
			nombre: '',
			asignado: 0,
			disponible: 0
		};
	}

	render() {
		return (
			<View style={styles.FlatList}>
				<Card title={this.state.nombre}>
					<View style={styles.SingleBudget}>

						<View style={styles.ListItem}>
							<Text style={styles.GoalItem}>Disponible:</Text>
							<Text style={styles.GoalItem}>
								{this.state.disponible}
							</Text>
						</View>
					</View>
				</Card>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	GoalItem: {
		color: "grey",
		padding: 10,
		fontSize: 16
	},

	FlatList: {},

	SingleBudget: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-between"
	},
	ListItem: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	Titles: {
		fontSize: 20,
		fontWeight: "bold",

		padding: 50
	}
});
