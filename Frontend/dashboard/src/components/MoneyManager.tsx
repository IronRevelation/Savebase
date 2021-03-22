import React, { useState } from "react";
// import MoneyComponent from "./MoneyComponent";
import AddMoneyForm from "./AddMoneyForm";
import { ErrSnackbar, SuccessSnackbar } from "./MySnackbars";

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

const MoneyManager: React.FC<{
	money: MoneyArray;
	updateMoney: (newMoney: MoneyArray) => void;
}> = (props) => {
	const [disabledForms, setDisabledForms] = useState(false);
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
					setDisabledForms(true);
					addMoney(validValToAdd)
						.then((newMoney) => {
							props.updateMoney(newMoney);
							setOpenSuccessSnackbar({
								open: true,
								message: "YAY! Nothing went wrong!",
							});
						})
						.catch((e) =>
							setOpenErrSnackbar({
								open: true,
								message:
									e.message === "RESPONSESTATUSNOTOK"
										? "You sent an invalid value"
										: "There's a network problem! Try refreshing the page.",
							})
						)
						.finally(() => setDisabledForms(false));
				}}
				disabled={disabledForms}
			/>
		</div>
	);
};

export default MoneyManager;
