import { IndexPage } from "@/pages/index.tsx";
import { LegalPage } from "@/pages/legal.tsx";

// Write styles
const styles = new Bun.Glob("*.css").scanSync("src/styles/");
for (const css of styles) {
	Bun.write(`dist/${css}`, Bun.file(`src/styles/${css}`));
}

// Build scripts
const scripts = Array.from(new Bun.Glob("*.ts").scanSync("src/scripts"));
Bun.build({
	entrypoints: scripts.map((s) => `src/scripts/${s}`),
	outdir: "dist/",
	minify: true,
});

// Make index page
Bun.write("dist/index.html", IndexPage().toString());

// Make legal page
Bun.write("dist/legal.html", LegalPage().toString());
