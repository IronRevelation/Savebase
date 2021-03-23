import React, { useState } from "react";
import AddButton from "./AddButton";
import { TextField, withStyles } from "@material-ui/core";

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
		color: "#272727",
	},
})(TextField);

const AddMoneyForm: React.FC<{
	disabled?: boolean;
	onClick: (validValToAdd: number) => void;
}> = (props) => {
	const [moneyToAdd, setMoneyToAdd] = useState(NaN);

	const err = isNaN(moneyToAdd) || moneyToAdd <= 0;

	return (
		<div>
			<ThemedTextField
				variant="outlined"
				type="number"
				label="Money to add"
				placeholder="e.g. 3.14"
				inputProps={{
					min: "0",
					onKeyDown: (e) => {
						if (e.key === "Enter" && !err) {
							props.onClick(moneyToAdd);
						}
					},
				}}
				InputLabelProps={{ shrink: true }}
				error={err}
				disabled={props.disabled}
				onChange={(e) => setMoneyToAdd(parseFloat(e.target.value))}
			/>
			<div style={{ paddingTop: "1rem" }}>
				<AddButton
					disabled={props.disabled || err}
					onClick={() => props.onClick(moneyToAdd)}
				/>
			</div>
		</div>
	);
};

export default AddMoneyForm;
