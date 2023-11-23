import Fuse from "fuse.js";
import config from "@src/config.json";

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
        linkElems.forEach(link => {
            link.style.display = "none";
        });
        fallback.style.display = "none";

        results.forEach(result => {
            const resultLink = document.querySelector<HTMLAnchorElement>(
                `.link[href="${ result.item.url }"]`,
            )!;
            resultLink.style.display = "initial";
        });
    } else {
        fallback.style.display = "block";
        linkElems.forEach(link => {
            link.style.display = "none";
        });
    }

    if (input.value === "") {
        linkElems.forEach(link => {
            link.style.display = "block";
        });
        fallback.style.display = "none";
    }
});
