export function Header() {
	return (
		<header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
			{/* Logo */}
			<div className="flex items-center">
				<a href="/" tabIndex={0}>
					<img width={128} src="/favicon.ico" alt="Bygglov" className="block" />
				</a>
			</div>

			{/* Navigation */}
			<nav className="flex items-center h-8">
				<ul className="flex items-center gap-6">
					<li className="">
						<a
							tabIndex={0}
							href="/hitta"
							className="block
      px-4 py-2
      rounded-xl
      transition-all
      duration-200
      text-gray-700
      hover:bg-gray-100
      hover:text-gray-900
			hover:ring-2
hover:ring-blue-400
      focus:outline-none
      focus:ring-2
      focus:ring-blue-400
      focus:bg-blue-50"
						>
							Hitta
						</a>
					</li>
					<li>
						<a
							tabIndex={0}
							href="/radgivning"
							className="block
      px-4 py-2
      rounded-xl
      transition-all
      duration-200
      text-gray-700
      hover:bg-gray-100
      hover:text-gray-900
hover:ring-2
hover:ring-blue-400
      focus:ring-2
      focus:ring-blue-400
      focus:bg-blue-50"
						>
							Rådgivning
						</a>
					</li>
					<li>
						<a
							tabIndex={0}
							href="/byggtjanster"
							className="block
      px-4 py-2
      rounded-xl
      transition-all
      duration-200
      text-gray-700
      hover:bg-gray-100
      hover:text-gray-900
			hover:ring-2
hover:ring-blue-400
      focus:outline-none
      focus:ring-2
      focus:ring-blue-400
      focus:bg-blue-50"
						>
							Byggtjänster
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
