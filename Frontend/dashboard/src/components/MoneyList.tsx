import React from "react";
import { MoneyArray } from "./MoneyManager";
import MoneyComponent from "./MoneyComponent";

const MoneyList: React.FC<{
	money: MoneyArray;
	disabledEdit?: boolean;
	editMoney: (index: number, newVal: number) => void;
	deleteMoney: (index: number) => void;
}> = (props) => {
	return (
		<div style={{ marginTop: "2rem", display: "inline-block" }}>
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
					/>
				);
			})}
		</div>
	);
};

export default MoneyList;
