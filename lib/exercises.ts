export type ExerciseLevel = "Warm-up" | "Build" | "Interview";

export type Exercise = {
  id: string;
  level: ExerciseLevel;
  duration: string;
  title: string;
  filePath: string;
  concept: string;
  brief: string;
  todos: string[];
  doneWhen: string[];
  questions: string[];
};

export const exercises: Exercise[] = [
  {
    id: "01",
    level: "Warm-up",
    duration: "20 min",
    title: "Type Detective",
    filePath: "exercises/01-type-detective.ts",
    concept: "Primitives, arrays, objects, unions, and literal types",
    brief: "Model a candidate's interview preferences without using any. Make invalid choices impossible.",
    todos: [
      "Create an InterviewMode union: 'remote' | 'onsite'.",
      "Create a Candidate type with name, yearsOfExperience, preferredMode, and topics.",
      "Write a describeCandidate function that returns one readable sentence.",
    ],
    doneWhen: [
      "TypeScript flags a mode other than remote or onsite.",
      "Your function accepts a Candidate and returns a string.",
      "No any types are used.",
    ],
    questions: ["When would you choose type over interface?", "Why are literal unions useful in UI code?"],
  },
  {
    id: "02",
    level: "Warm-up",
    duration: "25 min",
    title: "The Unknown Caller",
    filePath: "exercises/02-the-unknown-caller.ts",
    concept: "unknown, type guards, narrowing, optional properties",
    brief: "An API gives you unknown JSON. Safely turn it into a display name or a helpful fallback.",
    todos: [
      "Accept unknown instead of any.",
      "Write an isRecord type guard.",
      "Narrow a possible name property before using it.",
    ],
    doneWhen: [
      "Malformed input never throws.",
      "You can explain why unknown is safer than any.",
      "The guard is reusable.",
    ],
    questions: ["What is control-flow narrowing?", "How does unknown change what TypeScript lets you do?"],
  },
  {
    id: "03",
    level: "Build",
    duration: "35 min",
    title: "Scoreboard Math",
    filePath: "exercises/03-scoreboard-math.ts",
    concept: "Functions, generics, readonly data, map/reduce",
    brief: "Build a typed score calculator for a list of practice attempts.",
    todos: [
      "Define a generic Result<T> with value and score.",
      "Write averageScore without mutating its input.",
      "Return a tagged result for empty arrays.",
    ],
    doneWhen: [
      "The input array is readonly.",
      "The empty case is represented explicitly.",
      "You can state what the generic provides here.",
    ],
    questions: ["What is the difference between a generic and a union?", "Why avoid mutation in React code?"],
  },
  {
    id: "04",
    level: "Build",
    duration: "45 min",
    title: "Props With a Purpose",
    filePath: "exercises/04-question-card.tsx",
    concept: "React props, discriminated unions, component composition",
    brief: "Create a QuestionCard component that renders multiple-choice and free-text questions safely.",
    todos: [
      "Model question variants with a kind field.",
      "Render choices only for the multiple-choice variant.",
      "Keep the component accessible with labels and buttons.",
    ],
    doneWhen: [
      "No optional-prop guessing is needed.",
      "Adding a new variant produces a useful compiler prompt.",
      "Keyboard users can complete the interaction.",
    ],
    questions: ["Why use a discriminated union for props?", "When should state stay local?"],
  },
  {
    id: "05",
    level: "Build",
    duration: "50 min",
    title: "Route Runner",
    filePath: "exercises/05-route-runner.md",
    concept: "App Router, dynamic routes, params, loading and not-found states",
    brief: "Turn the exercise list into real /exercises/[id] pages.",
    todos: [
      "Create a dynamic route for one exercise.",
      "Read and validate the route parameter.",
      "Add loading and not-found UI.",
    ],
    doneWhen: [
      "Every listed exercise has a URL.",
      "An invalid ID gets a not-found response.",
      "You can explain file-based routing in the App Router.",
    ],
    questions: ["What makes a route dynamic?", "When is loading.tsx rendered?"],
  },
  {
    id: "06",
    level: "Interview",
    duration: "60 min",
    title: "Server / Client Border Patrol",
    filePath: "exercises/06-server-client-boundary.md",
    concept: "Server Components, Client Components, data fetching, state",
    brief: "Add a completion toggle and a server-rendered progress summary without blurring the boundary.",
    todos: [
      "Keep static exercise data in a Server Component.",
      "Move interactive completion state into a Client Component.",
      "Explain the boundary in a short README note.",
    ],
    doneWhen: [
      "useState only appears in a client file.",
      "The page still renders useful content before interaction.",
      "You can explain why not every component needs 'use client'.",
    ],
    questions: ["What does 'use client' actually do?", "What can cross the Server-to-Client boundary?"],
  },
  {
    id: "07",
    level: "Interview",
    duration: "75 min",
    title: "The Monday Mock",
    filePath: "exercises/07-monday-mock.md",
    concept: "End-to-end reasoning, debugging, performance, testing",
    brief: "Build a filtered exercise dashboard, then explain the tradeoffs aloud as if you were in the interview.",
    todos: [
      "Add filter state for level and a text search.",
      "Prevent needless recalculation when the list grows.",
      "Write tests for the filtering logic.",
      "Describe one performance and one accessibility decision.",
    ],
    doneWhen: [
      "Filtering is typed and testable outside the UI.",
      "The UI announces useful filter results.",
      "You can complete it in 75 minutes without outside help.",
    ],
    questions: ["How would you diagnose a slow Next page?", "What would you test at unit vs integration level?"],
  },
];
