import { montserrat, poppins } from "@/assets/Fonts";

export default function Symbolism() {
  return (
    <section>
      <article className="max-w-prose prose mx-auto lg:prose-xl px-4 lg:pt-8">
        <h1 className={`${montserrat.className} text-4xl`}>
          Faith, heritage and vocation (Symbolism)
        </h1>
        <h2 className={`${montserrat.className} text-4xl`}>
          What is the meaning behind the logo?
        </h2>
        <div className={`${poppins.className}`}>
          <p>
            There are three main features on the logo; The Cross, The eagle and
            the snakes surrounding a staff.
          </p>

          <p>
            The <strong>Cross</strong> symbolizes the christian mission and
            morals that lay the foundation for this organization as well as the
            religion of the members of the target audience.
          </p>

          <p>
            The <strong>eagle</strong> is an ancient symbol for strength and
            drive, found in various Aramean sites during different epochs in
            Mesopotamia. It reflects AIM's dedicated work, the strength of the
            people that have withstood a lot of persecution and their ancient
            heritage.
          </p>

          <p>
            The <strong>snakes surrounding the staff</strong> is taken from the
            universal logo of medicine which is thought to originate from the
            Greek god of healing Aesculapius. The snakes symbolise the transit
            from sickness to cure due to their ability to shed skin and renew
            themselves.
          </p>

          <p>
            There is however a biblical meaning to the{" "}
            <strong>staff and snakes</strong> in AIM's logo. In the book of
            Exodus the Staff of Moses was used to produce water from a rock, was
            transformed into a snake and back, and was used at the parting of
            the Red Sea, thus being a tool for Gods seeming power of rescue over
            death. Moses raised a bronze serpent on a staff upon which the
            afflicted might look and be healed (Numbers 21:6-9).
          </p>

          <p>
            Furthermore the letters <strong>AIM</strong> can be depicted on the logo, where the
            staff serves as the letter "I". Those are the first letters of each
            word in the name <em>Arameans in Medicine</em>, making a new word "aim". AIM
            strives to keep a clear and steady aim towards its goals.
          </p>
        </div>
      </article>
    </section>
  );
}
