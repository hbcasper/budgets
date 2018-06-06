import React, { Component } from "react";
import {
	AppRegistry,
	Text,
	View,
	FlatList,
	StyleSheet,
	TextInput
} from "react-native";
import { Card } from "react-native-elements";




export default class GoalItem extends Component {
	
	changeValue(cantidad){

			firebase.database().ref("users/001/budget01").update({
				asignado: cantidad
			}).then(() => {
				console.log("update!");
			})
			.catch(error => {
				console.log(error);
			});
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
							<Text style={styles.GoalItem}>Asignado:</Text>
							<TextInput
								keyboardType={"numeric"}
								defaultValue={this.state.asignado.toString()}
								onChangeText={this.changeValue.bind(this)}

								
								
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
