import React from "react";
import { Edit } from "@material-ui/icons";
import { Button, withStyles } from "@material-ui/core";

const ThemedButton = withStyles({
	root: {
		backgroundColor: "#009FB7",
		color: "#272727",
		marginRight: "0.5rem",
	},
})(Button);

const EditButton: React.FC<{ onClick: () => void; disabled?: boolean }> = (
	props
) => {
	return (
		<ThemedButton
			disableElevation
			variant="contained"
			size="small"
			onClick={props.onClick}
			disabled={props.disabled}
			startIcon={<Edit />}
		>
			Edit
		</ThemedButton>
	);
};

export default EditButton;
