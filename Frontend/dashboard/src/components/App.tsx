import React from "react";
import MoneyManager from "./MoneyManager";

declare global {
	interface Window {
		id: string;
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

if (window.id === "{{id}}" && window.money === "{{money}}") {
	window.id = "12345678";
	window.money = JSON.stringify([
		{
			date: new Date().toISOString(),
			value: 3.14,
		},
	]);
}

function App() {
	return (
		<div>
			<h1>IL TUO ID E':{window.id || "Nessun ID"}</h1>
			<h1>MONEY</h1>
			<MoneyManager
				money={window.htmlentities.decode(window.money).replaceAll("'", '"')}
			/>
		</div>
	);
}

export default App;
