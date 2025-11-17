export function Header() {
	return (
		<header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
			{/* Logo */}
			<div className="flex items-center">
				<a href="/">
					<img width={128} src="/favicon.ico" alt="Bygglov" className="block" />
				</a>
			</div>

			{/* Navigation */}
			<nav className="flex items-center h-8">
				<ul className="flex items-center gap-6">
					<li>
						<a
							href="/hitta"
							className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
						>
							Hitta
						</a>
					</li>
					<li>
						<a
							href="/radgivning"
							className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
						>
							Rådgivning
						</a>
					</li>
					<li>
						<a
							href="/byggtjanster"
							className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
						>
							Byggtjänster
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
