'use client'

import React, { useRef, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'

import { BlogData } from '@/content/blog.data'

const LatestBlogs = () => {
  function getRelativeCoordinates(event: React.MouseEvent<HTMLAnchorElement>, referenceElement: any) {
    const position = {
      x: event.pageX,
      y: event.pageY,
    }

    const offset = {
      left: referenceElement.offsetLeft,
      top: referenceElement.clientTop,
      width: referenceElement.clientWidth,
      height: referenceElement.clientHeight,
    }

    let reference = referenceElement.offsetParent

    while (reference) {
      offset.left += reference.offsetLeft
      offset.top += reference.offsetTop
      reference = reference.offsetParent
    }

    return {
      x: position.x - offset.left,
      y: position.y - offset.top,
    }
  }

  const [mousePosition, setMousePosition] = useState({
    x: 240,
    y: 0,
  })

  const listRef = useRef(null)
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMousePosition(getRelativeCoordinates(e, listRef.current))
  }

  const imageHeight = 150
  const imageWidth = 300
  const imageOffset = 22

  return (
    <>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 3 * 0.1 }} className={'group relative'}>
        <div className="transition-opacity">
          {BlogData && mousePosition && (
            <motion.div
              animate={{
                top: mousePosition.y - imageHeight - imageOffset,
                left: mousePosition.x + imageOffset,
              }}
              initial={false}
              transition={{ ease: 'easeOut' }}
              style={{ width: imageWidth, height: imageHeight }}
              className="absolute z-10 hidden overflow-hidden rounded shadow-sm pointer-events-none sm:group-hover:block bg-primary"
            >
              <Image src={'https://www.b-r.io/_next/image?url=%2Fblog%2Fdesk%2Fimage.png&w=750&q=100'} alt={'title'} width={imageWidth} height={imageHeight} />
            </motion.div>
          )}
        </div>
        {BlogData.map((blog, index) => (
          <Link
            ref={listRef}
            onMouseMove={(e) => {
              handleMouseMove(e)
            }}
            key={index}
            href={'/blog/' + blog?.slug}
            className={'py-3 flex gap-[60px] max-md:flex-row max-md:justify-between max-md:gap-2 transition hover:!opacity-100 group-hover:opacity-50 '}
          >
            <div className={'flex gap-[60px] max-md:flex max-md:flex-col max-md:gap-2'}>
              <span className={'text-[#646464] dark:text-[#b4b4b4] max-md:w-32'}>{blog?.blog_publish_date}</span>
              <p className={'font-medium dark:text-[#fff] transition max-md:leading-tight max-sm:text-md'}>{blog?.blog_title}</p>
            </div>
            <img src={blog?.blog_main_image_url} width={100} height={100} alt={blog?.blog_title} className={'rounded-lg !object-cover hidden max-md:block !w-[100px] !h-auto'} />
          </Link>
        ))
          .reverse()
          .slice(0, 3)}
      </motion.div>
    </>
  )
}

export default LatestBlogs
