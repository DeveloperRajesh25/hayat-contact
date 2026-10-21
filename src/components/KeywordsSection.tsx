const keywords = [
  "interior designers in bangalore",
  "home interior designers in bangalore",
  "interior design company in bangalore",
  "interior design services in bangalore",
  "interior design services",
  "interior designers near me",
  "home interior designer near me",
  "interior design company near me",
  "interior designers in my area",
  "interior design near me",
  "apartment interior design",
  "luxury interiors bangalore",
  "premium interior designers in bangalore",
  "modular kitchen bangalore",
  "modular kitchen design bangalore",
  "kitchen interior design bangalore",
  "kitchen interior designers in bangalore",
  "kitchen interior design cost bangalore",
  "modular kitchen interior design",
];

export default function KeywordsSection() {
  return (
    <section className="bg-zinc-50 border-t border-zinc-100 py-4 md:py-6">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="text-center text-[9px] md:text-[11px] leading-relaxed text-zinc-400">
          {keywords.map((kw, i) => (
            <span key={kw}>
              {kw}
              {i < keywords.length - 1 && <span className="mx-1 text-zinc-300">•</span>}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
