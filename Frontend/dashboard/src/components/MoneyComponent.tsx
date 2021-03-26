import React, { useState } from "react";
import { Card, makeStyles } from "@material-ui/core";
import EditMoneyForm from "./EditMoneyForm";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const useStyles = makeStyles({
	moneyObjCard: {
		backgroundColor: "#EFF1F3",
		borderColor: "#696773",
		padding: "1rem",
		marginBottom: "1.5rem",
	},
	date: {
		fontSize: 12,
	},
	value: {
		fontSize: 20,
		fontWeight: "bold",
	},
});

const MoneyComponent: React.FC<{
	dateObj: Date;
	moneyVal: number;
	index: number;
	disabledEdit?: boolean;
	currency: string;
	onEdit: (index: number, newVal: number) => void;
	onDelete: (index: number) => void;
}> = (props) => {
	const style = useStyles();
	const [isBeingEdited, setIsBeingEdited] = useState(false);
	return (
		<Card className={style.moneyObjCard} variant="outlined">
			<div className={style.date}>
				{props.dateObj.getFullYear()}-{props.dateObj.getMonth() + 1}-
				{props.dateObj.getDate()}
			</div>
			{isBeingEdited ? (
				<EditMoneyForm
					disabled={props.disabledEdit}
					onClick={(editResult) => {
						setIsBeingEdited(false);
						if (editResult === "aborted") return;
						props.onEdit(props.index, editResult);
					}}
				/>
			) : (
				<>
					<div className={style.value}>
						{props.moneyVal + "" + props.currency}
					</div>
					<EditButton onClick={() => setIsBeingEdited(true)} />
					<DeleteButton onClick={() => props.onDelete(props.index)} />
				</>
			)}
		</Card>
	);
};

export default MoneyComponent;
