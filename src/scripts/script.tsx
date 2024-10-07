import config from "@/config.json";
import MiniSearch from "minisearch";

function Link(props: { title: string; url: string }) {
	const { title, url } = props;
	return (
		<a
			class="border-t-solid border-t-0.125rem border-t-[--text] py-1rem no-underline text-[--text]"
			href={url}
		>
			{title}
		</a>
	);
}

const links = config.sections.flatMap((section) => section.links);

const minisearch = new MiniSearch<(typeof links)[0]>({
	fields: ["title", "url"],
	idField: "title",
	storeFields: ["title", "url"],
	searchOptions: {
		prefix: true,
		fuzzy: true,
	},
});
minisearch.addAll(links);

const input = document.querySelector<HTMLInputElement>("#search");
if (!input) throw new Error("Input element not found");

const resultsElem = document.querySelector<HTMLUListElement>("#results");
if (!resultsElem) throw new Error("Results element not found");

resultsElem.innerHTML = links
	.map((link) => <Link title={link.title} url={link.url} />)
	.join("");

input.addEventListener("input", () => {
	const results = minisearch.search(input.value || MiniSearch.wildcard);

	if (results.length === 0) {
		resultsElem.innerHTML = (
			<p class={"text-[--text] text-center"} id="fallback">
				No results found
			</p>
		).toString();
		return;
	}

	resultsElem.innerHTML = results
		.map((result) => <Link title={result.title} url={result.url} />)
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
