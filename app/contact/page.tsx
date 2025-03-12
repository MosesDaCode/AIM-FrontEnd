import { montserrat, poppins } from "@/assets/Fonts";

export default function Contact() {
  return (
    <section>
      <article className="max-w-prose prose mx-auto lg:prose-xl px-4 lg:pt-8 py-4">
        <h1 className={`${montserrat.className} text-4xl`}>Contact Us</h1>
        <div className={`${poppins.className}`}>
          <p>
            <em>Do you want to get in contact with us?</em>
          </p>
          <p>Email: info@aim-org.net</p>
          <hr />
          <p>
            <em>For updates, follow us on:</em>
          </p>
          <p>Instagram: @Arameans_in_medicine</p>
          <p>Facebook: @Arameans in medicine</p>
          <p>LinkedIn: @Arameans in medicine</p>
        </div>
      </article>
    </section>
  );
}
