import type { Route } from "./+types/Byggtjanster";
import { Welcome } from "../components/welcome/welcome";
import { Button } from "../components/button/Button";
import UserForm from "../components/form/form";
import { Header } from "../components/header/header";
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "BerriPi byggtjänster" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Byggtjänster() {
	return (
		<main>
			{/* <Header /> */}
			<h1>Byggtjänster</h1>
			<Welcome />
			<Button />
			<UserForm />
		</main>
	);
}
