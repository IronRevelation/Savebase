import React, { useState } from "react";
import QuotaManager from "./QuotaManager";
import CurrencyForm from "./CurrencyForm";
import { ErrSnackbar, SuccessSnackbar } from "./MySnackbars";

const updateCurrency: (
	prevCurr: string,
	newCurr: string
) => Promise<string> = async (prevCurr: string, newCurr: string) => {
	if (prevCurr === newCurr) throw new Error("SAMECURRENCY");
	const res = await fetch(`/api/update_currency/${newCurr}`, {
		method: "POST",
	});
	if (!res.ok) {
		throw new Error("RESPONSESTATUSNOTOK");
	}
	return res.json();
};

const atLeastTwoDigitsRequired = (val: number): string => {
	return val.toFixed(Math.max(2, (val.toString().split(".")[1] || []).length));
};

const updateQuota: (
	prevQuota: number,
	newQuota: number
) => Promise<number> = async (prevQuota: number, newQuota: number) => {
	if (prevQuota === newQuota) throw new Error("SAMEQUOTAASBEFORE");
	const res = await fetch(
		`/api/update_quota/${atLeastTwoDigitsRequired(newQuota)}`,
		{
			method: "POST",
		}
	);
	if (!res.ok) {
		throw new Error("RESPONSESTATUSNOTOK");
	}
	return res.json();
};

const UserSettings: React.FC<{
	currency: string;
	quota: number;
	updateCurrency: (newCur: string) => void;
	updateQuota: (newQuota: number) => void;
}> = (props) => {
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
			<QuotaManager
				currency={props.currency}
				onClick={(newQuota) =>
					updateQuota(props.quota, newQuota)
						.then((newQuota) => {
							props.updateQuota(newQuota);
							setOpenSuccessSnackbar({
								open: true,
								message: "YAY! Goal updated successfully!",
							});
						})
						.catch((e) => {
							let errMessage = "";
							if (e.message === "RESPONSESTATUSNOTOK") {
								errMessage = "You sent an invalid value!";
							} else if (e.message === "SAMEQUOTAASBEFORE") {
								errMessage = "You didn't change your goal!";
							} else {
								errMessage =
									"You have a network problem! Try refreshing the page!";
							}
							setOpenErrSnackbar({ open: true, message: errMessage });
						})
				}
				quota={props.quota}
			/>
			<CurrencyForm
				currency={props.currency}
				updateCurrency={(newCurr) =>
					updateCurrency(props.currency, newCurr)
						.then((newCurr) => {
							props.updateCurrency(newCurr);
							setOpenSuccessSnackbar({
								open: true,
								message: "YAY! Currency edited with success!",
							});
						})
						.catch((e) => {
							let errMessage = "";
							if (e.message === "RESPONSESTATUSNOTOK") {
								errMessage = "You sent an invalid value!";
							} else if (e.message === "SAMECURRENCY") {
								errMessage = "You have already set that currency!";
							} else {
								errMessage =
									"You have a network problem! Try refreshing the page!";
							}
							setOpenErrSnackbar({ open: true, message: errMessage });
						})
				}
			/>
		</div>
	);
};

export default UserSettings;
