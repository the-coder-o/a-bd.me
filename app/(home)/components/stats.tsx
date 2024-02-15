'use client'

import clsx from 'clsx'
import Link from 'next/link'

import { FaYoutube, FaGithub } from 'react-icons/fa'
import { ArrowTrendingUpIcon } from '@heroicons/react/20/solid'

import FlipNumber from './flip-number'
import { addCommas } from '@/lib/utils/utils'

export function Stats() {
  return (
    <ul className={clsx('space-y-2 animated-list')}>
      <li className="flex items-center gap-2 text-[#646464] dark:text-[#b4b4b4] transition hover:text-zinc-900 dark:hover:!opacity-100 group-hover:opacity-60">
        <Link className="flex gap-3 items-center no-underline" href={'https://github.com/the-coder-o'}>
          {/*// @ts-ignore*/}
          <FaGithub className="text-xl" />
          <div>
            <FlipNumber>{'000' && addCommas(120)}</FlipNumber>
            <span> Repository Stars</span>
          </div>
        </Link>
      </li>
      <li className="flex items-center gap-2 text-[#646464] dark:text-[#b4b4b4] transition hover:text-zinc-900 dark:hover:!opacity-100 group-hover:opacity-60">
        <Link className="flex gap-3 items-center" href="/blog">
          <ArrowTrendingUpIcon className="w-5 h-5" />
          <div>
            <FlipNumber>{1200 ? addCommas(1200) : '1,200'}</FlipNumber>
            <span> Total Blog Views</span>
          </div>
        </Link>
      </li>
      <li className="flex items-center gap-2 text-[#646464] dark:text-[#b4b4b4] transition hover:text-zinc-900 dark:hover:!opacity-100 group-hover:opacity-60">
        <Link className="flex gap-3 items-center no-underline" href={'https://www.youtube.com/@'}>
          {/*// @ts-ignore*/}
          <FaYoutube className="text-xl" />
          <div>
            <FlipNumber>{1000 ? addCommas(1000) : '0,000'}</FlipNumber>
            <span> YouTube total views</span>
          </div>
        </Link>
      </li>
    </ul>
  )
}
