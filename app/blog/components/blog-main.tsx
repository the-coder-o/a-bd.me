import { BlogData } from '@/content/blog.data'

const BlogMain = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <p className="dark:text-[#b4b4b4] text-[#646464]">{BlogData.length} posts about code, design, more ...</p>
    </div>
  )
}

export default BlogMain
