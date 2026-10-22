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
    <section className="overflow-hidden h-0" aria-hidden="true">
      <p className="sr-only">
        {keywords.join(" | ")}
      </p>
    </section>
  );
}
