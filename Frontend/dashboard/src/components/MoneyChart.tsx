import React from "react";
import { MoneyArray } from "./MoneyManager";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

function accumulationOfMoney(
	money: MoneyArray
): { value: number; date: number }[] {
	let sum = 0;
	const newMoney: { value: number; date: number }[] = [];
	for (let i = 0; i < money.length; i++) {
		sum += money[i].value;
		newMoney[i] = { date: NaN, value: NaN };
		newMoney[i].value = sum;
		newMoney[i].date = new Date(money[i].date).getTime();
	}
	return newMoney;
}

const MoneyChart: React.FC<{ money: MoneyArray }> = (props) => {
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
				<VictoryLine
					data={accumulationOfMoney(props.money).map((cur) => ({
						date: new Date(cur.date).getTime(),
						value: cur.value,
					}))}
					x="date"
					y="value"
				/>
			</VictoryChart>
		</div>
	);
};

export default MoneyChart;
