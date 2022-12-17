import { add } from "../mod.ts";

// Takes the time to use the add function
Deno.bench(function addFunction() {
  add(1, 2);
});
