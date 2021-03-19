import React from "react";
import MoneyComponent from "./MoneyComponent";

const MoneyLister: React.FC<{ money: string }> = (props) => {
	const moneyArray = JSON.parse(props.money) as {
		date: string;
		value: number;
	}[];
	return (
		<div>
			{moneyArray.map((v, i) => (
				<MoneyComponent date={v.date} value={v.value} key={i} />
			))}
		</div>
	);
};

export default MoneyLister;
