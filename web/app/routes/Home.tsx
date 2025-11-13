import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome/welcome";
import { Button } from "../components/button/Button";
import UserForm from "~/components/form/form";
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "BerriPi React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<main>
			<Welcome />
			<Button />
			<UserForm />
		</main>
	);
}
