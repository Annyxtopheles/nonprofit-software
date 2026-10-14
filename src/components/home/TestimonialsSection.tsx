import { Quote } from "lucide-react";

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
    <section className="section-surface py-12 md:py-16 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-balance mb-3"
            style={{ color: colors.headline }}
          >
            What Nonprofit Leaders Say
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.body }}>
            Illustrative examples of the outcomes teams aim for with the Control Tower.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-xl p-6 md:p-8 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              style={{ backgroundColor: colors.bg, border: `1px solid ${colors.border}` }}
            >
              <span
                className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: colors.accentLight, color: colors.accent }}
                aria-hidden="true"
              >
                <Quote className="h-5 w-5" />
              </span>
              <blockquote
                className="flex-1 text-base md:text-lg leading-relaxed"
                style={{ color: colors.headline }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-5" style={{ borderTop: `1px solid ${colors.border}` }}>
                <span className="block font-bold" style={{ color: colors.headline }}>
                  {t.name}
                </span>
                <span className="block text-sm" style={{ color: colors.body }}>
                  {t.title}, {t.org}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
