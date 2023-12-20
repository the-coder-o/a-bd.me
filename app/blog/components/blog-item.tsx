import Link from 'next/link'

import { BlogData } from '@/content/blog.data'

const BlogItem = () => {
  return (
    <>
      <div>
        <h2 className={'rounded-lg text-[12px] font-bold'}>2023</h2>
      </div>
      {BlogData.map((blog) => (
        <Link href={'/blog/' + blog?.slug} className={'py-3 flex gap-[60px] max-md:flex-row max-md:justify-between max-md:gap-2 transition hover:!opacity-100 group-hover:opacity-50'}>
          <div className={'flex gap-[60px] max-md:flex max-md:flex-col max-md:gap-2'}>
            <span className={'text-[#646464] dark:text-[#b4b4b4]'}>{blog?.blog_publish_date}</span>
            <p className={'font-medium dark:text-[#fff] transition max-md:leading-tight'}>{blog?.blog_title}</p>
          </div>
          <img src={blog?.blog_main_image_url} width={100} height={100} alt="my" className={'rounded-lg hidden max-md:block'} />
        </Link>
      )).reverse()}
    </>
  )
}

export default BlogItem
