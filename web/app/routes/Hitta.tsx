import type { Route } from "./+types/Hitta";
import { Welcome } from "../components/welcome/welcome";
import { Button } from "../components/button/Button";
import UserForm from "~/components/form/form";
import { Header } from "~/components/header/header";
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "BerriPi Hitta Expert" },
		{ name: "description", content: "Welcome to expert finder!" },
	];
}

export default function Hitta() {
	return (
		<main>
			{/* <Header /> */}
			<h1>Hitta</h1>
			<Welcome />
			<Button />
			<UserForm />
		</main>
	);
}
