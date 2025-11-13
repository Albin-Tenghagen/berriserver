export function Button() {
	async function handleClick() {
		try {
			const response = await fetch("http://localhost:1337/");
			const data = await response.json();
			console.log("Fetched data:", data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	return (
		<article>
			<h1>BerryPi</h1>
			<button onClick={handleClick}>Fetch Data</button>
		</article>
	);
}
