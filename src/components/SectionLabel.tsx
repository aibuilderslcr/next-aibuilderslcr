/* Numbered terminal section label with a trailing hairline. */
export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="term-meta term-label" aria-hidden="true">
      <span>{index}</span>
      <span>{label}</span>
    </div>
  );
}
