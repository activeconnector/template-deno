import { assertEquals } from "https://deno.land/std@0.211.0/testing/asserts.ts";
import { main } from "./mod.ts";

Deno.test("hello()", () => {
  assertEquals(
    main(),
    "Hello, World!",
  );
});
