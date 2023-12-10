import { ArrowUpRight } from 'lucide-react'

import { ContactLinkData } from '@/lib/data/link.data'
import { AboutMeData, LocationData } from '@/lib/data/about-me.data'

const AboutPage = () => {
  return (
    <div className={'pt-[5rem]'}>
      <div className={'container'}>
        <div className="flex flex-col">
          <h3 className="text-3xl font-bold tracking-tight">About Me</h3>
          <p className="dark:text-[#b4b4b4] text-[#646464]">Just a quick glimpse.</p>
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center justify-center container-for-slider !mt-[100px]">
            <div className="w-[220px] hover:scale-75 ease-in-out duration-300 active:scale-0  rotate-[-8deg]">
              <img className="rounded-[18px] w-[220px] h-[220px] bg-cover bg-no-repeat cursor-pointer" src="https://i.ibb.co/bzCjVtr/person3.jpg" alt={'img'} />
            </div>
            <div className="w-[220px] hover:scale-75 ease-in-out duration-300 active:scale-0  rotate-[9deg] max-md:rotate-[10deg]">
              <img
                className="rounded-[18px] w-[220px] h-[220px] bg-cover bg-no-repeat cursor-pointer max-sm:!w-[188px] max-sm:!h-[188px]"
                src="https://i.ibb.co/rySw8GK/photo-2023-01-15-09-26-31.jpg"
                alt={'img'}
              />
            </div>
            <div className="w-[220px] hover:scale-75 ease-in-out duration-300 active:scale-0  rotate-[-10deg] max-md:hidden">
              <img className="rounded-[18px] w-[220px] h-[220px] bg-cover bg-no-repeat cursor-pointer" src="https://i.ibb.co/Zz8p22b/person2.jpg" alt={'img'} />
            </div>
            <div className="w-[220px] hover:scale-75 ease-in-out duration-300 active:scale-0  rotate-[11deg] max-md:hidden">
              <img className="rounded-[18px] w-[220px] h-[220px] bg-cover bg-no-repeat cursor-pointer" src="https://i.ibb.co/5xQzP7M/photo-2023-08-31-13-32-50.jpg" alt={'img'} />
            </div>
          </div>
        </div>
      </div>
      <div className={'container'}>
        <div className={'flex flex-col gap-16 mt-20 max-md:gap-9'}>
          <div className="flex justify-between max-md:flex-col max-md:gap-2">
            {AboutMeData.map((about, index) => (
              <>
                <p className="text-[#646464] dark:text-[#b4b4b4] text-[18px] mt-[-2px]">{about?.title}</p>
                <div key={index} className="flex flex-col gap-5">
                  <p>{about?.description1}</p>
                  <div className="flex flex-col gap-5 w-[525px] max-md:w-full">
                    <p>{about?.description2}</p>
                    <p>{about?.description3}</p>
                    <p>{about?.description4}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="flex justify-between  max-md:flex-col max-md:gap-2">
            {LocationData.map((location, index) => (
              <>
                <p className="text-[#646464] dark:text-[#b4b4b4] text-[18px] mt-[-2px]">{location?.title}</p>
                <div key={index} className="flex flex-col gap-5">
                  <p>{location?.description1}</p>
                  <div className="flex flex-col gap-5 w-[525px] max-md:w-full">
                    <p>{location?.description2}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div>
            <div className="flex justify-between max-md:flex-col max-md:gap-2">
              <p className="text-[#646464] dark:text-[#b4b4b4] text-[18px] mt-[-2px]">Contact</p>
              <div className="flex flex-col gap-5  w-[525px] max-md:w-full">
                <p>Have a question or just want to chat? Feel free to email me. Try finding me anywhere else at abdulbositsharipovv@gmail.com</p>
                <div className="flex justify-between gap-2 flex-wrap max-md:flex-col group">
                  {ContactLinkData.map((link) => (
                    <a
                      className="flex items-center justify-between rounded-[10px] px-[15px] py-[15px] w-[258px] border-styles max-md:w-full transition hover:bg-zinc-700 group-hover:opacity-50"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
