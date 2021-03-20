import React, { CSSProperties } from "react";
import { PencilFill, TrashFill } from "react-bootstrap-icons";

const MoneyComponent: React.FC<{
	date: string;
	value: number;
	index: number;
	updateSingleElem: (i: number, val: string) => void;
	deleteElem: (i: number) => void;
}> = (props) => {
	const date = new Date(props.date);

	const tableStyles: CSSProperties = {
		border: "1px solid black",
		borderCollapse: "collapse",
	};

	return (
		<div>
			<table style={tableStyles}>
				<tr style={tableStyles}>
					<th style={tableStyles}>Date</th>
					<th style={tableStyles}>Value</th>
					<th style={tableStyles}>Modify</th>
					<th style={tableStyles}>Delete</th>
				</tr>
				<tr style={tableStyles}>
					<td style={tableStyles}>{`${date.getFullYear()}-${
						date.getMonth() + 1
					}-${date.getDate()}`}</td>
					<td style={tableStyles}>{props.value}</td>
					<td>
						<button
							onClick={() =>
								props.updateSingleElem(
									props.index,
									Number(prompt("Inserisci il valore nuovo:") ?? "").toFixed(2)
								)
							}
						>
							<PencilFill /> Edit value
						</button>
					</td>
					<td>
						<button onClick={() => props.deleteElem(props.index)}>
							<TrashFill /> Delete value
						</button>
					</td>
				</tr>
			</table>
		</div>
	);
};

export default MoneyComponent;
