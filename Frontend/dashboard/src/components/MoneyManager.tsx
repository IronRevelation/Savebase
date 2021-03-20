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
						`/api/add_money/${(() => {
							const numInput = parseFloat(
								prompt("Insert the new quantity:") ?? ""
							);
							return numInput.toFixed(
								Math.max(2, (numInput.toString().split(".")[1] || []).length)
							);
						})()}`,
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
