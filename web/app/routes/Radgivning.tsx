import type { Route } from "./+types/Radgivning";
import { Welcome } from "../components/welcome/welcome";
import { Button } from "../components/button/Button";
import UserForm from "~/components/form/form";
import { Header } from "../components/header/header";
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "BerriPi Rådgiving" },
		{ name: "Rådgivning", content: "Welcome to Rådgivning!" },
	];
}

export default function Rådgiving() {
	return (
		<main>
			<Header />
			<h1>Rådgiving</h1>
			<Welcome />
			<Button />
			<UserForm />
		</main>
	);
}
