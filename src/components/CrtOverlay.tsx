/*
  Fixed scanline + bloom wash over the whole viewport. Purely decorative, so
  it is aria-hidden and pointer-events: none (set in .crt-overlay) — it sits
  at z-50 and would otherwise swallow every click on the page beneath it.
*/
export function CrtOverlay() {
  return <div className="crt-overlay" aria-hidden="true" />;
}
