import { FaYoutube } from "react-icons/fa";
import Link from "@/app/components/ui/Link";
import Card from "@/app/components/bento/CardTemplate";

export default async function YouTube() {
  return (
    <Card className="col-span-2 row-span-1 flex justify-between gap-6">
      <div className="flex flex-col gap-1.5">
        <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-lg bg-[#FF0000]">
          <FaYoutube className="text-xl text-white" />
        </div>
        <p className="text-[#b4b4b4]">@the_coder_o</p>
        <Link
          className="mt-auto flex items-center gap-1.5 rounded-full bg-secondary px-4 py-1.5 text-sm no-underline hover:bg-tertiary"
          href="https://www.youtube.com/channel/UC8D9cwzX9Utv7InLSNCm1VQ"
        >
          <span className="font-medium text-primary">Subscribe</span>
          <span className="text-tertiary">186</span>
        </Link>
      </div>
      <div className="grid w-full grid-cols-2 grid-rows-2 gap-3">
        <Link
          className="relative col-span-1 row-span-1"
          href={"https://youtu.be/j68U1wBplk8"}
        >
          <img
            src={"https://i.ibb.co/nCvSB1g/photo-2024-01-10-17-32-18.jpg"}
            alt="thumbnail"
            className="h-full rounded-lg border border-secondary object-cover hover:opacity-75"
          />
        </Link>
        <Link
          className="relative col-span-1 row-span-1"
          href={"https://youtu.be/53KFVt2GRkE"}
        >
          <img
            src={
              "https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/POLL/ycxhg2aymuorqsgmitgfhg.jpg"
            }
            alt="thumbnail"
            className="h-full rounded-lg border border-secondary object-cover hover:opacity-75"
          />
        </Link>
        <Link
          className="relative col-span-1 row-span-1"
          href={"https://youtu.be/mH4Fs1Pxomo"}
        >
          <img
            src={
              "https://i.ibb.co/C8VqBHH/DALL-E-2024-02-17-20-35-23-Illustrate-a-serene-and-productive-home-office-setting-where-a-person-is.webp"
            }
            alt="thumbnail"
            className="h-full rounded-lg border border-secondary object-cover hover:opacity-75"
          />
        </Link>
        <Link
          className="relative col-span-1 row-span-1"
          href={"https://youtu.be/BlB5wovFmjc"}
        >
          <img
            src={
              "https://www.b-r.io/_next/image?url=%2Fblog%2Ftailwind%2Fimage.png&w=750&q=100"
            }
            alt="thumbnail"
            className="h-full rounded-lg border border-secondary object-cover hover:opacity-75"
          />
        </Link>
      </div>
    </Card>
  );
}
