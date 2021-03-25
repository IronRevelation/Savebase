import React from "react";
import { MoneyArray } from "./MoneyManager";
import MoneyComponent from "./MoneyComponent";

const MoneyList: React.FC<{
	money: MoneyArray;
	disabledEdit?: boolean;
	currency: string;
	editMoney: (index: number, newVal: number) => void;
	deleteMoney: (index: number) => void;
}> = (props) => {
	return (
		<div style={{ marginTop: "1.5rem", display: "inline-block" }}>
			{props.money.map((moneyObj, index) => {
				const currMoneyObjDate = new Date(moneyObj.date);
				return (
					<MoneyComponent
						dateObj={currMoneyObjDate}
						moneyVal={moneyObj.value}
						index={index}
						key={index}
						disabledEdit={props.disabledEdit}
						onEdit={props.editMoney}
						onDelete={props.deleteMoney}
						currency={props.currency}
					/>
				);
			})}
		</div>
	);
};

export default MoneyList;
