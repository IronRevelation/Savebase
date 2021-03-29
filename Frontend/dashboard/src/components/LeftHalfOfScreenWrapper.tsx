import React from "react";

const LeftHalfOfScreenWrapper: React.FC<{}> = (props) => {
	return <div style={{ order: 2, paddingRight: "4rem" }}>{props.children}</div>;
};

export default LeftHalfOfScreenWrapper;
