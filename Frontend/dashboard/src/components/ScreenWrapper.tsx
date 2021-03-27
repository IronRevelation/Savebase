import React from "react";

const ScreenWrapper: React.FC<{}> = (props) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row-reverse",
				flexWrap: "wrap",
				justifyContent: "flex-end",
			}}
		>
			{props.children}
		</div>
	);
};

export default ScreenWrapper;
