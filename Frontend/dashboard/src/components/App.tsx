import React, { useState } from "react";
import MoneyManager, { MoneyArray } from "./MoneyManager";

declare global {
	interface Window {
		money: string;
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
}

const defaultMoney = JSON.parse(
	window.htmlentities.decode(window.money).replaceAll("'", '"')
) as MoneyArray;

function App() {
	const [money, setMoney] = useState(defaultMoney);
	return (
		<div>
			<h1>SaveBase</h1>
			<MoneyManager money={money} updateMoney={(newMon) => setMoney(newMon)} />
		</div>
	);
}

export default App;
