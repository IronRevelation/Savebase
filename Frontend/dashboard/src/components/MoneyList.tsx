import React from "react";
import { MoneyArray } from "./MoneyManager";
import MoneyComponent from "./MoneyComponent";

const MoneyList: React.FC<{
	money: MoneyArray;
	editMoney: (index: number, newVal: number) => void;
	disabledEdit?: boolean;
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
						onEdit={props.editMoney}
						disabledEdit={props.disabledEdit}
					/>
				);
			})}
		</div>
	);
};

export default MoneyList;
