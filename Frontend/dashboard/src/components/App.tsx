import React, { useState } from "react";
import MoneyManager, { MoneyArray } from "./MoneyManager";
import UserSettings from "./UserSettings";
import ScreenWrapper from "./ScreenWrapper";
import LeftHalfOfScreenWrapper from "./LeftHalfOfScreenWrapper";
import RightHalfOfScreenWrapper from "./RightHalfOfScreenWrapper";
import MoneyChart from "./MoneyChart";

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

if (window.money === "{{money}}") {
	window.money = JSON.stringify([
		{
			date: new Date("1, March 2021").toISOString(),
			value: 1,
		},
		{
			date: new Date("2, June 2021").toISOString(),
			value: 2,
		},
		{
			date: new Date("27, January 2022").toISOString(),
			value: 3,
		},
		{
			date: new Date("25, December 2023").toISOString(),
			value: 4,
		},
	]);
	window.quota = "123.456";
	window.currency = "€";
}

const defaultMoney = JSON.parse(
	window.htmlentities.decode(window.money).replaceAll("'", '"')
) as MoneyArray;

function App() {
	const [money, setMoney] = useState(defaultMoney);
	const [currency, setCurrency] = useState(window.currency);
	const [quota, setQuota] = useState(parseFloat(window.quota));
	return (
		<div>
			<h1>SaveBase</h1>
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
					<MoneyChart money={money} />
				</RightHalfOfScreenWrapper>
			</ScreenWrapper>
		</div>
	);
}

export default App;
