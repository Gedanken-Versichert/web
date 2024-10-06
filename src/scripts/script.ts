import config from "@/config.json";
import Fuse from "fuse.js";

const links = config.sections.flatMap((section) => section.links);

const fuse = new Fuse(links, {
	keys: ["title", "url"],
	threshold: 0.2,
	ignoreLocation: true,
});

const input = document.querySelector<HTMLInputElement>("#search");
if (!input) throw new Error("Input element not found");

const resultsElem = document.querySelector<HTMLUListElement>("#results");
if (!resultsElem) throw new Error("Results element not found");

resultsElem.innerHTML = links
	.map((link) => `<a class="link" href=${link.url}>${link.title}</a>`)
	.join("");

input.addEventListener("input", () => {
	if (input.value === "") {
		resultsElem.innerHTML = links
			.map((link) => `<a class="link" href=${link.url}>${link.title}</a>`)
			.join("");
		return;
	}

	const results = fuse.search(input.value);

	if (results.length === 0) {
		resultsElem.innerHTML = `<p id="fallback">No results found</p>`;
		return;
	}

	resultsElem.innerHTML = results
		.map(
			(result) =>
				`<a class="link" href=${result.item.url}>${result.item.title}</a>`,
		)
		.join("");
});

const searchOverlay =
	document.querySelector<HTMLDialogElement>("#search-overlay");
if (!searchOverlay) throw new Error("Search overlay not found");

document.querySelector("#search-button")?.addEventListener("click", () => {
	searchOverlay.showModal();
});

// Add ⌘+K and Ctrl+K shortcuts for opening the search overlay
document.addEventListener("keydown", (e) => {
	if ((e.metaKey && e.key === "k") || (e.ctrlKey && e.key === "k")) {
		searchOverlay.showModal();
	}
});
