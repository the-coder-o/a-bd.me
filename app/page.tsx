import Link from 'next/link'
import { ArrowUpRight, Github, TrendingUp, Youtube } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Home() {
  return (
    <main className={'container'}>
      <div className={'pt-[5rem] flex flex-col gap-8'}>
        <div>
          <h1 className={'font-bold text-3xl'}>Abdul Basit</h1>
          <p className={'dark:text-[#b4b4b4] text-[#646464]'}>I write code and make videos.</p>
        </div>
        <div className={'flex gap-6 max-md:flex-col '}>
          <Avatar className={'w-[85px] h-[85px]'}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className={'space-y-2 group'}>
            <Link href={'/'} className={'flex items-center gap-2 text-[#646464] dark:text-[#b4b4b4] transition hover:text-zinc-900 dark:hover:text-white group-hover:opacity-60'}>
              <Github size={18} />
              561 Repository Stars
            </Link>
            <Link href={'/'} className={'flex items-center gap-2 text-[#646464] dark:text-[#b4b4b4] transition hover:text-zinc-900 dark:hover:text-white group-hover:opacity-60'}>
              <Youtube size={19} />5 YouTube Subscribers
            </Link>
            <Link href={'/'} className={'flex items-center gap-2 text-[#646464] dark:text-[#b4b4b4] transition hover:text-zinc-900 dark:hover:text-white group-hover:opacity-60'}>
              <TrendingUp size={19} />
              10,002 Total Blog Views
            </Link>
          </div>
        </div>
        <div>
          <p className={'max-w-lg'}>
            Hi, I&apos;m Abdul Basit, a fullStack engineer who loves building cool things with code. In addition to coding, I also make YouTube videos, where I focus on tech, creative vlogs, and
            personal development.
          </p>
        </div>
        <div className={'group flex gap-10 max-md:flex-col max-md:gap-2'}>
          <a href="/" className={'flex items-center gap-2 text-[#646464] dark:text-[#b4b4b4] transition hover:text-zinc-900 dark:hover:text-white group-hover:opacity-60'}>
            <ArrowUpRight size={19} />
            Email me
          </a>
          <a href="/" className={'flex items-center gap-2 text-[#646464] dark:text-[#b4b4b4] transition hover:text-zinc-900 dark:hover:text-white group-hover:opacity-60'}>
            <ArrowUpRight size={19} />
            More ways to connect
          </a>
        </div>
      </div>
      <div className={'pt-[65px]'}>
        <div className={'flex flex-col gap-8'}>
          <div>
            <p className={'text-[#646464] dark:text-[#b4b4b4]'}>Latest Posts</p>
          </div>
          <div>
            <a href={'/'} className={'py-3 flex gap-[60px] max-md:flex-row max-md:justify-between max-md:gap-2'}>
              <div className={'flex gap-[60px] max-md:flex max-md:flex-col max-md:gap-2'}>
                <span className={'text-[#646464] dark:text-[#b4b4b4]'}>Mar 05, 2023</span>
                <p className={'font-medium dark:text-[#fff] transition hover:!text-[#b4b4b5]'}>My Desk Setup for 2023</p>
              </div>
              <img src="https://www.b-r.io/_next/image?url=%2Fprojects%2Fhines%2Fcover.png&w=3840&q=75" width={96} height={96} alt="my" className={'rounded-lg hidden max-md:block'} />
            </a>
            <a href={'/'} className={'py-3 flex gap-[60px] max-md:flex-row max-md:justify-between max-md:gap-2'}>
              <div className={'flex gap-[60px] max-md:flex max-md:flex-col max-md:gap-2'}>
                <span className={'text-[#646464] dark:text-[#b4b4b4]'}>Mar 05, 2023</span>
                <p className={'font-medium dark:text-[#fff] transition hover:!text-[#b4b4b5]'}>My Desk Setup for 2023</p>
              </div>
              <img src="https://www.b-r.io/_next/image?url=%2Fprojects%2Fhines%2Fcover.png&w=3840&q=75" width={96} height={96} alt="my" className={'rounded-lg hidden max-md:block'} />
            </a>
            <a href={'/'} className={'py-3 flex gap-[60px] max-md:flex-row max-md:justify-between max-md:gap-2'}>
              <div className={'flex gap-[60px] max-md:flex max-md:flex-col max-md:gap-2'}>
                <span className={'text-[#646464] dark:text-[#b4b4b4]'}>Mar 05, 2023</span>
                <p className={'font-medium dark:text-[#fff] transition hover:!text-[#b4b4b5]'}>My Desk Setup for 2023</p>
              </div>
              <img src="https://www.b-r.io/_next/image?url=%2Fprojects%2Fhines%2Fcover.png&w=3840&q=75" width={96} height={96} alt="my" className={'rounded-lg hidden max-md:block'} />
            </a>
          </div>
          <div>
            <a href="/" className={'text-[#646464] dark:text-[#b4b4b4] underline transition hover:text-zinc-900 dark:hover:text-white'}>
              See All
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
