document.querySelectorAll<HTMLDivElement>(".nested").forEach((section) => {
	section.addEventListener("click", () => {
		section.toggleAttribute("open");

		const div = section.querySelector("div")!;

		if (div.style.height) {
			div.style.removeProperty("height");
		} else {
			div.style.height = `${div.scrollHeight}px`;
		}
	});
});
