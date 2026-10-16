interface Colors {
  bg: string;
  headline: string;
  body: string;
  accent: string;
  accentLight: string;
  border: string;
}

const testimonials = [
  {
    quote:
      "We used to spend the first week of every month stitching spreadsheets together. Now the dashboard is ready before our leadership meeting, and we finally talk about strategy instead of data cleanup.",
    name: "Maria Alvarez",
    title: "Executive Director",
    org: "Community Impact Alliance",
  },
  {
    quote:
      "Our donor pipeline used to live in three systems and one person's head. Having it in one place — with the AI flagging who's slipping away — has changed how our whole development team works.",
    name: "Daniel Okoye",
    title: "Director of Development",
    org: "Riverside Youth Foundation",
  },
];

export function TestimonialsSection({ colors }: { colors: Colors }) {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F9FBF8] border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 md:mb-12 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight text-balance mb-3"
            style={{ color: colors.headline }}
          >
            What Nonprofit Leaders Say
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: colors.body }}>
            Illustrative examples of the outcomes teams aim for with the Control Tower.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex h-full flex-col justify-between rounded-2xl p-7 sm:p-9 bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(28,52,34,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(28,52,34,0.08)] overflow-hidden"
            >
              {/* Corner filled quote mark */}
              <div
                className="absolute top-6 right-6 text-[#108a00]/20 pointer-events-none select-none"
                aria-hidden="true"
              >
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <blockquote
                className="flex-1 text-base sm:text-lg leading-relaxed text-[#001E00] pr-8 mb-6"
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="pt-5 border-t border-slate-100 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#E7F5E3] text-[#108a00] font-bold text-sm flex items-center justify-center shrink-0 border border-[#108a00]/25 shadow-xs">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <span className="block font-semibold text-base text-[#001E00]">
                    {t.name}
                  </span>
                  <span className="block text-xs sm:text-sm text-[#5E6D55]">
                    {t.title}, {t.org}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
