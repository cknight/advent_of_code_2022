/*
 *  https://adventofcode.com/2022/day/1
 */

import { calorieCounter } from "./day1.ts";

const day1Input: string = await Deno.readTextFile("./day1Input.txt");
console.log("Part 1", calorieCounter(day1Input)[0]);
console.log(
  "Part 2",
  calorieCounter(day1Input).reduce((acc, cum) => acc + cum),
);
