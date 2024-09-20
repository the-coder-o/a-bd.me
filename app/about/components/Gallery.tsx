"use client";

import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import localFont from "next/font/local";

import texas from "public/gallery/texas.jpg";
import meLily from "public/gallery/me-lily.jpg";
import colorado from "public/gallery/colorado.jpg";
import cowboy from "public/gallery/cowboy-bike.webp";

import Halo from "@/app/components/Halo";

const ticketingFont = localFont({
  src: "../../../public/ticketing.woff2",
  display: "swap",
});

type PhotoProps = {
  src: StaticImageData | string;
  meta?: ReactNode;
  filename?: string;
  alt: string;
  width: number;
  height: number;
  rotate: number;
  left: number;
  index: number;
  flipDirection?: "left" | "right";
  children?: ReactNode;
};

function Photo({
  src,
  alt,
  filename,
  width,
  height,
  rotate,
  left,
  index,
  flipDirection,
  meta,
  children,
}: PhotoProps) {
  const fileName =
    filename ||
    (typeof src !== "string" &&
      `${src.src.split("/").at(-1)?.split(".")[0]}.jpg`);
  const shared = "absolute h-full w-full rounded-xl overflow-hidden";
  return (
    <motion.div
      className={`absolute mx-auto cursor-grab hover:before:absolute hover:before:-left-7 hover:before:-top-8 hover:before:block hover:before:h-[300px] hover:before:w-[calc(100%+55px)]`}
      style={{ rotate: `${rotate}deg`, left, width, height, perspective: 1000 }}
      initial={{
        width,
        height,
        rotate: (rotate || 0) - 20,
        y: 200 + index * 20,
        x: index === 1 ? -60 : index === 2 ? -30 : index === 3 ? 30 : 60,
        opacity: 0,
      }}
      transition={{
        default: {
          type: "spring",
          bounce: 0.2,
          duration:
            index === 1 ? 0.8 : index === 2 ? 0.85 : index === 3 ? 0.9 : 1,
          delay: index * 0.15,
        },
        opacity: {
          duration: 0.7,
          ease: [0.23, 0.64, 0.13, 0.99],
          delay: index * 0.15,
        },
        scale: { duration: 0.12 },
      }}
      animate={{ width, height, rotate, y: 0, opacity: 1, x: 0 }}
      drag
      whileTap={{ scale: 1.1, cursor: "grabbing" }}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      whileHover="flipped"
    >
      <motion.div
        className="relative h-full w-full rounded-xl shadow-md will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ type: "spring", duration: 0.4 }}
        variants={{
          flipped: {
            scale: 1.1,
            rotateY: flipDirection === "right" ? -180 : 180,
            rotateX: 5,
          },
        }}
      >
        <div className={shared} style={{ backfaceVisibility: "hidden" }}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="pointer-events-none absolute inset-0 h-full w-full rounded-xl bg-neutral-400 object-cover"
            priority
          />
          {children}
        </div>
        <div
          className={clsx(
            shared,
            "flex items-center overflow-hidden rounded-xl bg-[#FFFAF2]",
          )}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Halo strength={50} className="flex items-center">
            <span className="absolute h-[500px] w-[500px] rotate-[-20deg] bg-[url('/photopaper.png')] bg-[length:280px] bg-repeat" />
            <div className="z-[1] px-6">
              <div
                className={clsx(
                  ticketingFont.className,
                  "flex flex-col gap-1 uppercase",
                )}
              >
                <p className="text-secondary">{fileName}</p>
                {meta && <p className="text-sm text-secondary">{meta}</p>}
              </div>
            </div>
          </Halo>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <>
      <section className="relative flex h-[268px] gap-4">
        <Photo
          src={
            "https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/757855/an-image-of-googles-office-headquarters.jpg&w=2000&op=resize"
          }
          meta="2021-07-12"
          alt="Brian and Lily"
          width={324}
          height={239}
          rotate={-6}
          left={-76}
          index={1}
        />
        <Photo
          src={
            "https://www.asiaplustj.info/sites/default/files/articles/276225/Dnctx9NXcAEnaeF.jpg"
          }
          meta="2017-07-04"
          alt="my e-bike"
          width={230}
          height={250}
          rotate={6.3}
          left={160}
          index={2}
          flipDirection="left"
        />
        <Photo
          src={
            "https://i.pinimg.com/originals/e4/6d/3e/e46d3ef6acb4bacd06c8fe5e008e1cc1.jpg"
          }
          meta="2021-05-20"
          alt="Texas"
          width={280}
          height={235}
          rotate={-5.4}
          left={300}
          index={3}
        />
        <Photo
          src={
            "https://avatars.mds.yandex.net/i?id=58198eb663dce0b9fc339966cdfebe47_l-5089284-images-thumbs&ref=rim&n=13&w=1080&h=1351"
          }
          meta="2022-09-10"
          alt={"Snowboarding in Colorado"}
          width={220}
          height={260}
          rotate={7.6}
          left={530}
          index={4}
          flipDirection="left"
        />
      </section>
    </>
  );
}
