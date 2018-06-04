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

export default class Goal extends Component {
	// firebase.initializeApp(config);

	componentDidMount() {
		firebase
			.database()
			.ref("users/001/budget01")
			.set({
				asignado: 700,
				disponible: 50
			})
			.then(() => {
				console.log("INSERTED!");
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<View
				style={{
					marginTop: 22,
					borderBottomWidth: 1,
					borderColor: "black",
					marginBottom: 2
				}}
			>
				<FlatList
					data={BudgetsData}
					renderItem={({ item, index }) => {
						return <GoalItem item={item} index={index} />;
					}}
				/>
			</View>
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

		var refRe = firebase.database().ref("users/001/budget01/disponible/");

		refRe.on("value", snapshot => {
			this.setState({
				disponible: snapshot.val()
			});
		});
	}

	constructor() {
		super();

		this.state = {
			asignado: 0,
			disponible: 0
		};
	}

	render() {
		return (
			<View style={styles.FlatList}>
				<Card title={this.props.item.name}>
					<View style={styles.SingleBudget}>
						<View style={styles.ListItem}>
							<Text style={styles.GoalItem}>Asignado:</Text>
							<TextInput
								keyboardType={"numeric"}
								value={this.state.asignado.toString()}
								onChangeText={text =>
									this.setState({
										text
									})
								}
							/>
						</View>

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
