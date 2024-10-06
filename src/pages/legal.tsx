import config from "@/config.json";
import legalMD from "./legal.md" with { type: "text" };
import { Marked } from "marked";

const legalHTML = await new Marked().parse(legalMD);

export function LegalPage() {
	return (
		<>
			{`<!doctype html>`}
			<html lang="en">
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
					<link rel="stylesheet" href="/legal.css" />
				</head>
				<body>
					<header>
						<a href="/">
							<h2>{config.title}</h2>
						</a>
					</header>
					{legalHTML}
					<footer>
						<span>
							Copyright © <a href="https://github.com/noClaps">noClaps</a> 2024
						</span>
					</footer>
				</body>
			</html>
		</>
	);
}
