import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

type SnackbarConfig = {
	open: boolean;
	message: string;
};

export function ErrSnackbar(props: {
	openCfg: SnackbarConfig;
	onClose: () => void;
}) {
	return (
		<Snackbar
			open={props.openCfg.open}
			autoHideDuration={2500}
			onClose={props.onClose}
		>
			<Alert severity="error" variant="filled">
				{props.openCfg.message}
			</Alert>
		</Snackbar>
	);
}

export function SuccessSnackbar(props: {
	openCfg: SnackbarConfig;
	onClose: () => void;
}) {
	return (
		<Snackbar
			open={props.openCfg.open}
			autoHideDuration={2500}
			onClose={props.onClose}
		>
			<Alert severity="success" variant="filled">
				{props.openCfg.message}
			</Alert>
		</Snackbar>
	);
}
