import Link from 'next/link'

import { ArrowUpRight } from 'lucide-react'

import { ContactLinkData } from '@/lib/data/link.data'

const AboutContact = () => {
  return (
    <>
      <p className="text-[#646464] dark:text-[#b4b4b4] text-[18px] mt-[-2px]">Contact</p>
      <div className="flex flex-col gap-5  w-[525px] max-md:w-full">
        <p>Have a question or just want to chat? Feel free to email me. Try finding me anywhere else at abdulbositsharipovv@gmail.com</p>
        <div className="flex justify-between gap-2 flex-wrap max-md:flex-col group">
          {ContactLinkData.map((link) => (
            <Link className="flex items-center justify-between rounded-[10px] bg-[#efefef] dark:bg-[#121212] px-[15px] py-[15px] w-[258px] border-styles max-md:w-full transition hover:!opacity-100 group-hover:opacity-50" href={link.url} target={'_blank'}>
              <div className="flex items-center gap-2 font-[500]">
                <i className={`${link.icon}`}></i>
                <p className={'text-[15px]'}>{link.title}</p>
              </div>
              <div>
                <ArrowUpRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default AboutContact
