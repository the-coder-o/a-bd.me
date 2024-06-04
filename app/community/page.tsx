import { Suspense } from "react";
import { Metadata } from "next";
import { getCommunityPosts } from "@/app/db/queries";
import Post from "@/app/community/components/Post";

export const metadata: Metadata = {
  title: "Community | Abdul Basit",
  description: "Join the community and share your thoughts.",
  openGraph: {
    title: "Community | Abdul Basit",
    description: "Join the community and share your thoughts.",
    type: "website",
    url: "https://a-bd.me/blog/community",
    images: [
      { url: "https://i.ibb.co/9r0VmHw/Abdul-Basit.png", alt: "community" },
    ],
  },
};

export default async function CommunityPage() {
  return (
    <Suspense>
      <Posts />
    </Suspense>
  );
}

async function Posts() {
  let posts = await getCommunityPosts();

  if (posts.length === 0) {
    return (
      <div className="text-tertiary">
        It&apos;s lonely here. Be the first to post!
      </div>
    );
  }

  return (
    <div className="flex flex-col divide-y divide-secondary">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
