import { build, emptyDir } from "https://deno.land/x/dnt@0.32.0/mod.ts";

emptyDir("package");

const pack = {
  name: "deno-starter",
  version: "0.1.0",
  description: "A Deno starter module template",
  license: "MIT",
  repository: {
    type: "git",
    url: "git+https://github.com/UPL123/deno-starter.git",
  },
  bugs: {
    url: "https://github.com/UPL123/deno-starter/issues",
  },
};

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./package",
  shims: {
    deno: true,
  },
  package: pack,
});

Deno.copyFileSync("LICENSE", "package/LICENSE");
Deno.copyFileSync("README.md", "package/README.md");
