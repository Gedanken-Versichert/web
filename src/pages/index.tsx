import config from "@/config.json";
import { Search, Undo2 } from "lucide-static";

const links = config.sections.flatMap((section) =>
	section.links.flatMap((link) => link),
);

function SearchOverlay() {
	return (
		<div id="search-overlay">
			<span>
				<button id="return">{Undo2}</button>
				<input type="search" id="search" placeholder="Search..." />
			</span>
			<ul id="results">
				{links.map((link) => (
					<a class="link" href={link.url}>
						{link.title}
					</a>
				))}
				<p id="fallback">No results found</p>
			</ul>
		</div>
	);
}

export function IndexPage() {
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
					<link rel="stylesheet" href="/index.css" />
					<link rel="stylesheet" href="/search.css" />
					<script type="module" src="/search.js"></script>
				</head>
				<body>
					<header>
						<span>
							<h1>{config.title}</h1>
							<p>{config.touchWarning}</p>
						</span>
						<button id="search-button">{Search}</button>
					</header>
					<main>
						{config.sections.map(({ title, links }) => (
							<section>
								<h2>{title}</h2>
								<div>
									{links.map((link) => (
										<a href={link.url}>{link.title}</a>
									))}
								</div>
							</section>
						))}
					</main>
					<footer>
						<span>
							Copyright © <a href="https://github.com/noClaps">noClaps</a> 2023
						</span>
						<span>&#x2022</span>
						<a href="/legal/">Legal</a>
					</footer>
					<SearchOverlay />
				</body>
			</html>
		</>
	);
}
