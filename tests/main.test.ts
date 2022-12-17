import { assertEquals } from "https://deno.land/std@0.168.0/testing/asserts.ts";

import { add } from "../mod.ts";

// Tests if the add function with parameters 1 and 2 gives 3
Deno.test(function isEquals() {
  assertEquals<number>(add(1, 2), 3);
});
