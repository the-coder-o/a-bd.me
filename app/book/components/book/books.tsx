import React from 'react'

import Image from 'next/image'

import Link from '@/components/ui/Link'
import { BookData } from '@/content/book.data'

const Books = () => {
  return (
    <div className="animate-in space-y-4" style={{ '--index': 2 } as React.CSSProperties}>
      <h2 className="dark:text-[#b4b4b4] text-[#646464]">Books which I successfully finished</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {BookData?.map((books: any) => (
          <Link className="group col-span-1 flex flex-col no-underline" href={books?.book_view_url}>
            <Image className="aspect-video !object-cover w-full rounded-xl border border-primary bg-tertiary" src={books?.book_image} alt="thumbnail" width="2024" height="1272" />
            <p className="mt-2 font-medium text-primary group-hover:underline leading-tight">{books?.book_tag}</p>
            <p className="text-[13px] dark:text-[#b4b4b4] text-[#646464] line-clamp-2 leading-tight">{books?.book_description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Books
