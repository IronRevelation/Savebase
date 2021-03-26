import React from "react";

const RightHalfOfScreenWrapper: React.FC<{}> = (props) => {
	return <div style={{ flex: 1, order: 1 }}>{props.children}</div>;
};

export default RightHalfOfScreenWrapper;
