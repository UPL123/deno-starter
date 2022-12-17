# 🦕 Deno Starter

This is a fast starter template for creating Deno packages with TypeScript, Github Actions, tests, benchs and DNT (Deno to NPM package).

## ⚡ Getting started

To get started, you need to:

* Create a new repository using this template.
* Install [Deno](https://deno.land) on the latest version.
* Install [NodeJS](https://nodejs.org/en/) on the latest version if you want to use DNT.

Then, make the necesary changes.
Change the copyright holder on the `LICENCE` file from

```html
Copyright 2022 UPL123
```

to

```html
Copyright 2022 <Your name>
```

If you want to use DNT, go to `node.ts` and change the `pack` variable from

```ts
{
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
```

to

```ts
{
  name: "<your-pack-name>",
  version: "<your-pack-version>",
  description: "<your-pack-description>",
  license: "MIT",
  repository: {
    type: "git",
    url: "git+https://github.com/<your-github-name>/<your-pack-name>.git",
  },
  bugs: {
    url: "https://github.com/<your-github-name>/<your-pack-name>/issues",
  },
};
```

Now, you are ready to start 😀

### 📁 Files & folders

* `.github/` | Folder for Github Actions and stuff.
* `benches/` | Folder for all the benches of your code.

You can use benches to time Deno takes to finish running your code.

```ts
Deno.bench(function fetchBench() {
  fetch("https://deno.land");
});
```

You have an example file inside the folder.
You can run benches with `deno bench`. More information on <https://deno.land/manual@v1.29.1/tools/benchmarker>

* `src/` | Folder for your module's source code.
* `tests/` | Folder for all the tests of your code.

You can use tests to test your code and make asserts of it's response.

```ts
import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";

// Tests if 1 + 2 equals 3
Deno.test(function isEquals() {
  assertEquals<number>(1 + 2, 3);
});
```

You have an example file inside the folder.
You can run tests with `deno test`. More information on <https://deno.land/manual@v1.29.1/basics/testing>

* `deno.jsonc` | File that contains the configuration for Deno.
* `mod.ts` | Main file of the module.

You normally put in this file exports of the `src/` directory

```ts
export * from "./src/mod.ts";
```

* `node.ts` | File that contains code for using DNT

### 📋 Commands

You can use 3 commands defined in `deno.jsonc`:

* `format` | Lints and formats your code.
* `bundle` | Bundles your TypeScript code to JavaScript.
* `dnt` | Converts this Deno package into a NPM package

You can run these commands with `deno task <command>`. More information on <https://deno.land/manual@v1.29.1/tools/task_runner>

### ✅ Github Actions

This template uses Github Actions. Every time you make a push or a pull request, Github runs all your tests to verify everything is OK with your code.

## 👌 Information

This template is made by UPL123 under the MIT license.
