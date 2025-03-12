import { montserrat, poppins } from "@/assets/Fonts";

export default function Article() {
  return (
    <section>
      <article className="max-w-prose prose mx-auto lg:prose-xl px-4 lg:pt-8">
        <h1 className={`${montserrat.className} text-4xl`}>The Need</h1>
        <p className={`${montserrat.className}`}>
          By Chairman Dr. Aramia Sauma
        </p>
        <div className={`${poppins.className}`}>
          <p>
            <strong>
              Our community faces exclusion as a minority group both in the
              diaspora and homeland, posing challenges in accessing timely and
              appropriate care.
            </strong>
          </p>

          <p>
            In the diaspora, crucial public health advice often pass by our
            community unnoticed due to linguistic, cultural and socioeconomic
            barriers, exacerbating our exclusion from healthcare rights and
            public health education. Language barriers hinder effective
            communication and advocacy for healthcare needs, while unfamiliarity
            with the diaspora's healthcare system poses challenges in accessing
            timely and appropriate care.
          </p>

          <p>
            Arameans in Medicine (AIM) aim to address these issues, working to
            bridge the healthcare gap and enhance public health education for
            our community. AIM will also support individuals in healthcare and
            medical fields to advance in their careers.
          </p>

          <p>
            "I support AIM, despite not working in any medical or health related
            industry, because health concerns us all and it is important to help
            combat the issues faced by our community regarding health care." -
            Gabriella Saliba
          </p>

          <p>
            As a member of AIM, you can expect benefits such as health
            publications translated into your native language and access to our
            healthcare experts, as well as being able to contribute to charity.
          </p>

          <p>
            For students and professionals in medicine, we offer courses, job
            support, help finding internships, network exchanges and
            opportunities to participate in research projects and international
            events with a focus on career and health.
          </p>

          <p>Let's work together for a great purpose!</p>

          {/* <div>
            <p>Does this sound interesting?</p>
            <p>Would you like to support the cause?</p>
            <p>Then show your support by sharing us with your contacts!</p>
            <p>
              Click <a href="/membership">here</a> or on the white button to
              register for membership
            </p>
            <button>Membership</button>
          </div> */}
        </div>
      </article>
    </section>
  );
}
