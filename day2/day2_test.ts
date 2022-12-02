import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { rockPaperScissorsScore, rockPaperScissorsScorePart2 } from "./day2.ts";

const input = `A Y
B X
C Z`;

Deno.test({
  name: "part 1",
  fn: () => {
    assertEquals(rockPaperScissorsScore(input), 15);
  },
});

Deno.test({
  name: "part 2",
  fn: () => {
    assertEquals(rockPaperScissorsScorePart2(input), 12);
  },
});
