import React from "react";
import { Edit } from "@material-ui/icons";
import { Button, withStyles } from "@material-ui/core";

const ThemedButton = withStyles({
	root: {
		backgroundColor: "#009FB7",
		color: "#272727",
		marginRight: "0.25rem",
	},
})(Button);

function EditButton() {
	return (
		<ThemedButton disableElevation size="small" startIcon={<Edit />}>
			Edit
		</ThemedButton>
	);
}

export default EditButton;
