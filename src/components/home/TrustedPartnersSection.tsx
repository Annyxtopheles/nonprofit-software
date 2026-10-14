import baspLogo from "@/assets/logos/basp-logo.png";
import ymcaLogo from "@/assets/logos/ymca-logo.png";
import optimistsLogo from "@/assets/logos/optimists-logo.png";

interface Colors {
  headline: string;
  body: string;
}

const partners = [
  { src: baspLogo, alt: "Bangladeshi-American Society of Professionals" },
  { src: ymcaLogo, alt: "The YMCA" },
  { src: optimistsLogo, alt: "The Optimists" },
];

export function TrustedPartnersSection({ colors }: { colors: Colors }) {
  return (
    <section className="section-tint py-12 md:py-16 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <p
          className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
          style={{ color: colors.body }}
        >
          Trusted Partners
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold text-balance mb-3"
          style={{ color: colors.headline }}
        >
          Trusted by Mission-Driven Organizations
        </h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10" style={{ color: colors.body }}>
          Nonprofits and community organizations rely on us to keep their data, donors, and boards
          moving in the same direction.
        </p>

        <ul className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-14">
          {partners.map((p) => (
            <li key={p.alt} className="flex min-h-[96px] items-center justify-center">
              <img
                src={p.src}
                alt={p.alt}
                width={260}
                height={96}
                loading="lazy"
                className="max-h-20 w-auto object-contain transition-transform duration-300 hover:scale-[1.04] motion-reduce:transition-none motion-reduce:hover:scale-100"
              />
            </li>
          ))}

        </ul>
      </div>
    </section>
  );
}
