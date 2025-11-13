import { index, route } from "@react-router/dev/routes";

export default [
	index("routes/Home.tsx"),
	route("hitta", "routes/Hitta.tsx"),
	route("radgivning", "routes/Radgivning.tsx"),
	route("byggtjanster", "routes/Byggtjanster.tsx"),
];
