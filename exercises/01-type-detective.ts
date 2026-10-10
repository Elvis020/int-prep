// Mission 01: Type Detective
// Run `npx tsc --noEmit exercises/01-type-detective.ts` while you work.

// TODO: Limit the allowed values to "remote" and "onsite".
type InterviewMode = string;

// TODO: Replace the loose types with accurate TypeScript types.
type Candidate = {
  name: string;
  yearsOfExperience: number;
  preferredMode: InterviewMode;
  topics: string[];
};

// TODO: Accept a Candidate and return a readable sentence.
export function describeCandidate(candidate: Candidate): string {
  return "Replace this placeholder.";
}

const exampleCandidate = {
  name: "Ada",
  yearsOfExperience: 3,
  preferredMode: "remote",
  topics: ["TypeScript", "Next.js"],
} satisfies Candidate;

console.log(describeCandidate(exampleCandidate));
