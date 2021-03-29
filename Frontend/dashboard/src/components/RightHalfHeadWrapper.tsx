import React from "react";

const RightHalfHeadWrapper: React.FC<{}> = (props) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "flex-start",
				flexWrap: "wrap",
			}}
		>
			{props.children}
		</div>
	);
};

export default RightHalfHeadWrapper;
