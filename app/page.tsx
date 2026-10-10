"use client";

import { useMemo, useState } from "react";
import { exercises, type Exercise, type ExerciseLevel } from "../lib/exercises";

const levels: Array<ExerciseLevel | "All"> = [
  "All",
  "Warm-up",
  "Build",
  "Interview",
];

function editorLink(filePath: string) {
  return `vscode://file${encodeURI(filePath)}`;
}

function Details({ exercise }: { exercise: Exercise }) {
  return (
    <details className="details">
      <summary>
        Mission brief <b>+</b>
      </summary>
      <div className="detail-body">
        <section>
          <h3>Build it</h3>
          <ol>
            {exercise.todos.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>
        <section>
          <h3>Done when</h3>
          <ul>
            {exercise.doneWhen.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h3>Say it out loud</h3>
          <ul>
            {exercise.questions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </details>
  );
}

export default function Home() {
  const [level, setLevel] = useState<ExerciseLevel | "All">("All");
  const [selectedId, setSelectedId] = useState(exercises[0].id);
  const [cleared, setCleared] = useState<string[]>([]);
  const [message, setMessage] = useState(
    "Choose a stage, then open its file in VS Code.",
  );
  const visible = useMemo(
    () => exercises.filter((item) => level === "All" || item.level === level),
    [level],
  );
  const selected =
    visible.find((item) => item.id === selectedId) ??
    visible[0] ??
    exercises[0];
  const isCleared = cleared.includes(selected.id);

  function toggleClear() {
    setCleared((current) => {
      const done = current.includes(selected.id);
      setMessage(
        done
          ? `Mission ${selected.id} reopened.`
          : `Mission ${selected.id} cleared. Nice work.`,
      );
      return done
        ? current.filter((id) => id !== selected.id)
        : [...current, selected.id];
    });
  }

  return (
    <main className="shell">
      <header className="masthead">
        <div className="brand">
          <span>N</span>Next Interview Lab
        </div>
        <p>TypeScript → React → Next.js</p>
      </header>
      <section className="intro">
        <div>
          <p className="eyebrow">YOUR PRACTICE DESK</p>
          <h1>
            Build it.
            <br />
            Explain it. <i>Own it.</i>
          </h1>
          <p>
            Short coding missions for your Next.js interview. Start with the
            file, uncover the brief when you need it, then make the explanation
            yours.
          </p>
        </div>
        <aside className="progress">
          <div>
            <span>Practice progress</span>
            <strong>
              {cleared.length} / {exercises.length}
            </strong>
          </div>
          <span className="track">
            <b
              style={{ width: `${(cleared.length / exercises.length) * 100}%` }}
            />
          </span>
          <p>
            {cleared.length
              ? "Keep the run alive."
              : "Your first clear starts here."}
          </p>
        </aside>
      </section>
      <section className="filter">
        <p>Pick your pace</p>
        <div>
          {levels.map((item) => (
            <button
              aria-pressed={item === level}
              key={item}
              onClick={() => setLevel(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </section>
      <section className="desk">
        <article className="mission">
          <div className="labels">
            <span>Stage {selected.id}</span>
            <span>{selected.level}</span>
            <span>{selected.duration}</span>
          </div>
          <p className="concept">{selected.concept}</p>
          <h2>{selected.title}</h2>
          <p className="brief">{selected.brief}</p>
          <div className="actions">
            <a href={editorLink(selected.filePath)}>Open in VS Code ↗</a>
            <button
              aria-pressed={isCleared}
              onClick={toggleClear}
              type="button"
            >
              {isCleared ? "Undo clear" : "Mark as cleared"}
            </button>
          </div>
          {isCleared && (
            <p className="stamp" role="status">
              Cleared ✓
            </p>
          )}
          <Details exercise={selected} />
          <p className="status" aria-live="polite">
            {message}
          </p>
        </article>
        <nav className="queue" aria-label="Mission stages">
          <div className="queue-title">
            <p className="eyebrow">STAGE QUEUE</p>
            <span>{visible.length} available</span>
          </div>
          <ol>
            {visible.map((item) => (
              <li key={item.id}>
                <button
                  aria-pressed={item.id === selected.id}
                  className={item.id === selected.id ? "selected" : ""}
                  onClick={() => setSelectedId(item.id)}
                  type="button"
                >
                  <b>{item.id}</b>
                  <span>
                    <strong>{item.title}</strong>
                    <small>
                      {item.level} · {item.duration}
                    </small>
                  </span>
                  <em className={cleared.includes(item.id) ? "done" : ""}>
                    {cleared.includes(item.id) ? "Cleared" : "Open"}
                  </em>
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </section>
      <footer>
        ✦ Try for 15 minutes before searching. Look up the smallest missing
        idea, not the solution.
      </footer>
    </main>
  );
}
