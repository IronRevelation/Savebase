import React from "react";
import MoneyComponent from "./MoneyComponent";
import AddButton from "./AddButton";

const MoneyManager: React.FC<{ money: string }> = (props) => {
	const moneyArray = JSON.parse(props.money) as {
		date: string;
		value: number;
	}[];
	return (
		<div>
			<AddButton
				addFn={() => {
					fetch(
						`/add_money/${String(
							Number(prompt("Insert the quantity to add:"))
						)}`,
						{ method: "POST" }
					).then(() => {
						window.location.href = "/dashboard";
					});
				}}
			/>
			{moneyArray.map((v, i) => (
				<MoneyComponent
					updateSingleElem={(index, newVal) => {
						fetch(`/api/modify_money/${index}/${newVal}`, {
							method: "POST",
						}).then(() => (window.location.href = "/dashboard"));
					}}
					deleteElem={(index) => {
						fetch(`/api/remove_money/${index}`, {
							method: "POST",
						}).then(() => (window.location.href = "/dashboard"));
					}}
					index={i}
					date={v.date}
					value={v.value}
					key={i}
				/>
			))}
		</div>
	);
};

export default MoneyManager;
