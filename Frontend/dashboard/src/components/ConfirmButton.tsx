import React from "react";
import { Check } from "@material-ui/icons";
import { Button, withStyles } from "@material-ui/core";

const ThemedButton = withStyles({
	root: {
		backgroundColor: "#009fb7",
		color: "#272727",
		marginRight: "0.25rem",
	},
})(Button);

const ConfirmButton: React.FC<{ onClick: () => void; disabled?: boolean }> = (
	props
) => {
	return (
		<ThemedButton
			variant="contained"
			startIcon={<Check />}
			disableElevation
			size="small"
			onClick={props.onClick}
			disabled={props.disabled}
		>
			Confirm
		</ThemedButton>
	);
};

export default ConfirmButton;
