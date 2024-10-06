import Fuse from "fuse.js";
import config from "@/config.json";

const links = config.sections.flatMap((section) =>
	section.links.flatMap((link) => link),
);

const fuse = new Fuse(links, {
	keys: ["title", "url"],
	threshold: 0.2,
	ignoreLocation: true,
});

const input = document.querySelector<HTMLInputElement>("#search");
const fallback = document.querySelector<HTMLParagraphElement>("#fallback")!;
const linkElems = document.querySelectorAll<HTMLAnchorElement>(".link");

input?.addEventListener("input", () => {
	const results = fuse.search(input.value);

	if (results.length !== 0) {
		linkElems.forEach((link) => {
			link.style.display = "none";
		});
		fallback.style.display = "none";

		results.forEach((result) => {
			const resultLink = document.querySelector<HTMLAnchorElement>(
				`.link[href="${result.item.url}"]`,
			)!;
			resultLink.style.display = "initial";
		});
	} else {
		fallback.style.display = "block";
		linkElems.forEach((link) => {
			link.style.display = "none";
		});
	}

	if (input.value === "") {
		linkElems.forEach((link) => {
			link.style.display = "block";
		});
		fallback.style.display = "none";
	}
});

const searchOverlay =
	document.querySelector<HTMLDivElement>("#search-overlay")!;
document.querySelector("#search-button")?.addEventListener("click", () => {
	searchOverlay.style.display = "flex";
	setTimeout(() => {
		searchOverlay.style.visibility = "visible";
		searchOverlay.style.opacity = "1";
	}, 0);
	setTimeout(() => {
		document.querySelector<HTMLInputElement>("#search")?.focus();
	}, 250);
});

// Add ⌘+K and Ctrl+K shortcuts for opening the search overlay
document.addEventListener("keydown", (e) => {
	if ((e.metaKey && e.key === "f") || (e.ctrlKey && e.key === "f")) {
		e.preventDefault();
		searchOverlay.style.display = "flex";
		setTimeout(() => {
			searchOverlay.style.visibility = "visible";
			searchOverlay.style.opacity = "1";
		}, 0);
		setTimeout(() => {
			document.querySelector<HTMLInputElement>("#search")?.focus();
		}, 250);
	}
});

document.querySelector("#return")?.addEventListener("click", () => {
	searchOverlay.style.opacity = "0";
	searchOverlay.style.visibility = "hidden";
	setTimeout(() => (searchOverlay.style.display = "none"), 250);
});

// Add Esc keyboard shortcut to exit search overlay
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		searchOverlay.style.opacity = "0";
		searchOverlay.style.visibility = "hidden";
		setTimeout(() => (searchOverlay.style.display = "none"), 250);
	}
});
