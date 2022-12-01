import { calorieCounter } from "./day1.ts";
import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

Deno.test({
  name: "part 1",
  fn: () => {
    assertEquals(calorieCounter(input)[0], 24000);
  },
});

Deno.test({
  name: "part 2",
  fn: () => {
    console.log(calorieCounter(input));
    assertEquals(calorieCounter(input).reduce((acc, cum) => acc + cum), 45000);
  },
});
