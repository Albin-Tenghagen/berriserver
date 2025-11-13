import { useState } from "react";

export function Button() {
	// State to store fetched message
	const [message, setMessage] = useState<string | null>(null);

	async function handleClick() {
		try {
			const response = await fetch("http://localhost:1337/");
			const data = await response.json();
			console.log("Fetched data:", data);

			// Update state with fetched message
			setMessage(data.message);
		} catch (error) {
			console.error("Error fetching data:", error);
			setMessage("Error fetching data");
		}
	}

	return (
		<article>
			<h1>BerryPi</h1>
			<button onClick={handleClick}>Fetch Data</button>

			{/* Render the message if it exists */}
			{message && <p>{message}</p>}
		</article>
	);
}
