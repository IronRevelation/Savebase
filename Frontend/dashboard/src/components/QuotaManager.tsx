import React, { useState } from "react";
import { Check, Close } from "@material-ui/icons";
import { TextField, withStyles, Button } from "@material-ui/core";

const ThemedTextField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "#009FB7",
		},
		"& .MuiOutlinedInput-root": {
			"&:hover fieldset": {
				borderColor: "#009FB7",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#009FB7",
			},
		},
		marginTop: "0.5rem",
		color: "#272727",
	},
})(TextField);

const ThemedButton = withStyles({
	root: {
		backgroundColor: "#009fb7",
		color: "#272727",
		marginRight: "0.5rem",
	},
})(Button);

const ThemedRedButton = withStyles({
	root: {
		backgroundColor: "#e26d5a",
		color: "#272727",
	},
})(Button);

const QuotaManager: React.FC<{
	disabled?: boolean;
	quota: number;
	currency: string;
	onClick: (validQuota: number) => void;
}> = (props) => {
	const [newQuota, setNewQuota] = useState(NaN);

	const err = isNaN(newQuota) || newQuota <= 0 || newQuota > 10000000;

	return (
		<div style={{ padding: "1rem" }}>
			<h3>Your goal:</h3>
			<div>
				{props.quota === 0 ? "You didn't set the goal." : props.quota}
				{props.quota === 0 ? null : props.currency}
			</div>
			<ThemedTextField
				variant="outlined"
				type="number"
				label="New goal"
				placeholder="e.g. 3.14"
				inputProps={{
					min: "0",
					onKeyDown: (e) => {
						if (e.key === "Enter" && !err) {
							props.onClick(newQuota);
						}
					},
				}}
				InputLabelProps={{ shrink: true }}
				error={err}
				disabled={props.disabled}
				onChange={(e) => setNewQuota(parseFloat(e.target.value))}
			/>
			<div style={{ paddingTop: "1rem" }}>
				<ThemedButton
					size="large"
					variant="contained"
					disableElevation
					startIcon={<Check />}
					disabled={err || props.disabled}
					onClick={() => {
						props.onClick(newQuota);
					}}
				>
					Save
				</ThemedButton>
				<ThemedRedButton
					disableElevation
					size="large"
					startIcon={<Close />}
					onClick={() => props.onClick(0)}
				>
					Reset
				</ThemedRedButton>
			</div>
		</div>
	);
};

export default QuotaManager;
