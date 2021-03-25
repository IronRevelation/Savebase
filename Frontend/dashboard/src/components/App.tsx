import React, { useState } from "react";
import MoneyManager, { MoneyArray } from "./MoneyManager";
import UserSettings from "./UserSettings";

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
			date: new Date().toISOString(),
			value: 1.14,
		},
		{
			date: new Date().toISOString(),
			value: 2.14,
		},
		{
			date: new Date().toISOString(),
			value: 3.14,
		},
		{
			date: new Date().toISOString(),
			value: 4.14,
		},
	]);
	window.quota = "123.456";
	window.currency = "$";
}

const defaultMoney = JSON.parse(
	window.htmlentities.decode(window.money).replaceAll("'", '"')
) as MoneyArray;

function App() {
	const [money, setMoney] = useState(defaultMoney);
	const [currency, setCurrency] = useState(window.currency);
	return (
		<div>
			<h1>SaveBase</h1>
			<UserSettings
				currency={currency}
				quota={parseFloat(window.quota)}
				updateCurrency={(newCurrency) => setCurrency(newCurrency)}
			/>
			<MoneyManager
				currency={currency}
				money={money}
				updateMoney={(newMon) => setMoney(newMon)}
			/>
		</div>
	);
}

export default App;
