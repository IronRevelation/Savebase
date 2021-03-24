import React from "react";
import { Close } from "@material-ui/icons";
import { Button, withStyles } from "@material-ui/core";

const ThemedButton = withStyles({
	root: {
		backgroundColor: "#e26d5a",
		color: "#272727",
		marginLeft: ".25rem",
	},
})(Button);

const CancelButton: React.FC<{ onClick: () => void; disabled?: boolean }> = (
	props
) => {
	return (
		<ThemedButton
			disableElevation
			variant="contained"
			onClick={props.onClick}
			disabled={props.disabled}
			startIcon={<Close />}
			size="small"
		>
			Cancel
		</ThemedButton>
	);
};

export default CancelButton;
