import React from "react";
import { Google } from "react-bootstrap-icons";

function App() {
	return (
		<div>
			<div>
				<h1>SaveBase</h1>
				<h3>The coolest way to track your savings.</h3>
				<a
					style={{
						display: "inline-block",
						padding: "1rem",
						borderRadius: "0.5rem",
						textDecoration: "none",
						color: "#eff1f3",
						backgroundColor: "#e26d5a",
						fontWeight: "bold",
					}}
					href="/login"
				>
					<Google />
					<span style={{ marginLeft: ".5rem", lineHeight: "2em" }}>
						LOG IN WITH GOOGLE
					</span>
				</a>
			</div>
			<div style={{ marginTop: "5rem" }}>
				<h2>What is SaveBase?</h2>
				<p>With savebase, you can track your savings with ease!</p>
				<h2>Features</h2>
				<ul>
					<li>Tracking: you can track how much money you save.</li>
					<li>
						Estimate: you can see approximately how much time is left until
						reaching your goal.
					</li>
				</ul>
				<h2>Note</h2>
				<p>For the estimation, at least 2 days of data are needed.</p>
				<h2>Disclamer</h2>
				<p>
					We don&#39;t save any of your personal data. We use an hash of your
					google id to authenticate you.
				</p>
			</div>
		</div>
	);
}

export default App;
