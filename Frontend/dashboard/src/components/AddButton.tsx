import React from "react";
import { Add } from "@material-ui/icons";
import { Button, withStyles } from "@material-ui/core";

const ThemedButton = withStyles({
	root: {
		backgroundColor: "#009fb7",
		color: "#272727",
	},
})(Button);

const AddButton: React.FC<{ onClick: () => void; disabled?: boolean }> = (
	props
) => {
	return (
		<ThemedButton
			variant="contained"
			startIcon={<Add />}
			disableElevation
			onClick={props.onClick}
			disabled={props.disabled}
		>
			Add value
		</ThemedButton>
	);
};

export default AddButton;
