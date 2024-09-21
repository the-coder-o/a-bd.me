import Link from 'next/link'
import { BlogData } from '@/content/blog.data'
import { Calendar } from 'lucide-react'

const LatestBlogs = () => {
  return (
    <div className="relative transition-opacity">
      {BlogData.slice(2, 5)
        .reverse()
        .map((blog, index) => (
          <Link href={`/blog/${blog.slug}`} className="py-3 flex animated-list gap-[60px] flex-row justify-between max-md:gap-2 transition hover:!opacity-100 group-hover:opacity-50" passHref>
            <div className="flex flex-col gap-1.5">
              <span className="text-[#646464] dark:text-[#b4b4b4] max-md:w-32 flex items-center gap-1">
                <Calendar size={14} /> {blog.blog_publish_date}
              </span>
              <p className="font-medium dark:text-[#fff] transition max-md:leading-tight max-sm:text-md">{blog.blog_title}</p>
              <p className="font-medium dark:text-[#b4b4b4] transition text-xs line-clamp-2">{blog.blog_main_description}</p>
            </div>
            <img src={blog.blog_main_image_url} width={100} height={100} alt={blog.blog_title} className="rounded-lg !object-cover !w-[100px] !h-auto" />
          </Link>
        ))}
    </div>
  )
}

export default LatestBlogs
