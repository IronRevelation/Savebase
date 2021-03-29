import React from "react";
import { dateSinceNowOfETA } from "../utils";
import ago from "s-ago";
const EstimatedGoalReachingDate: React.FC<{
	notAccumulatedMoney: { date: string; value: number }[];
	quota: number;
}> = (props) => {
	let message = "";
	if (props.quota !== 0) {
		try {
			message = ago(dateSinceNowOfETA(props.notAccumulatedMoney, props.quota));
		} catch (e) {
			if (e.message === "GOALALREADYREACHED") {
				message = "Hooray! You have already reached your goal!";
			} else if (e.message === "NOTENOUGHITEMS") {
				message = "Not enough data. Please add some money.";
			}
		}
	} else {
		message = "You didn't set the goal!";
	}
	return (
		<div style={{ padding: "1rem" }}>
			<h3>You'll reach your goal:</h3>
			<span style={{ fontSize: "2rem" }}>{message}</span>
		</div>
	);
};

export default EstimatedGoalReachingDate;
