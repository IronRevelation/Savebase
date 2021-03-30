import React from "react";

function App() {
	return (
		<div>
			<h1>SaveBase</h1>
			<h3>The coolest way to track your savings.</h3>
			<a
				style={{
					display: "inline-block",
					padding: "1rem",
					borderRadius: "0.5rem",
					textDecoration: "none",
					color: "#272727",
					backgroundColor: "red",
					fontWeight: "bold",
				}}
				href="/login"
			>
				LOG IN WITH GOOGLE
			</a>
		</div>
	);
}

export default App;
