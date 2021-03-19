import React, { CSSProperties } from "react";

const MoneyComponent: React.FC<{ date: string; value: number }> = (props) => {
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
				</tr>
				<tr style={tableStyles}>
					<td style={tableStyles}>{`${date.getFullYear()}-${
						date.getMonth() + 1
					}-${date.getDate()}`}</td>
					<td style={tableStyles}>{props.value}</td>
				</tr>
			</table>
		</div>
	);
};

export default MoneyComponent;
