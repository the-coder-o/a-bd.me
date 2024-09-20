import Image from "next/image";
import { Metadata } from "next";

import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import ConnectLinks from "@/app/components/ConnectLinks";
import Workplaces from "@/app/about/components/Workplaces";
import Gallery from "@/app/about/components/Gallery";

export const metadata: Metadata = {
  title: "About | Abdul Basit",
  description:
    "Tashkent-based Software Engineer and a Content Creator, sharing insights on well-designed products and technology advancements.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A glimpse into me.
        </p>
      </div>
      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={
              "https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/757855/an-image-of-googles-office-headquarters.jpg&w=2000&op=resize"
            }
            alt={"me and lily"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-60 -rotate-6 rounded-xl bg-gray-400 object-cover shadow-md"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={
              "https://www.asiaplustj.info/sites/default/files/articles/276225/Dnctx9NXcAEnaeF.jpg"
            }
            alt={"me and lily"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-48 left-[45%] w-48 rotate-6 rounded-xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority
          />
        </div>
      </div>
      <div className="hidden md:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              Hi, I&apos;m AbdulBasit, born in Uzbekistan and raised in
              Tashkent, Texas. I have been coding for{" "}
              {new Date().getFullYear() - 2022} years. As a software engineer, I
              specialize in full-stack web development and product design.
            </p>
            <p>
              In addition to coding, I create content on my{" "}
              <Link
                className="underline"
                href="https://www.youtube.com/@the_coder_o"
              >
                YouTube
              </Link>{" "}
              channel, covering all things technology, coding vlogs, and
              personal development.
            </p>
            <p>
              When I&apos;m not at my desk, I am probably lifting weights,
              playing soccer, riding my e-bike, or at a local coffee shop :]
            </p>
          </div>
        </Section>
        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              I specialize in Next.js, backend, React, web development, UI/UX,
              and product design. But I am always learning new things. Here are
              some of the places I have worked and studied.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Frontend Developer",
    company: "It Park",
    date: "2023 - 2024",
    imageSrc:
      "https://avatars.mds.yandex.net/i?id=c6b360d34b199b2481605b6130c088bad293d351-10346227-images-thumbs&ref=rim&n=33&w=480&h=480",
    link: "https://camstex.com",
  },
  {
    title: "FullStack Developer",
    company: "Najot Talim",
    date: "2022 - 2023",
    imageSrc:
      "https://marketing.uz/uploads/works/covers/8bd79c07ebc2619902f950153e9d40d6.jpg",
    link: "https://camstex.com",
  },
  {
    title: "Frontend Developer",
    company: "Astrum It academy",
    date: "2021 - 2022",
    imageSrc: "https://marketing.uz/uploads/articles/2387/article-original.jpg",
    link: "https://camstex.com",
  },
];
