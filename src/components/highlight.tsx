// Renders "plain **underlined** plain" with the ** parts underlined.
export function Highlight({ text }: { text: string }) {
  return text.split("**").map((part, i) =>
    i % 2 ? (
      <span key={i} className="mark">
        {part}
      </span>
    ) : (
      part
    ),
  );
}
