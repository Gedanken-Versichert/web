import config from "@/config.json";
import legalMD from "./legal.md" with { type: "text" };
import { Marked } from "marked";

const legalHTML = await new Marked().parse(legalMD);

export function LegalPage() {
	return (
		<>
			{`<!doctype html>`}
			<html
				lang="en"
				class={"font-[Zodiak,serif] bg-[--background] text-[--text]"}
			>
				<head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width" />
					<meta name="description" content={config.description} />
					<title>{config.title}</title>
					<link
						href="https://api.fontshare.com/v2/css?f[]=zodiak@1,2&display=swap"
						rel="stylesheet"
					/>
					<link rel="stylesheet" href="/style.css" />
					<link rel="stylesheet" href="/uno.css" />
				</head>
				<body
					class={
						"min-h-dvh grid grid-rows-[auto_1fr_auto] mx-auto w-88dvw max-w-64rem"
					}
				>
					<header class={"text-center flex justify-between items-center"}>
						<a class={"grow no-underline text-[--text]"} href="/">
							<h2 class={"text-2rem font-900"}>{config.title}</h2>
						</a>
					</header>
					<main class={"legal"}>{legalHTML}</main>
					<footer class={"p-1rem text-center"}>
						Copyright ©{" "}
						<a class={"text-[--text]"} href="https://zerolimits.dev">
							noClaps
						</a>{" "}
						2024
					</footer>
				</body>
			</html>
		</>
	);
}
