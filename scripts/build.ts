import { IndexPage } from "@/pages/index.tsx";
import { LegalPage } from "@/pages/legal.tsx";

// Build scripts and styles
Bun.build({
  entrypoints: ["src/scripts/script.tsx", "src/styles/style.css"],
  outdir: "dist/",
  minify: true,
  naming: "/[name].[ext]",
  experimentalCss: true,
});

// Make index page
Bun.write("dist/index.html", IndexPage().toString());

// Make legal page
Bun.write("dist/legal.html", LegalPage().toString());
