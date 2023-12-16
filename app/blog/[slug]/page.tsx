'use client'

import { cn } from '@/lib/utils'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { motion } from 'framer-motion'
import { BlogData } from '@/content/blog.data'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import Halo from '@/components/ui/Halo'
import SignUpFrom from '@/app/blog/components/ui/SignUpFrom'

const SingleBlogPage = () => {
  const pathname = usePathname()

  const blog = BlogData.find((item) => item.slug === pathname.split('/')[2])

  return (
    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className={'container pt-[5rem] pb-16'}>
      <div className={'flex flex-col gap-20'}>
        <div>
          <div className={'flex animate-in flex-col gap-8'}>
            <div className={'max-w-xl space-y-2'}>
              <h1 className={'text-3xl font-bold leading-tight tracking-tight text-primary'}>{blog?.blog_title}</h1>
              <p className={'text-lg leading-tight text-[#646464] dark:text-[#b4b4b4] md:text-xl'}>{blog?.blog_description}</p>
            </div>
            <div className={'flex max-w-none items-center gap-4'}>
              <div className={'flex max-w-none items-center gap-4'}>
                <img width={40} height={40} src={'https://i.ibb.co/7rGG5Vm/person2.jpg'} alt={blog?.blog_title} className={'rounded-full'} />
                <div className={'leading-tight'}>
                  <p className={'font-medium text-primary'}>Abdul Basit</p>
                  <p className={'text-[#646464] dark:text-[#b4b4b4]'}>{blog?.blog_publish_date} · 4294 views</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-8"></div>
          <img width={100} height={100} src={blog?.blog_main_image_url} alt={blog?.blog_title} className={'rounded-lg !w-[100%]'} />
          <div className="h-16"></div>
          <div className={'prose prose-neutral animate-in'}>
            <p className={'text-[#646464] dark:text-[#b4b4b4] text-[17px]'}>{blog?.blog_main_description}</p>
            {blog?.blogs?.map((blog: any) => (
              <>
                <div>
                  <h2 className={'text-[1.5rem] mt-[48px] mb-[18px]'}>{blog?.blog_title}</h2>
                  <p className={'text-[#646464] dark:text-[#b4b4b4] text-[17px]'}>{blog?.blog_description}</p>
                  {blog?.blog_list?.map((list: any) => (
                    <ul className={'list-disc my-[20px] pl-8'}>
                      <li className={'text-[#646464] dark:text-[#b4b4b4] text-[17px]'}>{list}</li>
                    </ul>
                  ))}
                  {blog?.blog_paragraph?.map((paragraph: any) => (
                    <div>
                      <p className={'text-[#6e6e6e] text-[.875rem] my-[17px]'}>{paragraph}</p>
                    </div>
                  ))}
                </div>
                <div className={cn('mt-[20px]', blog?.blog_code_block ? 'block' : 'hidden')}>
                  <div className={'!rounded-lg'}>
                    <SyntaxHighlighter
                      language="javascript"
                      style={atomOneDark}
                      customStyle={{
                        padding: '25px',
                        borderRadius: '8px',
                        fontSize: '12.1px',
                      }}
                      wrapLongLines={false}
                      showLineNumbers={true}
                    >
                      {blog?.blog_code_block}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className={'flex flex-col gap-20'}>
          <div className={'flex flex-col gap-6'}>
            <h2>Tags</h2>
            <div className={'flex flex-wrap gap-3 '}>
              {blog?.blog_tags?.map((tag) => (
                <div className={'whitespace-nowrap font-medium rounded-lg bg-[#e8e8e8] dark:bg-[#2a2a2a] dark:text-[#b4b4b4] text-[#646464] px-4 py-1.5 text-sm'}>{tag}</div>
              ))}
            </div>
          </div>
          <Halo strength={5}>
            <SignUpFrom />
          </Halo>
          <Link href={'/project'} className="underline-offset-4 text-primary underline">
            ← All Blogs
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default SingleBlogPage
