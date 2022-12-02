/*
 *  https://adventofcode.com/2022/day/2
 */

import { rockPaperScissorsScore, rockPaperScissorsScorePart2 } from "./day2.ts";

const day2Input: string = await Deno.readTextFile("./day2Input.txt");
console.log("Part 1", rockPaperScissorsScore(day2Input));
console.log("Part 2", rockPaperScissorsScorePart2(day2Input));
