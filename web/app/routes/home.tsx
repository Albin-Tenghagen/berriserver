import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Button } from "../button/Button";
import UserForm from "~/form/form";
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
