import React from "react";
import { MoneyArray } from "./MoneyManager";
import { Card, makeStyles } from "@material-ui/core";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const useStyles = makeStyles({
	moneyObjCard: {
		backgroundColor: "#EFF1F3",
		borderColor: "#696773",
		padding: "0.5rem",
		marginBottom: "0.5rem",
	},
	date: {
		fontSize: 12,
	},
	value: {
		fontSize: 20,
		fontWeight: "bold",
	},
});

const MoneyList: React.FC<{ money: MoneyArray }> = (props) => {
	const style = useStyles();
	return (
		<div style={{ marginTop: "2rem", display: "inline-block" }}>
			{props.money.map((moneyObj, index) => {
				const currMoneyObjDate = new Date(moneyObj.date);
				return (
					<Card key={index} className={style.moneyObjCard} variant="outlined">
						<div className={style.date}>
							{currMoneyObjDate.getFullYear()}-{currMoneyObjDate.getMonth() + 1}
							-{currMoneyObjDate.getDate()}
						</div>
						<div className={style.value}>{moneyObj.value}</div>
						<EditButton />
						<DeleteButton />
					</Card>
				);
			})}
		</div>
	);
};

export default MoneyList;
