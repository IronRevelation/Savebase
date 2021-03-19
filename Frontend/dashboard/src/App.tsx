import React from "react";

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

function App() {
	return (
		<div>
			<h1>IL TUO ID E':{window.id || "Nessun ID"}</h1>
			<h1>MONEY:{window.htmlentities.decode(window.money) || "Nessun ID"}</h1>
		</div>
	);
}

export default App;
