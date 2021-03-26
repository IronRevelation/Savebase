import React from "react";

const LeftHalfOfScreenWrapper: React.FC<{}> = (props) => {
	return <div style={{ order: 2, flex: 1 }}>{props.children}</div>;
};

export default LeftHalfOfScreenWrapper;
