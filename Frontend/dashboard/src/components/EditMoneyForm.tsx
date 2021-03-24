import React, { useState } from "react";
import { TextField, withStyles } from "@material-ui/core";
import ConfirmButton from "./ConfirmButton";
import CancelButton from "./CancelButton";

const ThemedTextField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "#009FB7",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "#009FB7",
		},
		"& .Mui-error:after": {
			borderBottom: "2px solid red",
		},
		color: "#272727",
		backgroundColor: "#ddd",
		borderTopLeftRadius: ".25rem",
		borderTopRightRadius: ".25rem",
	},
})(TextField);

const EditMoneyForm: React.FC<{
	disabled?: boolean;
	onClick: (newVal: number | "aborted") => void;
}> = (props) => {
	const [newMoneyValue, setNewMoneyValue] = useState(NaN);

	const err = isNaN(newMoneyValue) || newMoneyValue <= 0;

	return (
		<div>
			<ThemedTextField
				variant="standard"
				type="number"
				label="New quantity"
				placeholder="e.g. 3.14"
				inputProps={{
					min: "0",
					onKeyDown: (e) => {
						if (e.key === "Enter" && !err) {
							props.onClick(newMoneyValue);
						}
					},
				}}
				InputLabelProps={{ shrink: true }}
				error={err}
				disabled={props.disabled}
				onChange={(e) => setNewMoneyValue(parseFloat(e.target.value))}
			/>
			<div style={{ paddingTop: ".5rem" }}>
				<ConfirmButton
					disabled={props.disabled || err}
					onClick={() => props.onClick(newMoneyValue)}
				/>
				<CancelButton
					disabled={props.disabled}
					onClick={() => props.onClick("aborted")}
				/>
			</div>
		</div>
	);
};

export default EditMoneyForm;
