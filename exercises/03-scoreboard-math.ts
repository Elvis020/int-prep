// Mission 03: Scoreboard Math

export type Result<T> = {
  value: T;
  score: number;
};

export type ScoreSummary =
  | { kind: "empty" }
  | { kind: "average"; value: number };

// TODO: Calculate the average score without mutating attempts.
// TODO: Return { kind: "empty" } when attempts has no values.
export function averageScore<T>(attempts: readonly Result<T>[]): ScoreSummary {
  return { kind: "empty" };
}

const attempts = [
  { value: "types", score: 8 },
  { value: "routing", score: 6 },
] satisfies readonly Result<string>[];

console.log(averageScore(attempts));
