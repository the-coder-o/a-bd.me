import { ArrowUpRight } from 'lucide-react'

import { ContactLinkData } from '@/lib/data/link.data'

const LinkItem = () => {
  return (
    <>
      <div className="flex flex-col gap-5  w-full max-md:w-full">
        <div className="flex flex-col items-center justify-center gap-2 group">
          {ContactLinkData.map((link) => (
            <a
              className="flex items-center justify-between rounded-[10px] bg-[#efefef] dark:bg-[#222222] px-[15px] py-[15px] w-full max-md:w-full transition hover:!opacity-100 group-hover:opacity-50"
              href={link.url}
              target={'_blank'}
            >
              <div className="flex items-center gap-2 font-[500]">
                <i className={`${link.icon}`}></i>
                <p className={'text-[15px]'}>{link.title}</p>
              </div>
              <div>
                <ArrowUpRight size={18} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default LinkItem
