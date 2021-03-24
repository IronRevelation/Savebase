import React, { useState } from "react";
// import MoneyComponent from "./MoneyComponent";
import AddMoneyForm from "./AddMoneyForm";
import { ErrSnackbar, SuccessSnackbar } from "./MySnackbars";
import MoneyList from "./MoneyList";

export type MoneyArray = { date: string; value: number }[];

const atLeastTwoDigitsRequired = (val: number): string => {
	return val.toFixed(Math.max(2, (val.toString().split(".")[1] || []).length));
};

const addMoney = async (val: number): Promise<MoneyArray> => {
	const res = await fetch(`/api/add_money/${atLeastTwoDigitsRequired(val)}`, {
		method: "POST",
	});
	if (!res.ok) {
		throw new Error("RESPONSESTATUSNOTOK");
	} else {
		return res.json() as Promise<MoneyArray>;
	}
};

const editMoney = async (
	index: number,
	newVal: number
): Promise<MoneyArray> => {
	const res = await fetch(
		`/api/modify_money/${index}/${atLeastTwoDigitsRequired(newVal)}`,
		{
			method: "POST",
		}
	);
	if (!res.ok) {
		throw new Error("RESPONSESTATUSNOTOK");
	} else {
		return res.json() as Promise<MoneyArray>;
	}
};

const deleteMoney = async (index: number) => {
	const res = await fetch(`/api/remove_money/${index}`, { method: "POST" });
	if (!res.ok) {
		throw new Error("RESPONSESTATUSNOTOK");
	} else {
		return res.json() as Promise<MoneyArray>;
	}
};

const MoneyManager: React.FC<{
	money: MoneyArray;
	updateMoney: (newMoney: MoneyArray) => void;
}> = (props) => {
	const [disabledAddForms, setDisabledAddForms] = useState(false);
	const [disabledEditForms, setDisabledEditForms] = useState(false);
	const [openErrSnackbar, setOpenErrSnackbar] = useState({
		open: false,
		message: "",
	});
	const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState({
		open: false,
		message: "",
	});
	return (
		<div>
			<ErrSnackbar
				openCfg={openErrSnackbar}
				onClose={() => setOpenErrSnackbar({ open: false, message: "" })}
			/>
			<SuccessSnackbar
				openCfg={openSuccessSnackbar}
				onClose={() => setOpenSuccessSnackbar({ open: false, message: "" })}
			/>
			<AddMoneyForm
				onClick={(validValToAdd) => {
					setDisabledAddForms(true);
					addMoney(validValToAdd)
						.then((newMoney) => {
							props.updateMoney(newMoney);
							setOpenSuccessSnackbar({
								open: true,
								message: "YAY! Value added succesfully!",
							});
						})
						.catch((e) =>
							setOpenErrSnackbar({
								open: true,
								message:
									e.message === "RESPONSESTATUSNOTOK"
										? "You sent an invalid value!"
										: "There's a network problem! Try refreshing the page.",
							})
						)
						.finally(() => setDisabledAddForms(false));
				}}
				disabled={disabledAddForms}
			/>
			<MoneyList
				money={props.money}
				disabledEdit={disabledEditForms}
				editMoney={(index, newVal) => {
					setDisabledEditForms(true);
					editMoney(index, newVal)
						.then((newMoney) => {
							props.updateMoney(newMoney);
							setOpenSuccessSnackbar({
								open: true,
								message: "YAY! Value modified succesfully!",
							});
						})
						.catch((e) =>
							setOpenErrSnackbar({
								open: true,
								message:
									e.message === "RESPONSESTATUSNOTOK"
										? "You sent an invalid value!"
										: "There's a network problem! Try refreshing the page.",
							})
						)
						.finally(() => setDisabledEditForms(false));
				}}
				deleteMoney={(i) =>
					deleteMoney(i)
						.then((newMoney) => {
							props.updateMoney(newMoney);
							setOpenSuccessSnackbar({
								open: true,
								message: "YAY! Value deleted succesfully!",
							});
						})
						.catch((e) =>
							setOpenErrSnackbar({
								open: true,
								message:
									e.message === "RESPONSESTATUSNOTOK"
										? "You tried to delete a problematic value!"
										: "There's a network problem! Try refreshing the page.",
							})
						)
				}
			/>
		</div>
	);
};

export default MoneyManager;
