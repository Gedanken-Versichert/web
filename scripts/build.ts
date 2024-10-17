import { IndexPage } from "@/pages/index.tsx";
import { LegalPage } from "@/pages/legal.tsx";

// Write CSS
Bun.write(`dist/style.css`, Bun.file(`src/styles/style.css`));

// Build scripts
Bun.build({
	entrypoints: ["src/scripts/script.tsx"],
	outdir: "dist/",
	minify: true,
});

// Make index page
Bun.write("dist/index.html", IndexPage().toString());

// Make legal page
Bun.write("dist/legal.html", LegalPage().toString());
