import { WorkData } from '@/lib/data/about-me.data'

const AboutWork = () => {
  return (
    <>
      <p className="text-[#646464] dark:text-[#b4b4b4] text-[18px] mt-[-2px]">Work</p>
      <div className="flex flex-col gap-8  w-[525px] max-md:w-full">
        <p className={'w-full'}>1.2+ years of professional development experience.</p>
        <p className={'w-full'}>
          I started my career in 2021 which I will always be appreciative of. Then I worked at a few small local companies. Now I'm a full stack engineer currently working at IT park, one of the
          largest private real estate investors in the world.
        </p>
        <div className="flex flex-col gap-8 max-md:flex-col group">
          {WorkData.map((work) => (
            <a href={work?.url} target={'_blank'} className="flex items-center gap-3 transition hover:!opacity-100 group-hover:opacity-50">
              <img className="rounded-full !w-[50px] !h-[50px]" src={work?.img} alt={work?.workTitle} />
              <div className="w-full flex flex-col">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[16px]">{work?.workTitle}</p>
                  </div>
                  <span>{work?.year}</span>
                </div>
                <p className="text-[#646464] dark:text-[#b4b4b4]">{work?.companyName}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default AboutWork
