import React, { useState } from "react";
import MoneyManager, { MoneyArray } from "./MoneyManager";
import UserSettings from "./UserSettings";
import ScreenWrapper from "./ScreenWrapper";
import LeftHalfOfScreenWrapper from "./LeftHalfOfScreenWrapper";
import RightHalfOfScreenWrapper from "./RightHalfOfScreenWrapper";
import MoneyChart from "./MoneyChart";
import TotalMoney from "./TotalMoney";
import { onlySameDays } from "../utils";
import EstimatedGoalReachingDate from "./EstimatedGoalReachingDate";
import RightHalfHeadWrapper from "./RightHalfHeadWrapper";

declare global {
	interface Window {
		money: string;
		quota: string;
		currency: string;
		htmlentities: {
			encode: (a: string) => string;
			decode: (a: string) => string;
		};
	}
}

window.htmlentities = {
	/**
	 * Converts a string to its html characters completely.
	 *
	 * @param {String} str String with unescaped HTML characters
	 **/
	encode: function (str) {
		var buf = [];

		for (var i = str.length - 1; i >= 0; i--) {
			buf.unshift(["&#", str.charCodeAt(i), ";"].join(""));
		}

		return buf.join("");
	},

	/**
	 * Converts an html characterSet into its original character.
	 *
	 * @param {String} str htmlSet entities
	 **/
	decode: function (str) {
		return str.replace(/&#(\d+);/g, function (match, dec) {
			return String.fromCharCode(dec);
		});
	},
};

function accumulationOfMoney(
	money: MoneyArray
): { value: number; date: number }[] {
	let sum = 0;
	const newMoney: { value: number; date: number }[] = [];
	for (let i = 0; i < money.length; i++) {
		sum += money[i].value;
		newMoney[i] = { date: NaN, value: NaN };
		newMoney[i].value = sum;
		newMoney[i].date = new Date(money[i].date).getTime();
	}
	return newMoney;
}

const defaultMoney = JSON.parse(
	window.htmlentities.decode(window.money).replaceAll("'", '"')
) as MoneyArray;

function App() {
	const [money, setMoney] = useState(defaultMoney);
	const [currency, setCurrency] = useState(window.currency);
	const [quota, setQuota] = useState(parseFloat(window.quota));
	const accumulatedDifferentData = accumulationOfMoney(money);
	const notAccumulatedSameDays = onlySameDays(money);
	const formattedMoney = accumulationOfMoney(notAccumulatedSameDays);
	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					flexWrap: "wrap",
				}}
			>
				<div style={{ flex: 1 }}>
					<h1>SaveBase</h1>
				</div>
				<div
					style={{
						flex: 1,
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					<a
						href="/logout"
						style={{
							display: "inline-block",
							fontWeight: "bold",
							padding: "1rem",
							borderRadius: "0.5rem",
							backgroundColor: "#009FB7",
							textDecoration: "none",
							color: "#EFF1F3",
						}}
					>
						LOG OUT
					</a>
				</div>
			</div>
			<ScreenWrapper>
				<LeftHalfOfScreenWrapper>
					<UserSettings
						currency={currency}
						quota={quota}
						updateQuota={(newQuota) => setQuota(newQuota)}
						updateCurrency={(newCurrency) => setCurrency(newCurrency)}
					/>
					<MoneyManager
						currency={currency}
						money={money}
						updateMoney={(newMon) => setMoney(newMon)}
					/>
				</LeftHalfOfScreenWrapper>
				<RightHalfOfScreenWrapper>
					<RightHalfHeadWrapper>
						<TotalMoney moneyArr={formattedMoney} currency={currency} />
						<EstimatedGoalReachingDate
							notAccumulatedMoney={notAccumulatedSameDays}
							quota={quota}
						/>
					</RightHalfHeadWrapper>
					{accumulatedDifferentData.length < 2 ? null : (
						<MoneyChart money={accumulatedDifferentData} />
					)}
				</RightHalfOfScreenWrapper>
			</ScreenWrapper>
		</div>
	);
}

export default App;
