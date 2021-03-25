import React from "react";
import { Delete } from "@material-ui/icons";
import { Button, withStyles } from "@material-ui/core";

const ThemedButton = withStyles({
	root: {
		backgroundColor: "#e26d5a",
		color: "#272727",
	},
})(Button);

const DeleteButton: React.FC<{ onClick: () => void }> = (props) => {
	return (
		<ThemedButton
			disableElevation
			size="small"
			startIcon={<Delete />}
			onClick={() => props.onClick()}
		>
			Delete
		</ThemedButton>
	);
};

export default DeleteButton;
