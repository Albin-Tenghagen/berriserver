import { useState } from "react";

export function Button() {
	// State to store fetched message
	const [message, setMessage] = useState<string | null>(null);

	async function handleClick() {
		try {
			const response = await fetch("http://localhost:1337/");
			const data = await response.json();
			console.log("Fetched data:", data);

			setMessage(data.message);
		} catch (error) {
			console.error("Error fetching data:", error);
			setMessage("Error fetching data");
		}
	}

	return (
		<article className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
			<div className="bg-gray-700 p-8 rounded-lg shadow-lg text-center">
				<h1 className="text-3xl font-bold mb-6 text-purple-300">BerryPi</h1>

				<button
					onClick={handleClick}
					className="px-6 py-3 bg-purple-500 hover:bg-purple-600 active:bg-purple-700 text-white font-semibold rounded-md shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
				>
					Fetch Data
				</button>

				{/* Render the message */}
				{message && (
					<p className="mt-6 text-lg text-gray-200 bg-gray-800 px-4 py-2 rounded-md border border-gray-600">
						{message}
					</p>
				)}
			</div>
		</article>
	);
}
