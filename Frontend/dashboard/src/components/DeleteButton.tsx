import React from "react";
import { Delete } from "@material-ui/icons";
import { Button, withStyles } from "@material-ui/core";

const ThemedButton = withStyles({
	root: {
		backgroundColor: "#e26d5a",
		color: "#272727",
		marginLeft: "0.25rem",
	},
})(Button);

function DeleteButton() {
	return (
		<ThemedButton disableElevation size="small" startIcon={<Delete />}>
			Delete
		</ThemedButton>
	);
}

export default DeleteButton;
