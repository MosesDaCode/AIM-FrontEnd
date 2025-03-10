import { montserrat, poppins } from "@/assets/Fonts";

export default function About() {
  return (
    <section>
      <article className="max-w-prose prose mx-auto lg:prose-xl px-4 lg:pt-8lg:grid lg:grid-cols-3">
        <h1 className={`${montserrat.className} text-4xl`}>Focus Areas</h1>
        <ul className={`${poppins.className}`}>
          <h3>Fellowship</h3>
          <li>
            Build a global, cross-border network of Arameans(Syriacs) and other
            Middle Eastern christians studying, working or researching in the
            fields of healthcare or medicine.
          </li>

          <li>
            To create a forum for the exchange of experiences and discussions on
            current challenges within the medical field.
          </li>
        </ul>

        <ul className={`${poppins.className}`}>
          <h3>Career</h3>
          <li>
            Supporting professionels and students through local and
            international collaborations, courses, events, job offers,
            internships and more. Connecting employers with potential employees.
          </li>
        </ul>

        <ul className={`${poppins.className}`}>
          <h3>Charity</h3>
          <li>
            Initiate charity fundraisers primarily targeting the Aramean(Syriac)
            community.
          </li>

          <li>
            Posting articles on common health and medical issues for the public.
          </li>

          <li>
            Preservation of Aramean(Syriac) historical and cultural medical
            heritage with an archive.
          </li>
        </ul>
      </article>
    </section>
  );
}
