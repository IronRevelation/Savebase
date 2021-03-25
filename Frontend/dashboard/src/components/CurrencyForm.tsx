import React, { useState } from "react";
import {
	TextField,
	Select,
	Button,
	MenuItem,
	withStyles,
} from "@material-ui/core";
import { Check } from "@material-ui/icons";

const ThemedTextField = withStyles({
	root: {
		"& .MuiInput-underline:after": {
			borderBottomColor: "#009FB7",
		},
		color: "#272727",
		backgroundColor: "#ddd",
		padding: "0 .5rem",
		paddingTop: ".5rem",
		borderTopLeftRadius: ".25rem",
		borderTopRightRadius: ".25rem",
	},
})(TextField);

const CurrencyForm: React.FC<{
	currency: string;
	updateCurrency: (newCur: string) => void;
}> = (props) => {
	const currencies = ["$", "€", "¥", "£", "₹", "₽", "BTC"];
	const [selectedValue, setSelectedValue] = useState(
		currencies.includes(props.currency) ? props.currency : "custom"
	);
	const [customCurrency, setCustomCurrency] = useState("");

	return (
		<div>
			<h3>Currency:</h3>
			{selectedValue === "custom" ? (
				<ThemedTextField
					defaultValue={props.currency}
					onChange={(e) => setCustomCurrency(e.target.value as string)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							props.updateCurrency(customCurrency);
						}
					}}
				/>
			) : null}
			<div style={{ marginTop: "0.25rem" }}>
				<Select
					style={{
						marginRight: "0.5rem",
					}}
					onChange={(e) => setSelectedValue(e.target.value as string)}
					defaultValue={selectedValue}
					variant="outlined"
				>
					{currencies.map((val, i) => (
						<MenuItem value={val} key={i}>
							{val}
						</MenuItem>
					))}
					<MenuItem value="custom">Custom...</MenuItem>
				</Select>
				<Button
					style={{
						backgroundColor: "#009FB7",
					}}
					size="large"
					variant="contained"
					disableElevation
					startIcon={<Check />}
					onClick={() => {
						props.updateCurrency(
							selectedValue === "custom" ? customCurrency : selectedValue
						);
					}}
				>
					Save
				</Button>
			</div>
		</div>
	);
};

export default CurrencyForm;
