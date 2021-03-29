import React from "react";

const RightHalfOfScreenWrapper: React.FC<{}> = (props) => {
	return (
		<div
			style={{
				order: 1,
				minWidth: "70%",
			}}
		>
			{props.children}
		</div>
	);
};

export default RightHalfOfScreenWrapper;
