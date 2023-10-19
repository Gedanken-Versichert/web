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

input?.addEventListener("input", () => {
    document.querySelectorAll("section").forEach((section) => {
        section.querySelectorAll("a").forEach((a) => {
            if (input.value !== "") {
                a.style.display = "none";
            } else {
                a.style.display = "initial";
            }
        });
    });

    const results = fuse.search(input.value);

    results &&
        results.forEach((result) => {
            const resultLink = document.querySelector<HTMLAnchorElement>(
                `a[href="${ result.item.url }"]`,
            )!;
            resultLink.style.display = "initial";
        });
});