// Mission 02: The Unknown Caller
// Goal: turn unknown API data into a safe display name.

// TODO: Make this a real type guard for a non-null object.
function isRecord(value: unknown): value is Record<string, unknown> {
  return false;
}

// TODO: Return a name only when input has a non-empty string `name` property.
export function getDisplayName(input: unknown): string {
  if (!isRecord(input)) {
    return "Anonymous candidate";
  }

  return "Anonymous candidate";
}

console.log(getDisplayName({ name: "Grace" }));
console.log(getDisplayName({ name: 42 }));
console.log(getDisplayName(null));
