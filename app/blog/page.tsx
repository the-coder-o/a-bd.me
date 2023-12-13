import Image from 'next/image'

const BlogPage = () => {
  return (
    <div className={'container pt-28'}>
      <div className={'flex flex-col items-center justify-center'}>
        <Image width={350} height={350} className={'!w-[300px] !h-[320px]'} src={'https://www.efulife.com/wp-content/uploads/2017/05/coming-soon-1.png'} alt={'ComingSoonIcon'} />
        <div>
          <p className={'text-center mt-2 font-medium text-[20px] max-md:text-[16px]'}>Uh oh! Page does not exists, Blogs page coming soon, You may see this page soon... 💤</p>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
