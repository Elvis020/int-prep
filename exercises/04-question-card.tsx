// Mission 04: Props With a Purpose
// Copy this component into the app when you are ready to wire it up.

type MultipleChoiceQuestion = {
  kind: "multiple-choice";
  prompt: string;
  choices: string[];
};

type FreeTextQuestion = {
  kind: "free-text";
  prompt: string;
};

type Question = MultipleChoiceQuestion | FreeTextQuestion;

type QuestionCardProps = {
  question: Question;
};

export function QuestionCard({ question }: QuestionCardProps) {
  // TODO: Render the prompt for every question.
  // TODO: Render accessible buttons only when question.kind is "multiple-choice".
  // TODO: Render a labelled textarea for the free-text variant.
  return <article>{question.prompt}</article>;
}
