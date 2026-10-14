import bspLogo from "@/assets/logos/bsp-logo.svg";
import ymcaLogo from "@/assets/logos/ymca-logo.svg";
import optimistsLogo from "@/assets/logos/the-optimists-logo.svg";
import cfrLogo from "@/assets/logos/council-on-foreign-relations.svg";
import ivolunteerLogo from "@/assets/logos/ivolunteer-international.svg";
import queensChamberLogo from "@/assets/logos/queens-chamber.png";
import iaaboLogo from "@/assets/logos/iaabo.png";
import apcomLogo from "@/assets/logos/apcom-logo.png";

interface Colors {
  headline: string;
  body: string;
}

const partners = [
  { src: bspLogo, alt: "Bangladeshi-American Society of Professionals (BSP)", imgClass: "max-h-12 sm:max-h-14" },
  { src: ymcaLogo, alt: "The YMCA", imgClass: "max-h-12 sm:max-h-14" },
  { src: optimistsLogo, alt: "The Optimists", imgClass: "max-h-10 sm:max-h-12" },
  { src: cfrLogo, alt: "Council on Foreign Relations", imgClass: "max-h-12 sm:max-h-14" },
  { src: ivolunteerLogo, alt: "iVolunteer International", imgClass: "max-h-10 sm:max-h-11" },
  { src: queensChamberLogo, alt: "Queens Chamber of Commerce", imgClass: "max-h-11 sm:max-h-13" },
  { src: iaaboLogo, alt: "IAABO - International Association of Approved Basketball Officials", imgClass: "max-h-14 sm:max-h-16" },
  { src: apcomLogo, alt: "APCOM", imgClass: "max-h-9 sm:max-h-10" },
];

export function TrustedPartnersSection({ colors }: { colors: Colors }) {
  return (
    <section className="section-tint py-12 md:py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
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

        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center">
          {partners.map((p) => (
            <li key={p.alt} className="flex h-20 w-full items-center justify-center p-2">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className={`${p.imgClass} max-w-[170px] w-auto h-auto object-contain transition-transform duration-300 hover:scale-[1.05] motion-reduce:transition-none motion-reduce:hover:scale-100`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
