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

export default class Goal extends Component {
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
	render() {
		return (
			<View style={styles.FlatList}>
				<Card title={this.props.item.name}>
					<View style={styles.SingleBudget}>
					

						<View style={styles.ListItem}>
							<Text style={styles.GoalItem}>Asignado: </Text>
							<TextInput
								keyboardType={"numeric"}
								defaultValue={this.props.item.remain}
								onChangeText={text => this.setState({ text })}
							/>
						</View>
						

						<View style={styles.ListItem}>
						<Text style={styles.GoalItem}>Disponible:</Text>
							<Text style={styles.GoalItem}>
								{this.props.item.remain}
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
		fontSize: 16,
		
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
