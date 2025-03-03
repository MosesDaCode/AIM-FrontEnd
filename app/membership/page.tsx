import MembershipForm from "@/components/MembershipForm";

export default function Membership() {
  return (
    <section>
      <article className="max-w-prose prose mx-auto lg:prose-xl px-4">
        <h1>Membership</h1>
        <h2>Benefits of membership</h2>
        <p>
          As an AIM member, you can expect benefits such as health publications
          translated into your native language and access to our healthcare
          experts, as well as being able to contribute to charity for our
          communities in need regarding access to medicine.
        </p>
        <p>
          For students and professionals in medicine, we offer courses, job
          support, help finding internships, network exchanges and opportunities
          to participate in research projects and international events with a
          focus on career and health.
        </p>
        <p>
          As a business member, you will receive advertising space on our
          website and other platforms.
        </p>
        <MembershipForm />
      </article>
    </section>
  );
}
