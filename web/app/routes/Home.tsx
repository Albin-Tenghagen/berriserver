import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome/welcome";
import { Button } from "../components/button/Button";
import UserForm from "~/components/form/form";
import { Header } from "../components/header/header";
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "BerriPi React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<main>
			{/* <Header /> */}
			<Welcome />
			<Button />
			<UserForm />
		</main>
	);
}
