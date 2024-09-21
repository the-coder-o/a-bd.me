import Link from 'next/link'
import { BlogData } from '@/content/blog.data'

interface Coordinate {
  x: number
  y: number
}

const LatestBlogs = () => {
  return (
    <div className="relative transition-opacity">
      {BlogData?.map((blog, index) => (
        <Link href={`/blog/${blog.slug}`} className="py-3 flex animated-list gap-[60px] max-md:flex-row max-md:justify-between max-md:gap-2 transition hover:!opacity-100 group-hover:opacity-50" passHref>
          <div className="flex gap-[60px] max-md:flex max-md:flex-col max-md:gap-2">
            <span className="text-[#646464] dark:text-[#b4b4b4] max-md:w-32">{blog.blog_publish_date}</span>
            <p className="font-medium dark:text-[#fff] transition max-md:leading-tight max-sm:text-md">{blog.blog_title}</p>
          </div>
          <img src={blog.blog_main_image_url} width={100} height={100} alt={blog.blog_title} className="rounded-lg !object-cover hidden max-md:block !w-[100px] !h-auto" />
        </Link>
      )).reverse()}
    </div>
  )
}

export default LatestBlogs
