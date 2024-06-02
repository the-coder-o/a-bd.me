import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "@/app/components/Link";
import { allBlogs } from ".contentlayer/generated";

import Avatar from "@/app/components/Avatar";
import Tags from "@/app/components/Tags";
import Mdx from "@/app/blog/components/MdxWrapper";
import FlipNumber from "@/app/components/FlipNumber";

import { formatDate } from "@/app/_utils/formatDate";
import { getViewsCount } from "@/app/db/queries";
import { incrementViews } from "@/app/db/actions";
import NewsletterSignupForm from "@/app/blog/components/NewsletterSignupForm";

type Props = {
  params: {
    slug: string;
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const {
    title,
    date: publishedTime,
    summary: description,
    image,
    slug,
  } = blog;

  const ogImage = image
    ? `https://b-r.io/${image}`
    : `https://b-r.io/api/og?title=${title}`;

  const metadata: Metadata = {
    metadataBase: new URL("https://a-bd.me"),
    title: `${title} | Abdul Basit`,
    description,
    openGraph: {
      title: `${title} | Abdul Basit`,
      description,
      type: "article",
      publishedTime,
      url: `https://a-bd.me/blog/${slug}`,
      images: [{ url: ogImage, alt: title }],
    },
  };

  return metadata;
}

export default async function Blog({ params }: { params: any }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-20">
      <article>
        <div className="flex flex-col gap-8">
          <div className="flex max-w-xl flex-col gap-4 text-pretty">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
              {blog.title}
            </h1>
            <p className="text-secondary">{blog.summary}</p>
          </div>
          <div className="flex max-w-none items-center gap-4">
            <Avatar
              src={"https://i.ibb.co/th7RCSC/1.jpg"}
              initials="br"
              size="sm"
            />
            <div className="leading-tight">
              <p>Abdul Basit</p>
              <p className="text-secondary">
                <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                {blog.updatedAt
                  ? `(Updated ${formatDate(blog.updatedAt)})`
                  : ""}
                {" · "}

                <Views slug={blog.slug} />
              </p>
            </div>
          </div>
        </div>
        {blog.image && (
          <>
            <div className="h-8" />
            <Image
              src={blog.image}
              alt={`${blog.title} blog image`}
              width={700}
              height={350}
              className="-ml-6 w-[calc(100%+48px)] max-w-none md:rounded-lg lg:-ml-20 lg:w-[calc(100%+160px)]"
              priority
            />
          </>
        )}
        <div className="h-16" />
        <div className="prose prose-neutral text-pretty">
          <Mdx code={blog.body.code} />
        </div>
      </article>

      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <h2>Tags</h2>
          <Tags tags={blog.tags} />
        </div>
        <div className="flex flex-col gap-6">
          <h2>Contact</h2>
          <p className="max-w-lg text-pretty text-secondary">
            Questions or need more details? Ping me on the{" "}
            <Link href="/community" underline>
              community
            </Link>{" "}
            chat or reach me at{" "}
            <Link href="mailto:brian@b-r.io" underline>
              brian@b-r.io
            </Link>{" "}
            I&apos;d be happy to connect!
          </p>
        </div>
        <NewsletterSignupForm contained={false} />
      </div>
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  let blogViews = await getViewsCount();
  const viewsForBlog = blogViews.find((view) => view.slug === slug);

  incrementViews(slug);

  return (
    <span>
      <FlipNumber>{viewsForBlog?.count || 0}</FlipNumber>
      {viewsForBlog?.count === 1 ? " view" : " views"}
    </span>
  );
}
