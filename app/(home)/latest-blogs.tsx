import React, { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BlogData } from '@/content/blog.data'

interface Coordinate {
  x: number
  y: number
}

const LatestBlogs: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<Coordinate>({ x: 240, y: 0 }),
    [hoveredIndex, setHoveredIndex] = useState<number | null>(null),
    [currentImage, setCurrentImage] = useState<string | null>(null),
    listRef = useRef<HTMLDivElement>(null),
    getRelativeCoordinates: (event: MouseEvent, referenceElement: HTMLElement) => Coordinate = (event: MouseEvent, referenceElement: HTMLElement): Coordinate => {
      const position = { x: event.pageX, y: event.pageY }
      let offset = { left: referenceElement.offsetLeft, top: referenceElement.clientTop }

      let reference = referenceElement.offsetParent as HTMLElement
      while (reference) {
        offset.left += reference.offsetLeft
        offset.top += reference.offsetTop
        reference = reference.offsetParent as HTMLElement
      }

      return {
        x: position.x - offset.left,
        y: position.y - offset.top,
      }
    },
    handleMouseMove = (index: number, imageUrl: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (listRef.current) {
        setMousePosition(getRelativeCoordinates(e.nativeEvent, listRef.current))
        setHoveredIndex(index)
        setCurrentImage(imageUrl)
      }
    },
    handleMouseLeave = () => {
      setHoveredIndex(null)
      setCurrentImage(null)
    },
    imageDimensions = { height: 150, width: 300, offset: 22 }

  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }} className="relative transition-opacity">
      {BlogData.slice(1, 4)
        .reverse()
        .map((blog, index) => (
          <React.Fragment key={blog.slug}>
            <Link
              onMouseMove={handleMouseMove(index, blog.blog_main_image_url)}
              onMouseLeave={handleMouseLeave}
              href={`/blog/${blog.slug}`}
              className="py-3 flex animated-list gap-[60px] max-md:flex-row max-md:justify-between max-md:gap-2 transition hover:!opacity-100 group-hover:opacity-50"
              passHref
            >
              <div ref={index === 0 ? listRef : null} className="flex gap-[60px] max-md:flex max-md:flex-col max-md:gap-2">
                <span className="text-[#646464] dark:text-[#b4b4b4] max-md:w-32">{blog.blog_publish_date}</span>
                <p className="font-medium dark:text-[#fff] transition max-md:leading-tight max-sm:text-md">{blog.blog_title}</p>
              </div>
              <img src={blog.blog_main_image_url} width={100} height={100} alt={blog.blog_title} className="rounded-lg !object-cover hidden max-md:block !w-[100px] !h-auto" />
            </Link>
          </React.Fragment>
        ))}
      {currentImage && hoveredIndex !== null && (
        <motion.div
          animate={{
            top: mousePosition.y - imageDimensions.height - imageDimensions.offset,
            left: mousePosition.x - imageDimensions.width / 2,
            opacity: [0, 1],
          }}
          initial={false}
          transition={{ ease: 'easeOut', duration: 0.2 }}
          style={{ width: imageDimensions.width, height: imageDimensions.height }}
          className="absolute z-10 overflow-hidden rounded shadow-sm pointer-events-none sm:block bg-primary"
        >
          <Image src={currentImage} alt="Hovered blog image" layout="fill" />
        </motion.div>
      )}
    </motion.div>
  )
}

export default LatestBlogs
