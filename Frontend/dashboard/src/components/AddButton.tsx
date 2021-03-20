import React from "react";
import { Plus } from "react-bootstrap-icons";

const AddButton: React.FC<{ addFn: () => void }> = (props) => {
	return (
		<button onClick={() => props.addFn()}>
			<Plus /> Add value
		</button>
	);
};

export default AddButton;
