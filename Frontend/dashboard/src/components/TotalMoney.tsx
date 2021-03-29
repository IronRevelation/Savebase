import React from "react";

const TotalMoney: React.FC<{
	currency: string;
	moneyArr: { value: number; date: number }[];
}> = (props) => {
	return (
		<div style={{ padding: "1rem" }}>
			<h3>Total Money:</h3>
			<span style={{ fontSize: "2rem" }}>
				{props.moneyArr.length === 0
					? "You currently have no money!"
					: props.moneyArr[props.moneyArr.length - 1].value + props.currency}
			</span>
		</div>
	);
};

export default TotalMoney;
