/**
 * Purely decorative "code editor" card. Shows a short, generic example
 * snippet (not tied to any specific real project) to give the hero a
 * hands-on, technical feel. Server component — no interactivity needed.
 */
export function CodeShowcase() {
  return (
    <div
      aria-hidden="true"
      className="w-full max-w-sm overflow-hidden rounded-card border border-primary/20 bg-ink shadow-glow"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="ml-2 text-xs text-white/40">sensor-reading.ts</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-relaxed">
        <code>
          <span className="text-white/40">{"// example — panel voltage & current"}</span>
          {"\n"}
          <span className="text-primary-light/90">type</span>{" "}
          <span className="text-white">Reading</span> = {"{"}
          {"\n  "}
          <span className="text-white/80">voltage</span>: <span className="text-primary-light/90">number</span>;
          {"\n  "}
          <span className="text-white/80">current</span>: <span className="text-primary-light/90">number</span>;
          {"\n"}
          {"};"}
          {"\n\n"}
          <span className="text-primary-light/90">function</span>{" "}
          <span className="text-white">readSensor</span>(): Reading {"{"}
          {"\n  "}
          <span className="text-primary-light/90">const</span> voltage = adc.
          <span className="text-white">read</span>(PIN_V) * SCALE;
          {"\n  "}
          <span className="text-primary-light/90">const</span> current = adc.
          <span className="text-white">read</span>(PIN_I) * SCALE;
          {"\n  "}
          <span className="text-primary-light/90">return</span> {"{ voltage, current };"}
          {"\n"}
          {"}"}
          {"\n\n"}
          publish(<span className="text-primary-light/90">&quot;lab/panel-01&quot;</span>, readSensor());
        </code>
      </pre>
    </div>
  );
}
