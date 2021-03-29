import React from "react";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const MoneyChart: React.FC<{ money: { value: number; date: number }[] }> = (
	props
) => {
	return (
		<div style={{ maxWidth: "40rem" }}>
			<VictoryChart theme={VictoryTheme.material}>
				<VictoryAxis
					tickFormat={(x: string) => {
						const date = new Date(x);
						return `${date.getDate()}-${
							date.getMonth() + 1
						}-${date.getFullYear().toString().slice(-2)}`;
					}}
				/>
				<VictoryAxis dependentAxis tickFormat={(a) => a} />
				<VictoryLine data={props.money} x="date" y="value" />
			</VictoryChart>
		</div>
	);
};

export default MoneyChart;
