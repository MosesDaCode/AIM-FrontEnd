import { montserrat, poppins } from "./layout";

export default function Home() {
  return (
    <section>
      <article className="max-w-prose prose mx-auto lg:prose-xl px-4">
        <h1 className={`${montserrat.className} text-4xl`}>Arameans in medicine</h1>
        <h2 className={`${montserrat.className} text-xl`}>A platform aiming to connect and serve.</h2>
        <div className={`${poppins.className}`}>
          <p>Welcome to the page of Arameans in Medicine, a dedicated non-profit and politically independent organization
            for networking, fellowship and charity intended to bring together Arameans(Syriacs) and all Christians originating in the Middle East who work within or study healthcare and medicine.</p>

          <p>The idea arose a few years ago from a student with a strong will for charity seeing how well established our ethnic group had become within various sectors of the medical field. However there was a lack of networking among them. Imagine what could be achieved if they all worked together.</p>

          <p>At the same time there was a high prevalence of health issues and an inadequate public health knowledge within the Aramean community. There was also an increasing gap between the community and health care system. This needed to change.</p>

          <p>The vision was finally made real and on the 03-12-2023 the initiation ceremony of Arameans in Medicine was held, in Sweden. Now begins the journey.</p>

          <p>Together we can work for a greater purpose!</p>

          <p>AIM.</p>
        </div>
      </article>
    </section>
  );
}
