export function rockPaperScissorsScore(input: string): number {
  const points = new Map([["X", 1], ["Y", 2], ["Z", 3]]);
  const outcomes = new Map([
    ["A X", 3],
    ["A Y", 6],
    ["A Z", 0],
    ["B X", 0],
    ["B Y", 3],
    ["B Z", 6],
    ["C X", 6],
    ["C Y", 0],
    ["C Z", 3],
  ]);
  const games: string[] = input.trim().split("\n");
  return games.reduce(
    (acc, round) =>
      acc + points.get(round.split(" ")[1])! + outcomes.get(round)!,
    0,
  );
}

export function rockPaperScissorsScorePart2(input: string): number {
  const outcomes = new Map([["X", 0], ["Y", 3], ["Z", 6]]);
  const points = new Map([
    ["A X", 3],
    ["A Y", 1],
    ["A Z", 2],
    ["B X", 1],
    ["B Y", 2],
    ["B Z", 3],
    ["C X", 2],
    ["C Y", 3],
    ["C Z", 1],
  ]);
  const games: string[] = input.trim().split("\n");
  return games.reduce(
    (acc, round) =>
      acc + outcomes.get(round.split(" ")[1])! + points.get(round)!,
    0,
  );
}
